import { useEffect, useState } from 'react'
import reactIcon from '../assets/images/react-icon.svg'
import postgresqlIcon from '../assets/images/postgresql-icon.svg'
import gitIcon from '../assets/images/git-icon.svg'
import dockerIcon from '../assets/images/docker-icon.svg'
import logo from '../assets/images/favicon-iconapp.svg'

export default function HeroSection({
    nombre = 'ABRAHAM VIVAS',
    role = 'Software Engineer',
    links = ['Sobre mí', 'Más'],
}) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [firstName, ...rest] = nombre.split(' ')
    const lastName = rest.join(' ')

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 24)
        updateScrollState()
        window.addEventListener('scroll', updateScrollState, { passive: true })

        return () => window.removeEventListener('scroll', updateScrollState)
    }, [])

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return

        const observer = new IntersectionObserver(
            (entries) => {
                const activeEntry = entries.find((entry) => entry.isIntersecting)
                if (activeEntry) setActiveSection(`#${activeEntry.target.id}`)
            },
            { rootMargin: '-38% 0px -52% 0px' },
        )

        ;['sobreMi', 'mas'].forEach((id) => {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div id="inicio" className="hero-viewport relative min-h-screen w-full overflow-hidden bg-neutral-950 text-neutral-300">
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&display=swap');.hero-font { font-family: 'Poppins', sans-serif; }`}</style>

                <nav className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-center px-6 backdrop-blur-xl transition-colors duration-300 sm:px-12 ${isScrolled ? 'bg-neutral-950/85 shadow-lg shadow-black/20' : 'bg-neutral-950/30'}`}>
                    <a
                        href="#inicio"
                        aria-label="Ir al inicio"
                        className="absolute left-6 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-75 sm:left-12"
                    >
                        <img src={logo} alt="" className="h-12 w-12 brightness-0 invert" />
                    </a>
                    <ul className="flex justify-center gap-8 text-sm font-semibold tracking-wide text-neutral-400 sm:gap-15">
                        {links.map((link) => {
                            const hrefs = {
                                'Sobre mí': '#sobreMi',
                                Más: '#mas',
                            }
                            const href = hrefs[link]
                            const isActive = activeSection === href

                            return (
                                <li key={link}>
                                    <a
                                        aria-current={isActive ? 'location' : undefined}
                                        className={`group relative inline-flex items-center py-2 transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                                        href={href}
                                    >
                                        {link}
                                        <span
                                            aria-hidden="true"
                                            className={`absolute bottom-1 left-0 h-px w-full origin-left bg-neutral-300 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                        />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="relative z-10 mt-20 px-6 sm:mt-30 sm:px-0">
                    <h1 className="hero-font text-center text-5xl font-extrabold leading-[0.99] tracking-tight text-neutral-400 min-[360px]:text-6xl sm:text-8xl md:text-9xl">
                        {firstName}
                    <br />
                    {lastName}
                </h1>

                <div aria-label="Tecnologías" className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                    {[
                        { name: 'React', icon: reactIcon },
                        { name: 'PostgreSQL', icon: postgresqlIcon },
                        { name: 'Git', icon: gitIcon },
                        { name: 'Docker', icon: dockerIcon },
                    ].map(({ name, icon }) => (
                        <div key={name} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-2 shadow-[0_0_14px_rgba(255,255,255,0.12)] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-12 sm:w-12">
                            <img src={icon} alt={name} className="h-full w-full object-contain" />
                        </div>
                    ))}
                </div>

                <div className="mt-6 w-full">
                    <p className="hero-font text-center text-sm font-semibold text-neutral-400 sm:text-2xl">
                        [ {role} ]
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg border border-neutral-600 px-3 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-300 hover:bg-neutral-900 sm:px-5"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-neutral-600 px-3 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-300 hover:bg-neutral-900 sm:px-5"
                        >
                            Contactarme
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}