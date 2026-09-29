import './App.css'
import HeroSection from './components/HeroSection.jsx'
import SobremiComponent from './components/SobreMi.jsx'
import Projects from './components/projectSection.jsx'
import ContactoSeccion from './components/ContactoSeccion.jsx'
import MoreSection from './components/MoreSection.jsx'

function App() {
  return (
    <main>
      <HeroSection />
      <SobremiComponent />
      <Projects />
      <ContactoSeccion />
      <MoreSection />
    </main>
  )
}

export default App