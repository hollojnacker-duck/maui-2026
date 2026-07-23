import heroImages from "../data/heroImages";
import AccordionCard from "./AccordionCard";
import QuickActions from "./QuickActions";

export default function ItineraryCard({ day }) {
  const hero =
    heroImages[day.hero] || heroImages["hero.png"] || heroImages.default;

  const actions = [
    { icon: "📍", label: "Directions", link: "" },
    { icon: "☀️", label: "Weather", link: "" },
    { icon: "🍽️", label: "Dinner", link: "" },
    { icon: "ℹ️", label: "Info", link: "" },
  ];

  return (
    <section className="card itinerary-card">
      <div className="itinerary-hero">
        {hero && <img src={hero} alt={day.title} />}

        <div className="hero-overlay">
          <span className="day-label">
            DAY {day.day} • {day.date}
          </span>

          <h2>{day.title}</h2>

          {day.phrase && (
            <div className="phrase">
              <div className="hawaiian">
                {day.phrase.hawaiian}
              </div>

              <div className="english">
                {day.phrase.english}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="itinerary-content">

        <div className="section">
          <h3>🌺 Overview</h3>

          <p>{day.highlight.description}</p>
        </div>

        <QuickActions actions={actions} />

        <AccordionCard
          icon="⭐"
          title={day.highlight.title}
          defaultOpen
        >
          <p>{day.highlight.description}</p>
        </AccordionCard>

        {day.dinner.restaurant && (
          <AccordionCard
            icon="🍽️"
            title="Dinner"
          >
            <strong>{day.dinner.restaurant}</strong>

            <p
              style={{
                marginTop: 10,
              }}
            >
              {day.dinner.description}
            </p>
          </AccordionCard>
        )}

        <div className="tomorrow-card card">
          <div className="label">
            🌅 TOMORROW
          </div>

          <h3
            style={{
              marginTop: 10,
            }}
          >
            Next Adventure
          </h3>

          <p>
            Continue exploring Maui with another unforgettable day.
          </p>
        </div>

      </div>
    </section>
  );
}