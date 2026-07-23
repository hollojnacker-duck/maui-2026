import { useState } from "react";
import "./App.css";

import HomePage from "./pages/Home";
import PlanPage from "./pages/Plan";
import FoodPage from "./pages/Food";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <HomePage />}

      {page === "itinerary" && (
        <PlanPage
          setPage={setPage}
        />
      )}

      {page === "food" && <FoodPage />}

      <BottomNav
        page={page}
        setPage={setPage}
      />
    </>
  );
}