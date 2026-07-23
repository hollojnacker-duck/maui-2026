import { trip } from "../data/trip";
import {
  Sunrise,
  Backpack,
  UtensilsCrossed,
} from "lucide-react";

export default function PackingPage() {
  const day = trip.itinerary[2];

  const dinnerSection = day.sections.find(
    (section) => section.title.includes("Māla") || section.title.includes("Dinner")
  );

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay">
          <div>
            <span className="badge">TODAY</span>
            <h1>{day.title}</h1>
            <p className="subtitle">
              {day.date}
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <Sunrise size={18} />
          <span className="label">TODAY'S ADVENTURE</span>
        </div>

        <h2>{day.highlight.title}</h2>

        <p>
          {day.highlight.description}
        </p>
      </section>

      <section className="card">
        <div className="section-header">
          <Backpack size={18} />
          <span className="label">BRING</span>
        </div>

        <p>✓ Reef safe sunscreen</p>
        <p>✓ Towels</p>
        <p>✓ Water bottles</p>
        <p>✓ Camera / GoPro</p>
      </section>

      <section className="card">
        <div className="section-header">
          <UtensilsCrossed size={18} />
          <span className="label">TONIGHT</span>
        </div>

        {dinnerSection ? (
          dinnerSection.items.map((item) => (
            <p key={item}>
              {item}
            </p>
          ))
        ) : (
          <p>No dinner details yet.</p>
        )}
      </section>
    </div>
  );
}