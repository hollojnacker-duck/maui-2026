import honuaKaiHero from "../assets/honua-kai-hero.jpg";
import { useState } from "react";
import { hawaiianWords } from "../data/hawaiianWords";
import { resources } from "../data/resources";

export default function HomePage() {

  // Show a new Hawaiian word every 30 minutes

const CHANGE_INTERVAL = 10 * 60 * 1000;

const now = Date.now();

let initialIndex = Number(localStorage.getItem("hawaiianWordIndex"));
let lastUpdated = Number(localStorage.getItem("hawaiianWordTimestamp"));

if (
  Number.isNaN(initialIndex) ||
  Number.isNaN(lastUpdated) ||
  now - lastUpdated > CHANGE_INTERVAL
) {
  let newIndex;

  do {
    newIndex = Math.floor(
      Math.random() * hawaiianWords.length
    );
  } while (
    hawaiianWords.length > 1 &&
    newIndex === initialIndex
  );

  initialIndex = newIndex;

  localStorage.setItem("hawaiianWordIndex", initialIndex);
  localStorage.setItem("hawaiianWordTimestamp", now);
}

const [wordIndex, setWordIndex] = useState(initialIndex);

const wordOfDay = hawaiianWords[wordIndex];

function refreshWord() {
  let newIndex;

  do {
    newIndex = Math.floor(
      Math.random() * hawaiianWords.length
    );
  } while (
    hawaiianWords.length > 1 &&
    newIndex === wordIndex
  );

  localStorage.setItem("hawaiianWordIndex", newIndex);
  localStorage.setItem("hawaiianWordTimestamp", Date.now());

  setWordIndex(newIndex);
}

  return (
    <div className="app">

      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.25),
              rgba(0,0,0,0.25)
            ),
            url(${honuaKaiHero})
          `,
        }}
      >

        <div className="home-overlay">

          <span className="badge">
            MAUI • AUGUST 17–24
          </span>

          <div>
            <h1>
              Maui
            </h1>

            <p className="subtitle">
              Honua Kai Resort
              <br />
              Konea 401 • Oceanfront
            </p>
          </div>

        </div>

      </section>


      {/* ISLAND LINGO */}

      <section className="card">

        <div className="card-header">

  <span className="label">
    🌺 ISLAND LINGO
  </span>

  <button
  className="refresh-word"
  onClick={refreshWord}
  aria-label="Show another Hawaiian word"
  title="Another Word"
>
  ⟳
</button>

</div>

        <h2 className="lingo-word">
          {wordOfDay.emoji} {wordOfDay.word}
        </h2>

        <p className="pronunciation">
          ({wordOfDay.pronunciation})
        </p>

        <p>
          {wordOfDay.meaning}
        </p>

        <p className="lingo-footer">
          🤙 Learn a little Hawaiian every time you visit.
        </p>

      </section>


      <section className="card">

        <span className="label">
          YOUR STAY
        </span>

        <div className="upcoming-list">

          <a
            className="upcoming-item"
            href="https://www.outrigger.com/globalassets/outrigger/images/resorts--hotels/hawaii/honua-kai-resort-and-spa/map/honua-kai-resort-map.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>📍 Honua Kai Property Map</strong>
            <span>↗</span>
          </a>

          <a
            className="upcoming-item"
            href="https://www.outrigger.com/hawaii/maui/honua-kai/activities"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>🏊 Resort Activities</strong>
            <span>↗</span>
          </a>

          <a
            className="upcoming-item"
            href="https://www.outrigger.com/hawaii/maui/honua-kai/food-drink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>🍹 Food & Drink</strong>
            <span>↗</span>
          </a>

          <a
            className="upcoming-item"
            href="https://www.mauiresortrentals.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>🏠 Maui Resort Rentals</strong>
            <span>↗</span>
          </a>

        </div>

      </section>


      <section className="card">

        <span className="label">
          ISLAND CONDITIONS
        </span>

        <div className="upcoming-list">

          <a
            className="upcoming-item"
            href="https://mauinow.com/weather/kaanapali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>☀️ Weather</strong>
            <span>↗</span>
          </a>

          <a
            className="upcoming-item"
            href="https://thesnorkelstore.com/maui-snorkeling-conditions-reports/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>🌊 Snorkeling</strong>
            <span>↗</span>
          </a>

          <a
            className="upcoming-item"
            href="https://www.tideschart.com/United-States/Hawaii/Maui-County/Lahaina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>🌙 Tides</strong>
            <span>↗</span>
          </a>

        </div>

      </section>


      <section className="card">

        <span className="label">
          NEARBY GROCERIES
        </span>

        <div className="upcoming-list">

          <div className="upcoming-item">

            <div>

              <strong>
                🛍️ Whalers General Store
              </strong>

              <p className="upcoming-subtitle">
                Resort Market • Konea Lobby
              </p>

            </div>

          </div>


          <a
            className="upcoming-item"
            href={resources.timesSupermarket.actions[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >

            <div>

              <strong>
                🛒 Times Supermarket
              </strong>

              <p className="upcoming-subtitle">
                5 min drive • Honokōwai
              </p>

            </div>

            <span>↗</span>

          </a>


          <a
            className="upcoming-item"
            href={resources.safeway.actions[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >

            <div>

              <strong>
                🛒 Safeway
              </strong>

              <p className="upcoming-subtitle">
                10 min drive • Lahaina
              </p>

            </div>

            <span>↗</span>

          </a>

        </div>

      </section>

    </div>
  );
}