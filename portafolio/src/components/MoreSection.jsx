export default function MoreSection() {
    return (
        <section id="mas" className="mt-20 border-t border-neutral-900 bg-neutral-950 px-6 py-20 text-neutral-300 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-6xl">
                <p className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
                    [ Más ]
                </p>
                <div className="mt-12 grid gap-20 md:grid-cols-3">
                    <div>
                        <h2 className="hero-font text-2xl text-neutral-100">Herramientas</h2>
                        <p className="mt-5 leading-6 text-neutral-500">React, Node.js, GraphQL, MongoDB, Docker, GitHub, Cloude Code.</p>
                    </div>
                    <a
                        href="#reconocimientos"
                        className="group block transition-colors duration-200 hover:text-neutral-100"
                    >
                        <h2 className="hero-font text-2xl text-neutral-100">Reconocimientos</h2>
                        <p className="mt-5 leading-6 text-neutral-500 transition-colors group-hover:text-neutral-300">
                            Ver certificaciones, cursos y logros.
                        </p>
                    </a>
                    <div>
                        <h2 className="hero-font text-2xl text-neutral-100">Disponibilidad</h2>
                        <p className="mt-5 leading-6 text-neutral-500">Abierto a proyectos freelance y oportunidades profesionales.</p>
                    </div>
                </div>
                <div id="reconocimientos" className="mt-40 border-t border-neutral-900 pt-12">
                    <p className="text-xl uppercase tracking-[0.28em] text-neutral-400">
                        [ Reconocimientos ]
                    </p>
                    <h2 className="hero-font mt-5 text-3xl text-neutral-100">
                        Certificaciones y logros profesionales
                    </h2>
                </div>
            </div>
        </section>
    )
}
