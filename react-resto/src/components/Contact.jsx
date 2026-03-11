import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" data-aos="fade-left">

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

        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15052271.856770853!2d-78.42746043751742!3d-22.918126286399385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d15e835f41%3A0x8e7adabd3208bf9e!2sCucina%20D&#39;Onore!5e0!3m2!1ses-419!2sar!4v1773233606809!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
        </div>
    

      </div>

    </section>
  );
}

export default Contact;