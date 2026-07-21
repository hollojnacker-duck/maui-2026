import "./App.css";

export default function App() {
  return (
    <main className="app">

      <section className="hero">

        <div className="hero-overlay">

          <p className="greeting">Good Morning</p>

          <h1>Maui 2026</h1>

          <h2>🤿 Trilogy Day</h2>

          <p className="date">Wednesday • August 19</p>

        </div>

      </section>

      <section className="phrase-card">

        <div className="phrase-header">

          <div>
            <h3>🌺 Aloha Kakahiaka</h3>
            <p>Tap to learn more</p>
          </div>

          <span>⌄</span>

        </div>

      </section>

      <section className="card">

        <span className="label">Today's Highlight</span>

        <h2>Trilogy Discover Kaʻanapali Snorkel</h2>

        <p>
          Every Trilogy trip is unique.
          Today's snorkel locations are selected
          based on the ocean conditions.
        </p>

      </section>

      <section className="next-card">

        <span className="label">Next Up</span>

        <h2>7:00 AM</h2>

        <p>🚗 Leave Honua Kai</p>

      </section>

      <nav className="bottom-nav">

        <button>🏠</button>
        <button>📍</button>
        <button>☀️</button>
        <button>🌊</button>
        <button>📋</button>

      </nav>

    </main>
  );
}