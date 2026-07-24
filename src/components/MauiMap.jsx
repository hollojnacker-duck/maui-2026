import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import mauiLocations from "../data/mauiLocations";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet marker icons for Vite/React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MauiMap() {
  return (
    <MapContainer
      center={[20.80, -156.45]}
      zoom={10}
      scrollWheelZoom={true}
      style={{
        height: "calc(100vh - 140px)",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {mauiLocations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
        >
          <Popup>
            <div style={{ minWidth: 180 }}>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "18px",
                }}
              >
                {location.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {location.description}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}