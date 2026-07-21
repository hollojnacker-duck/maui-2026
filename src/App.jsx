import { useState } from "react";
import "./App.css";

import HomePage from "./pages/Home";
import ItineraryPage from "./pages/Itinerary";
import FoodPage from "./pages/Food";
import PackingPage from "./pages/Packing";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [page, setPage] = useState("home");

  switch (page) {
    case "itinerary":
      return (
        <>
          <ItineraryPage />
          <BottomNav page={page} setPage={setPage} />
        </>
      );

    case "food":
      return (
        <>
          <FoodPage />
          <BottomNav page={page} setPage={setPage} />
        </>
      );

    case "packing":
      return (
        <>
          <PackingPage />
          <BottomNav page={page} setPage={setPage} />
        </>
      );

    default:
      return (
        <>
          <HomePage />
          <BottomNav page={page} setPage={setPage} />
        </>
      );
  }
}