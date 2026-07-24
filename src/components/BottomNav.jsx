import {
  House,
  CalendarDays,
  UtensilsCrossed,
  Map,
} from "lucide-react";

export default function BottomNav({ page, setPage }) {
  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: House,
    },
    {
      id: "itinerary",
      label: "Plan",
      icon: CalendarDays,
    },
    {
      id: "food",
      label: "Food",
      icon: UtensilsCrossed,
    },
    {
      id: "map",
      label: "Map",
      icon: Map,
    },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={`nav-button ${page === tab.id ? "active" : ""}`}
            onClick={() => setPage(tab.id)}
          >
            <Icon size={20} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}