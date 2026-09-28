import backgroundImage from '../assets/background.jpg'

export default function HeroSection({
    nombre = 'ABRAHAM VIVAS',
    role = 'Software Engineer',
    links = ['Sobre mí', 'Más'],
}) {
    const [firstName, ...rest] = nombre.split(' ')
    const lastName = rest.join(' ')

    return (
        <div
            className="relative min-h-screen w-full overflow-hidden bg-neutral-1000 text-neutral-300"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.64)), url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                >
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&display=swap');.hero-font { font-family: 'Poppins', sans-serif; }`}</style>

                <nav className="relative z-10 flex items-center justify-center px-6 py-6 sm:px-12">
                    <ul className="flex justify-center gap-8 text-sm font-semibold tracking-wide text-neutral-400 sm:gap-15">
                        {links.map((link) => {
                            const hrefs = {
                                'Sobre mí': '#sobreMi',
                                Más: '#mas',
                            }

                            return (
                                <li key={link}>
                                    <a className="transition-colors duration-200 hover:text-white" href={hrefs[link]}>
                                        {link}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="relative z-10 mt-30 px-6 sm:px-0">
                    <h1 className="hero-font text-7xl font-extrabold leading-[0.99] tracking-tight text-neutral-400 sm:text-8xl md:text-9xl">
                        {firstName}
                    <br />
                    {lastName}
                </h1>

                <div className="mt-12 w-full sm:mt-30">
                    <p className="hero-font text-center text-sm font-semibold text-neutral-400 sm:text-2xl">
                        [ {role} ]
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="#projects"
                            className="border border-neutral-600 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-300 hover:bg-neutral-900"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="#contact"
                            className="border border-neutral-600 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-300 hover:bg-neutral-900"
                        >
                            Contactarme
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}