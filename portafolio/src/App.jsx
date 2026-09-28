import './App.css'
import HeroSection from './components/HeroSection.jsx'
import SobremiComponent from './components/SobreMi.jsx'
import Projects from './components/projectSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import MoreSection from './components/MoreSection.jsx'

function App() {
  return (
    <main>
      <HeroSection />
      <SobremiComponent />
      <Projects />
      <ContactSection />
      <MoreSection />
    </main>
  )
}

export default App