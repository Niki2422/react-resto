import "../styles/Menu.css";

function Menu() {

  const menuItems = [
    {
      id: 1,
      name: "Pasta Carbonara",
      description: "Pasta cremosa con panceta, huevo y queso parmesano.",
      price: "$12"
    },
    {
      id: 2,
      name: "Pizza Margherita",
      description: "Salsa de tomate, mozzarella fresca y albahaca.",
      price: "$10"
    },
    {
      id: 3,
      name: "Ensalada Mediterránea",
      description: "Tomate, aceitunas, pepino y queso feta.",
      price: "$9"
    },
    {
      id: 4,
      name: "Lasagna Tradicional",
      description: "Capas de pasta con carne, salsa de tomate y queso.",
      price: "$14"
    }
  ];

  return (
    <section className="menu" data-aos="zoom-in">

      <h2>Nuestro Menú</h2>

      <div className="menu-container">

        {menuItems.map((item) => (

          <div className="menu-card" key={item.id}>

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <span className="price">{item.price}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Menu;