import { useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import SobremiComponent from './components/SobreMi.jsx'
import Projects from './components/projectSection.jsx'
import ContactoSeccion from './components/ContactoSeccion.jsx'
import MoreSection from './components/MoreSection.jsx'

function App() {
    useEffect(() => {
        if (
            !('IntersectionObserver' in window) ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return
        }

        const sections = document.querySelectorAll('main > section')
        document.documentElement.classList.add('motion-ready')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            observer.disconnect()
            document.documentElement.classList.remove('motion-ready')
        }
    }, [])

    return (
        <main className="flex flex-col gap-8 bg-neutral-950">
            <HeroSection />
            <SobremiComponent />
            <Projects />
            <ContactoSeccion />
            <MoreSection />
        </main>
    )
}

export default App