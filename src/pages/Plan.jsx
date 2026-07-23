import { useState } from "react";
import { trip } from "../data/trip";
import AccordionCard from "../components/AccordionCard";
import ResourceCard from "../components/QuickLinksCard";
import { resources } from "../data/resources";
import heroArrive from "../assets/hero-arrive.jpg";
import heroBeach from "../assets/hero-beach.jpg";
import heroTrilogy from "../assets/hero-trilogy.jpg";
import heroHaleakala from "../assets/hero-haleakala.jpg";
import heroNorthshore from "../assets/hero-northshore.jpg";
import heroWaihee from "../assets/hero-waihee.jpg";
import heroLastday from "../assets/hero-lastday.jpg";
import heroDepart from "../assets/hero-depart.jpg";


const heroImages = {
  "hero-arrive.jpg": heroArrive,
  "hero-beach.jpg": heroBeach,
  "hero-trilogy.jpg": heroTrilogy,
  "hero-haleakala.jpg": heroHaleakala,
  "hero-northshore.jpg": heroNorthshore,
  "hero-waihee.jpg": heroWaihee,
  "hero-lastday.jpg": heroLastday,
  "hero-depart.jpg": heroDepart,
};


export default function PlanPage({ setPage }) {

  // Automatically open to today's itinerary during the trip

const tripStart = new Date(2026, 7, 17); // August 17, 2026
const today = new Date();

tripStart.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);

const daysSinceStart = Math.floor(
  (today - tripStart) / (1000 * 60 * 60 * 24)
);

const initialDay = Math.min(
  Math.max(daysSinceStart, 0),
  trip.itinerary.length - 1
);

const [selectedDay, setSelectedDay] = useState(initialDay);

  const currentDay = trip.itinerary[selectedDay];


  return (
    <div className="app">

      <section className="card itinerary-card">

        <div className="itinerary-hero">

          <img
            src={heroImages[currentDay.hero]}
            alt={currentDay.title}
          />

          <div className="itinerary-overlay">

            <span className="day-label">
              DAY {currentDay.day} • {formatDate(currentDay.date)}
            </span>

            <h2>
              {currentDay.title}
            </h2>

          </div>

        </div>


        <div className="itinerary-content">

          <p>
            {currentDay.highlight.description}
          </p>
            {currentDay.resources && (
  <>
    <div className="section-heading">
      Today's Resources
    </div>

    <div className="resources-grid">
      {currentDay.resources.map((id) => {
        const resource = resources[id];

        if (!resource) return null;

        return (
          <ResourceCard
            key={id}
            resource={resource}
          />
        );
      })}
    </div>
  </>
)}

          <div className="day-selector">

            {trip.itinerary.map((day, index) => (

              <button
                key={day.day}
                className={
                  selectedDay === index
                    ? "active-day"
                    : ""
                }
                onClick={() => setSelectedDay(index)}
              >
                Day {day.day}
              </button>

            ))}

          </div>


          {currentDay.sections.map((section) => (

            <AccordionCard
              key={section.title}
              title={section.title}
              icon={section.icon}
            >

              {section.items.map((item, index) => {

  const timelineItem =
  typeof item === "string"
    ? { text: item }
    : item;

console.log(JSON.stringify(timelineItem));

      if (timelineItem.action === "food") {
  return (
    <div className="timeline-item" key={index}>
      <a
        href="#"
        className="timeline-link"
        onClick={(e) => {
          e.preventDefault();
          setPage("food");
        }}
      >
        <span>🍽</span>
        <span>Explore Restaurant Guide</span>
        <span className="action-arrow">›</span>
      </a>
    </div>
  );
}

  return (
    <div
      className="timeline-item"
      key={index}
    >

      <p>{timelineItem.text}</p>

      {timelineItem.resource && (() => {

  const resource = resources[timelineItem.resource];

  if (!resource) return null;

  return (

    <div className="timeline-resource">

      {resource.actions.map((action) => (

        action.url ? (

          <a
            key={action.label}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-link"
          >
            <span>{action.icon}</span>
            <span>{action.label}</span>
            <span className="action-arrow">›</span>
          </a>

        ) : (

          <div
            key={action.label}
            className="timeline-label"
          >
            <span>{action.icon}</span>

            <span>
              {action.label === "Confirmation"
                ? `Confirmation #${action.value}`
                : `${action.label}: ${action.value}`}
            </span>

          </div>

        )

      ))}

    </div>

  );

})()}

    </div>

  );

})}

         
</AccordionCard>

          ))}

        </div>

      </section>

    </div>
  );
}


function formatDate(date) {

  const [year, month, day] = date.split("-");

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
    }
  );
}