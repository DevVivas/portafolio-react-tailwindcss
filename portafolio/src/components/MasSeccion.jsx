export default function MasSeccion() {
    return (
        <section id="mas" className="bg-neutral-950 px-6 py-70 text-neutral-300 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-4xl text-center">
                <p className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
                    [ Más ]
                </p>
                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="hero-font text-2xl uppercase text-neutral-100">Reconocimientos</h2>
                        <p className="mt-5 leading-6 text-neutral-500"></p>
                    </div>
                    <div>
                        <h2 className="hero-font text-2xl uppercase text-neutral-100">Credenciales</h2>
                        <p className="mt-5 leading-6 text-neutral-500"></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
