import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>RestoReact</h2>
          <p>Sabores únicos desde 1995</p>
        </div>

        <div className="footer-info">
          <h3>Horario</h3>
          <p>Lunes a Sábado</p>
          <p>19:00 - 00:00</p>
        </div>

        <div className="footer-info">
          <h3>Dirección</h3>
          <p>Buenos Aires</p>
          <p>Argentina</p>
        </div>

        <div className="footer-social">
          <h3>Seguinos</h3>
          <p>Instagram</p>
          <p>WhatsApp</p>
        </div>

      </div>

      <div className="footer-copy">
        <p>© 2026 RestoReact - Todos los derechos reservados</p>
      </div>

    </footer>
  );
}

export default Footer;