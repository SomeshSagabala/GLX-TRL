import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import fb from "../../Assets/facebook.png"
import insta from "../../Assets/instagram.png"
import twitter from "../../Assets/twitter.png"

const Footer = () => {

  const social = [fb,insta,twitter]

  return (
<>
<footer>
<h1>GLX TRVL</h1>
<div className="links">
<h3>Useful Links</h3>
 <div className="link">
 <Link to="/">Home</Link>
  <Link to="/training">Training</Link>
  <Link to="/pricing">Pricing</Link>
  <Link to="/contact">contact</Link>
 </div>
</div>
<div className="social">
{
  social.map((item)=>{
    return(
      <img src={item} alt="" />
    )
  })
}
</div>
</footer>


</>
   
  )
}

export default Footer