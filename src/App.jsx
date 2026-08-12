import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import ProductMenu from "./components/ProductMenu/ProductMenu.jsx";
import LevelGuide from "./components/LevelGuide/LevelGuide.jsx";
import Location from "./components/Location/Location.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar />
      <main>
        <Hero query={query} onQuery={setQuery} />
        <About />
        <ProductMenu query={query} />
        <LevelGuide />
        <Location />
      </main>
      <Footer />
    </>
  );
}