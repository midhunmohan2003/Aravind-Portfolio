import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Services from './Pages/Services'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
