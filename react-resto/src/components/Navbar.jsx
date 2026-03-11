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
          <a href="#Hero" onClick={() => setMenuOpen(false)}>Inicio</a>
        </li>

        <li>
          <a href="#About" onClick={() => setMenuOpen(false)}>Nosotros</a>
        </li>

        <li>
          <a href="#Menu" onClick={() => setMenuOpen(false)}>Menú</a>
        </li>

        <li>
          <a href="#Gallery" onClick={() => setMenuOpen(false)}>Galería</a>
        </li>

        <li>
          <a href="#Contact" onClick={() => setMenuOpen(false)}>Contacto</a>
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