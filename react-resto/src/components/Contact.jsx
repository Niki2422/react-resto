import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Contacto</h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Visítanos</h3>

          <p><strong>Dirección:</strong> Av. Italia 1234, Buenos Aires</p>
          <p><strong>Teléfono:</strong> +54 291 555 1234</p>
          <p><strong>Email:</strong> contacto@bellavita.com</p>

          <p>
            Abrimos todos los días desde las 12:00 hasta las 23:00.
            Te esperamos para disfrutar de auténtica cocina italiana.
          </p>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Tu nombre"
          />

          <input
            type="email"
            placeholder="Tu email"
          />

          <textarea
            placeholder="Tu mensaje"
            rows="5"
          ></textarea>

          <button type="submit">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;