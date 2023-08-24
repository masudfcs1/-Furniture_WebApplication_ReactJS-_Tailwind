import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";

function App() {
  return (
    <div className=" w-full max-w-[1440px] mx-auto bg-white ">
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
    </div>
  );
}

export default App;
