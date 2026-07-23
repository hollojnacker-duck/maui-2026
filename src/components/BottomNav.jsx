import {
  House,
  CalendarDays,
  UtensilsCrossed,
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
  ];


  return (
    <nav className="bottom-nav">

      {tabs.map((tab) => {

        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={`nav-button ${
              page === tab.id ? "active" : ""
            }`}
            onClick={() => setPage(tab.id)}
          >
            <Icon size={20} />
            <span>
              {tab.label}
            </span>
          </button>
        );

      })}

    </nav>
  );
}