import { trip } from "../data/trip";

export default function HomePage() {
  const today = new Date();
  const start = new Date(trip.itinerary[0].date);
  const end = new Date(trip.itinerary[trip.itinerary.length - 1].date);

  let currentDay;

  if (today < start) {
    currentDay = trip.itinerary[0];
  } else if (today > end) {
    currentDay = trip.itinerary[trip.itinerary.length - 1];
  } else {
    const todayString = today.toISOString().slice(0, 10);

    currentDay =
      trip.itinerary.find((day) => day.date === todayString) ??
      trip.itinerary[0];
  }

  const daysUntil = Math.max(
    0,
    Math.ceil((start - today) / (1000 * 60 * 60 * 24))
  );

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay">
          <span className="badge">🌺 MAUI 2026</span>

          <h1>
            {daysUntil === 0
              ? "Welcome!"
              : `${daysUntil} Day${daysUntil === 1 ? "" : "s"}`}
          </h1>

          <p className="subtitle">
            {daysUntil === 0
              ? "Your adventure begins"
              : "until paradise"}
          </p>

          <div className="phrase-card">
            <div className="label">HAWAIIAN PHRASE</div>

            <h2>{currentDay.phrase.hawaiian}</h2>

            <p>{currentDay.phrase.english}</p>
          </div>
        </div>
      </section>

      <section className="card">
        <span className="label">TODAY</span>

        <h2>{currentDay.title}</h2>

        <p>{currentDay.highlight.description}</p>
      </section>

      <section className="card next">
        <span className="label">DINNER</span>

        <h2>{currentDay.dinner.restaurant || "No reservation"}</h2>

        <p>{currentDay.dinner.description}</p>
      </section>

      <section className="card">
        <span className="label">TRIP OVERVIEW</span>

        <div className="upcoming-list">
          {trip.itinerary.map((day) => (
            <div className="upcoming-item" key={day.day}>
              <div>
                <strong>Day {day.day}</strong>
                <p>{day.title}</p>
              </div>

              <span>{day.date.slice(5)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}