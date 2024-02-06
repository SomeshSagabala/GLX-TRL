import React from 'react'
import { Link } from "react-router-dom"
import video from "../../../Assets/hero.mp4"
const Hero = () => {
  return (
    <>
      <div className='hero'>
        <video src={video} autoPlay loop muted ></video>

        <div className='content'>
          <h1>Travel. Galaxies.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, magnam.</p>
          <div className='buttons'>
          <Link to="/training">Try Now!</Link>
          <Link to="/contact">Lanch!</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero