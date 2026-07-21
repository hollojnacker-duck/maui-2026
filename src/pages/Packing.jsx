export default function PackingPage() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay">
          <span className="badge">🎒 PACKING</span>

          <h1>Checklist</h1>

          <p className="subtitle">
            Don't forget the essentials
          </p>
        </div>
      </section>

      <section className="card">
        <span className="label">BEACH</span>

        <p>☐ Swimsuits</p>
        <p>☐ Rash guards</p>
        <p>☐ Reef safe sunscreen</p>
        <p>☐ Hats</p>
        <p>☐ Sunglasses</p>
      </section>

      <section className="card">
        <span className="label">SNORKEL DAY</span>

        <p>☐ Towels</p>
        <p>☐ Dry bag</p>
        <p>☐ GoPro</p>
        <p>☐ Water bottles</p>
      </section>

      <section className="card">
        <span className="label">HIKING</span>

        <p>☐ Hiking shoes</p>
        <p>☐ Light rain jacket</p>
        <p>☐ Small backpack</p>
      </section>

      <section className="card">
        <span className="label">TECH</span>

        <p>☐ Phone chargers</p>
        <p>☐ Apple Watch charger</p>
        <p>☐ Camera batteries</p>
      </section>
    </div>
  );
}