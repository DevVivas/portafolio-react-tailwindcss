import { ArrowRight } from 'lucide-react'
import backendImage from '../assets/background.jpg'


const cardsSobreMi = [
    {
        id: 1,
        title: 'APIS • SEGURIDAD',
        category: 'Backend',
        description: 'Desarollo de API REST, API GraphQL • MongoDB • Docker',
        image: backendImage,
        visual: 'object-left brightness-90',
    },
    {
        id: 2,
        title: 'Docker • GitHub Actions',
        category: 'DevOps',
        description: 'CI/CD, despligue en IaaS • PaaS • Static File • Prometheus ',
        image: backendImage,
        visual: 'object-center grayscale brightness-75',
    },
    {
        id: 3,
        title: 'React • Vite • BootStrap',
        category: 'Frontend',
        description: 'Desarollo UI/UX en React y estilos de Bootstrap/Tailwind',
        image: backendImage,
        visual: 'object-right saturate-150 brightness-90',
    },
]

const SobremiComponent = () => {
    return (
        <section id="sobreMi" className="relative overflow-hidden bg-neutral-950 px-6 py-20 text-neutral-300 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex flex-col gap-4">
                    <span className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
                        [ Sobre Mi ]
                    </span>

                    <h2 className="text-sm font-light uppercase tracking-[0.28em] text-neutral-400 leading-10">
                        Ingeniero en informática con enfoque en desarrollo FullStack.
                    </h2>
                </div>
                <div className="grid gap-10">

                    <div className="grid w-full auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {cardsSobreMi.map((p) => (
                            <article key={p.id} className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900">
                                
                                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                                    <img
                                        src={p.image}
                                        alt={p.category}
                                        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${p.visual}`}
                                    />
                                    <p className="absolute left-4 top-4 rounded bg-neutral-950/75 px-3 py-1 text-sm font-light uppercase tracking-[0.28em] text-neutral-100">
                                        {p.category}
                                    </p>
                                </div>

                                <div className="flex min-h-[190px] flex-1 flex-col space-y-3 p-5">
                                    <h3 className="min-h-10 text-sm font-bold text-neutral">{p.title}</h3>
                                    <p className="min-h-[72px] text-sm leading-6 text-neutral-400">
                                        {p.description}
                                    </p>

                                    <button className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-neutral-200 transition-colors hover:text-white">
                                        Ver Proyectos
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobremiComponent;