export default function MoreSection() {
    return (
        <section id="mas" className="mt-20 border-t border-neutral-900 bg-neutral-950 px-6 py-20 text-neutral-300 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-4xl text-center">
                <p className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
                    [ Más ]
                </p>
                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="hero-font text-2xl text-neutral-100">Herramientas</h2>
                        <p className="mt-5 leading-6 text-neutral-500">React, Node.js, GraphQL, MongoDB, Docker, GitHub y Claude Code.</p>
                    </div>
                    <div>
                        <h2 className="hero-font text-2xl text-neutral-100">Disponibilidad</h2>
                        <p className="mt-5 leading-6 text-neutral-500">Abierto a proyectos freelance y oportunidades profesionales.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
