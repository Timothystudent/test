import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './components/homepage'
import Header from './components/header'
import Hero from './components/hero'
import Facts from './components/facts'
import Skills from './components/skills'
import About from './components/about'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Services from './components/services'
import Testimonial from './components/testimonials'
import Contact from './components/contacts'
// import About from './components/about'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Facts/>
    <Resume/>
    <Portfolio/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <HomePage/>
    </>
  )
}

export default App
