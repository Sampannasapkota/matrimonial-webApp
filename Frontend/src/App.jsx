import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import Copyright from './Copyright'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App
