import "../styles/gallery.css";

function Gallery() {

  const images = [
    "../public/images/galeria-comida-1.jpg",
    "../public/images/galeria-comida-2.jpg",
    "../public/images/galeria-comida-3.jpg",
    "../public/images/galeria-comida-4.jpg",
    "../public/images/galeria-sala-1.jpg",
    "../public/images/react-resto-2.png"
  ];

  return (
    <section id="Gallery" className="gallery" data-aos="fade-left">

      <h2>Galería</h2>

      <div className="gallery-container">

        {images.map((img, index) => (

          <div className="gallery-item" key={index}>
            <img src={img} alt="comida restaurante" />
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;