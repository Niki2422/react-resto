import "../styles/hero.css";

function Hero() {
  return (
    <section id="Hero" className="hero" data-aos="fade-up">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>Auténtica Cocina Italiana</h1>

        <p>Pasta fresca hecha cada día</p>

        <a href="#Menu" className="hero-btn">
          Ver menú
        </a>

      </div>

    </section>
  );
}

export default Hero;