import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./styles/App.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/about"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp-button";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000
  });
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />

      <WhatsAppButton />

    </>
  )
}

export default App