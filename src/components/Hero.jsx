import React from 'react'
import heroLogo from '../assets/images/hero.svg'

function Hero() {
  return (
    <>
        <img src={heroLogo} alt="Hero Logo" className='hero-logo'/>
        <h1 className='heading'>Online Experiences</h1>
        <p className='text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </>
  )
}

export default Hero