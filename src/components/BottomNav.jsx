export default function BottomNav({ page, setPage }) {
  return (
    <nav className="bottom-nav">
      <button
        className={page === "home" ? "nav-button active" : "nav-button"}
        onClick={() => setPage("home")}
      >
        Home
      </button>

      <button
        className={page === "itinerary" ? "nav-button active" : "nav-button"}
        onClick={() => setPage("itinerary")}
      >
        Itinerary
      </button>

      <button
        className={page === "food" ? "nav-button active" : "nav-button"}
        onClick={() => setPage("food")}
      >
        Food
      </button>

      <button
        className={page === "packing" ? "nav-button active" : "nav-button"}
        onClick={() => setPage("packing")}
      >
        Packing
      </button>
    </nav>
  );
}