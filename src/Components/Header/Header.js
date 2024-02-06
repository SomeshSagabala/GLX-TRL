import React from 'react'
import "./Header.css"
import image from "../../Assets/image2.png"

const Header = ({heading}) => {
  return (
    <>
 <section className="header" style={{backgroundImage:`url(${image})`, backgroundSize: "cover", backgroundPosition: "fixed"}}>
    <h1>{heading}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, porro.</p>
 </section>
    </>
  )
}

export default Header