import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import ProductMenu from "./components/ProductMenu/ProductMenu.jsx";
import LevelGuide from "./components/LevelGuide/LevelGuide.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductMenu />
        <LevelGuide />
      </main>
      <Footer />
    </>
  );
}