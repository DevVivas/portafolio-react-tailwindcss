import HeroSection from './components/HeroSection.jsx'
import SkillsSeccion from './components/SkillsSeccion.jsx'
import WorkSeccion from './components/WorkSeccion.jsx'
import ContactoSeccion from './components/ContactoSeccion.jsx'
import Dock from './components/Dock.jsx'

export default function App() {
    return (
        <>
            <main>
                <HeroSection />
                <SkillsSeccion />
                <WorkSeccion />
                <ContactoSeccion />
            </main>
            <Dock />
        </>
    )
}
