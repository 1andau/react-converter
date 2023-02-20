import React from 'react'
import Logo from './Logo'
import { useState } from 'react'
import './header.scss'; 


const Header = () => {

  return (
<header className="header">
  <div className="container">
    <nav className="nav">

      <a href="#" className="logo">
        <Logo/>
      </a>

      <div className="menu__wrapper">
        <ul className="menu">
          <li className="item active">
            <a href="#">Home</a>
          </li>
          <li className="item">
            <a href="#">Converter</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

  )
}

export default Header