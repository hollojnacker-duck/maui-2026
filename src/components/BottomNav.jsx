export default function BottomNav({ page, setPage }) {
  const tabs = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "itinerary", icon: "📅", label: "Trip" },
    { id: "food", icon: "🍽️", label: "Food" },
    { id: "packing", icon: "🎒", label: "Packing" },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-button ${page === tab.id ? "active" : ""}`}
          onClick={() => setPage(tab.id)}
        >
          <div>{tab.icon}</div>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}