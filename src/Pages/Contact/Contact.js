import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from "../../Components/Footer/Footer"
import Form from './Components/Form'
import "./ContactStyle.css"

const Contact = () => {
  return (
 <>
 <Navbar/>
 <Header heading="Contact Page" />
 <Form/>
 <Footer/>
 
 </>
  )
}

export default Contact