export default function FoodPage() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay">
          <span className="badge">🍽 MAUI FOOD</span>

          <h1>Restaurants</h1>

          <p className="subtitle">
            Reservations & favorites
          </p>
        </div>
      </section>

      <section className="card">
        <span className="label">RESERVATIONS</span>

        <h2>Māla Ocean Tavern</h2>
        <p>Wednesday after Trilogy snorkel.</p>

        <br />

        <h2>Duke's Beach House</h2>
        <p>First reservation confirmed.</p>
        <p>Second reservation is your flexible placeholder.</p>
      </section>

      <section className="card">
        <span className="label">FAVORITES</span>

        <p>⭐ Star Noodle</p>
        <p>⭐ Paia Fish Market</p>
        <p>⭐ Maui Brewing Company</p>
        <p>⭐ Coco Deck</p>
      </section>

      <section className="card">
        <span className="label">BACKUP OPTIONS</span>

        <p>🍕 Point Break Pizza</p>
        <p>🐟 Paia Fish Market</p>
      </section>
    </div>
  );
}