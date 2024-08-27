import React from 'react'
import airbnbLogo from "../assets/images/nav.svg"

function Navbar() {
  return (
    <nav>
        <img src={airbnbLogo} alt="Airbnb Logo" />
    </nav>
  )
}

export default Navbar