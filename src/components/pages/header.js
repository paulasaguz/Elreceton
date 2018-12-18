import React from 'react'
import './header.css'

function Header(){
  return (
    <div className="Header">
      <div className="wrapper">
        <div className="header-list">
          <h1 className="list title">El Recetón</h1>
          <li className="list">Encuentra tu receta favorita!</li>
        </div>
      </div>
    </div>
  )
}

export default Header;