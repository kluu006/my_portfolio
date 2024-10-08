import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import capybara from './capybara.jpg'
import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/aboutme" element={ <AboutMe/> } />
      </Routes>
    </div>
    
  )
}

export default App
