import { useState } from "react"
import "../styles/navbar.css"


function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <nav className="navbar">

      <div className="logo">
        RestoReact
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>Nosotros</a>
        </li>

        <li>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menú</a>
        </li>

        <li>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Galería</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </li>

      </ul>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  )
}

export default Navbar