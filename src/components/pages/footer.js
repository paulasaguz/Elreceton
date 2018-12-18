import React from 'react'
import Facebook from '../icons/facebook'
import Twitter from '../icons/twitter'
import Instagram from '../icons/instagram'
import './footer.css'

function Footer(){
  return (
    <div className="Footer">
      <div className="wrapper">
        <div className="navigate">
          <li>Categorias</li>
          <li>Acerca de nosotros</li>
          <li>Siguenos en</li>
          <li> <Facebook size={20}  color="white" view="0 0 24 24"/> </li>
          <li> <Instagram size={20} color="white" view="0 0 24 28"/> </li>
          <li> <Twitter size={20}  color="white" view="0 0 24 24"/> </li>
        </div>
        <div className="aboutUs">
          <li>El recetón mexico</li> 
          <li>Trabaja con nosotros</li>
          <li>Términos y condiciones</li>
          <li>Políticas de privacidad</li>
          <li>Ayuda</li>
          <li>Copyright © 1999-2018</li> 
        </div>
      </div>
    </div>
  )
}

export default Footer;