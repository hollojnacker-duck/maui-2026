import { useEffect } from "react";
import { food } from "../data/food";
import foodHero from "../assets/maui-food-hero.jpg";

export default function FoodPage() {

  useEffect(() => {
    if (window.location.hash) {

      const id = window.location.hash.substring(1);

      const element = document.getElementById(id);

      if (element) {

        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 150);

      }

    }
  }, []);

  return (
    <div className="app food-page">

      <section
        className="hero food-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.35)
          ), url(${foodHero})`,
        }}
      >
        <div className="hero-overlay">
          <span className="badge">
            🍽 MAUI FOOD GUIDE
          </span>

          <h1>Restaurants</h1>

          <p className="subtitle">
            Curated favorites from around Maui
          </p>
        </div>
      </section>

      <section className="card reservation-section">

        <span className="label">
          CONFIRMED RESERVATIONS
        </span>

        {food.reservations.map((restaurant, index) => (

          <div
            className="reservation-card"
            key={index}
          >

            <span className="confirmed-badge">
              CONFIRMED
            </span>

            <h2>
              {restaurant.website ? (
                <a
                  href={restaurant.website}
                  target="_blank"
                  rel="noreferrer"
                  className="restaurant-title-link"
                >
                  {restaurant.name}
                </a>
              ) : (
                restaurant.name
              )}
            </h2>

            <p className="restaurant-date">
              {restaurant.date}
            </p>

            {restaurant.location && (
  <p className="restaurant-meta-location">
    📍 {restaurant.location}
  </p>
)}

<p className="restaurant-meta">

  {restaurant.meal}

  {restaurant.rating && (
    <>
      {" • "}
      ⭐ {restaurant.rating}
    </>
  )}

</p>

            <div className="tag-row">

              {restaurant.tags.map((tag, i) => (

                <span
                  className="tag"
                  key={i}
                >
                  {tag}
                </span>

              ))}

            </div>

            <p>
              {restaurant.description}
            </p>

            <RestaurantLinks restaurant={restaurant} />

          </div>

        ))}

      </section>

      {food.areas.map((area, index) => (

        <section
          className="food-area"
          key={index}
        >

          <div className="area-header">
            <h2>{area.name}</h2>
          </div>

          <div className="restaurant-grid">

  {area.restaurants.map((restaurant, restaurantIndex) => (

            <div
              className="restaurant-card"
              key={restaurantIndex}
            >

              <h3>

                {restaurant.website ? (

                  <a
                    href={restaurant.website}
                    target="_blank"
                    rel="noreferrer"
                    className="restaurant-title-link"
                  >
                    {restaurant.name}
                  </a>

                ) : (

                  restaurant.name

                )}

              </h3>

              {restaurant.location && (
  <p className="restaurant-meta-location">
    📍 {restaurant.location}
  </p>
)}

<p className="restaurant-meta">

  {restaurant.meal}

  {restaurant.rating && (
    <>
      {" • "}
      ⭐ {restaurant.rating}
    </>
  )}

</p>

              <div className="tag-row">

                {restaurant.tags.map((tag, i) => (

                  <span
                    className="tag"
                    key={i}
                  >
                    {tag}
                  </span>

                ))}

              </div>

              <p>
                {restaurant.description}
              </p>

              <RestaurantLinks restaurant={restaurant} />

            </div>
              ))}

</div>

        </section>

      ))}

      <section className="card">

        <span className="label">
          SWEET TREATS
        </span>

        {food.treats.map((treat, index) => (

          <div
            className="restaurant-card"
            key={index}
          >

            <h3>

              {treat.website ? (

                <a
                  href={treat.website}
                  target="_blank"
                  rel="noreferrer"
                  className="restaurant-title-link"
                >
                  🍦 {treat.name}
                </a>

              ) : (

                <>🍦 {treat.name}</>

              )}

            </h3>

            {treat.location && (
  <p className="restaurant-meta-location">
    📍 {treat.location}
  </p>
)}

<p className="restaurant-meta">
  Dessert
</p>

{treat.description && (
  <p>
    {treat.description}
  </p>
)}

<RestaurantLinks restaurant={treat} />

          </div>

        ))}

      </section>

    </div>
  );
}

function RestaurantLinks({ restaurant }) {

  if (!restaurant.map) {
    return null;
  }

  return (

    <div className="restaurant-links">

      <a
        href={restaurant.map}
        target="_blank"
        rel="noreferrer"
      >
        Directions
      </a>

    </div>

  );
}