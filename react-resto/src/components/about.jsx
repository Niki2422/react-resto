import "../styles/About.css"

function About() {
  return (
    <section className="about" data-aos="fade-right">

      <div className="about-conteiner">

        <div className="about-image">
        <img src="../public/images/react-resto-about.jpg" alt="parte-lateral-restaurant" />
        </div>

        <div className="about-text">
          <h2>Nuestra Historia</h2>

          <p>
            En el corazón de la ciudad nació <strong>Trattoria Bella Vita</strong>,
            un pequeño restaurante familiar inspirado en la cocina tradicional
            italiana.
          </p>

          <p>
            Desde <strong>1995</strong> preparamos pasta fresca, salsas caseras y
            recetas que han pasado de generación en generación.
          </p>

          <p>
            Nuestro objetivo siempre fue el mismo: ofrecer comida auténtica,
            ingredientes de calidad y un ambiente cálido donde cada cliente se
            sienta como en casa.
          </p>
          </div>
      </div>

    </section>
  );
}

export default About;