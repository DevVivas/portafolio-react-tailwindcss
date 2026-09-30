export default function HeroSection({
    nombre = 'ABRAHAM VIVAS',
    role = 'Software Engineer',
    links = ['Sobre mí', 'Más'],
}) {
    const [firstName, ...rest] = nombre.split(' ')
    const lastName = rest.join(' ')

    return (
        <div className="hero-viewport relative min-h-screen w-full overflow-hidden bg-neutral-950 text-neutral-300">
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&display=swap');.hero-font { font-family: 'Poppins', sans-serif; }`}</style>

                <nav className="relative z-10 flex items-center justify-center px-6 py-6 sm:px-12">
                    <ul className="flex justify-center gap-8 text-sm font-semibold tracking-wide text-neutral-400 sm:gap-15">
                        {links.map((link) => {
                            const hrefs = {
                                'Sobre mí': '#SobreMiSeccion',
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

                <div className="relative z-10 mt-20 px-6 sm:mt-30 sm:px-0">
                    <h1 className="hero-font text-center text-5xl font-extrabold leading-[0.99] tracking-tight text-neutral-400 min-[360px]:text-6xl sm:text-8xl md:text-9xl">
                        {firstName}
                    <br />
                    {lastName}
                </h1>

                <div className="mt-12 w-full sm:mt-30">
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