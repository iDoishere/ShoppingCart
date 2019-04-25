import React from 'react'
import './Header.css'
import logo from '../../cart.jpg'
 function header() {
  return (
    <div>
  <header>
  <img  className="cartLogo" width="8%" src={logo}></img>
  </header>
   
    </div>
  )
}
export default header;