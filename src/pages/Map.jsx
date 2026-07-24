import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import {
  divIcon,
  LatLngBounds,
} from "leaflet";

import {
  House,
  Star,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

import { renderToStaticMarkup } from "react-dom/server";

import "leaflet/dist/leaflet.css";

import mapLocations from "../data/mapLocations";

const COLORS = {
  home: "#DC2626",
  planned: "#334155",
  explore: "#60A5FA",
  food: "#FBBF24",
};

function createMarker(type) {
  const icons = {
    home: House,
    planned: Star,
    explore: MapPin,
    food: UtensilsCrossed,
  };

  const Icon = icons[type];

  const svg = renderToStaticMarkup(
    <Icon
      size={16}
      color="white"
      strokeWidth={2.5}
    />
  );

  return divIcon({
    className: type === "home" ? "home-marker" : "",
    html: `
      <div
        style="
          width:32px;
          height:32px;
          border-radius:50%;
          background:${COLORS[type]};
          border:2px solid white;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 2px 6px rgba(0,0,0,.18);
        "
      >
        ${svg}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

const markerIcons = {
  home: createMarker("home"),
  planned: createMarker("planned"),
  explore: createMarker("explore"),
  food: createMarker("food"),
};

const bounds = new LatLngBounds(
  mapLocations.map((location) => location.position)
);

export default function MapPage() {
  return (
    <div className="map-page">
      <div className="map-header">
        <h1>Map</h1>

        <div className="map-legend">
          <div className="legend-item">
            <House
              size={18}
              color={COLORS.home}
            />
            <span>Home</span>
          </div>

          <div className="legend-item">
            <Star
              size={18}
              color={COLORS.planned}
            />
            <span>Planned</span>
          </div>

          <div className="legend-item">
            <MapPin
              size={18}
              color={COLORS.explore}
            />
            <span>Explore</span>
          </div>

          <div className="legend-item">
            <UtensilsCrossed
              size={18}
              color={COLORS.food}
            />
            <span>Food</span>
          </div>
        </div>
      </div>

      <div className="map-wrapper">
        <MapContainer
          bounds={bounds}
          boundsOptions={{
            padding: [20, 20],
          }}
          scrollWheelZoom
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {mapLocations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={markerIcons[location.type]}
            >
              <Popup
  className="map-popup"
  closeButton={false}
>
  <div className="popup-title">
    {location.name}
  </div>

  {location.subtitle && (
    <div className="popup-subtitle">
      {location.subtitle}
    </div>
  )}
</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}