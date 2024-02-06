import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from "../../Components/Footer/Footer"
import Cards from './Components/Cards'
import "./PricingStyle.css"

const Pricing = () => {
  return (
 <>
 <Navbar/>
 <Header heading="Pricing Page"/>
 <Cards/>
 <Footer/>
 
 
 </>
  )
}

export default Pricing