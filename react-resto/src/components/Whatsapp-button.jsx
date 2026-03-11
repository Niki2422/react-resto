import "../styles/whatsapp-button.css"

function WhatsAppButton(){

  const phone = "5492910000000" // tu número con código país

  const message = "Hola! Quiero consultar por el menú."

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="../public/images/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  )
}

export default WhatsAppButton