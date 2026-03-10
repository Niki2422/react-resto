import "../styles/gallery.css";

function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    "https://images.unsplash.com/photo-1544025162-d76694265947",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  ];

  return (
    <section className="gallery">

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