import { ArrowUpRight } from 'lucide-react'
import BlurFade from './BlurFade.jsx'
import { GithubIcon } from './SocialIcons.jsx'

const projects = [
    {
        title: 'AquaChile Reclutamiento',
        description:
            'Plataforma de reclutamiento con formulario público de solicitud de evaluación psicolaboral y panel interno para gestionar solicitudes.',
        tags: ['React', 'Express', 'Supabase'],
        repo: 'https://github.com/DevVivas/app-aquachile-reclutamiento',
        demo: 'https://app-aquachile-reclutamiento.onrender.com',
    },
    {
        title: 'Product Mapper',
        description:
            'Conversión y búsqueda de códigos de producto entre proveedores externos y el catálogo local.',
        tags: ['React', 'Express', 'Prisma', 'PostgreSQL'],
        repo: 'https://github.com/DevVivas/app-product-mapper',
        demo: 'https://app-product-mapper-web.onrender.com/',
    },
    {
        title: 'Aldemar Chile Muestreo',
        description: 'AquaMuestra: app Android para registrar muestras de choritos en terreno, con foto e historial.',
        tags: ['Kotlin', 'Jetpack Compose'],
        repo: 'https://github.com/DevVivas/aldemar-chile-muestreo',
    },
    {
        title: 'GraphQL React MongoDB',
        description: 'API GraphQL con UI en React y MongoDB, lista para desplegar con Docker.',
        tags: ['GraphQL', 'React', 'MongoDB', 'Docker'],
        repo: 'https://github.com/DevVivas/graphql-react-mongodb',
    },
]

const link =
    'inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground'

export default function WorkSeccion() {
    return (
        <section id="work" className="mx-auto w-full max-w-2xl px-6 py-12">
            <BlurFade as="h2" className="text-xl font-bold">Work</BlurFade>
            <ul className="mt-5 grid gap-3">
                {projects.map((p, i) => (
                    <BlurFade as="li" key={p.title} delay={0.05 + i * 0.05} className="list-none">
                        <article className="rounded-xl border border-border bg-card p-5 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-muted-foreground/50">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <p className="mt-2 text-pretty leading-6 text-muted-foreground">{p.description}</p>
                            <ul className="mt-3 flex flex-wrap gap-1.5">
                                {p.tags.map((t) => (
                                    <li key={t} className="list-none rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                                <a href={p.repo} target="_blank" rel="noreferrer" className={link}>
                                    <GithubIcon className="h-4 w-4" />
                                    Repositorio
                                    <span className="sr-only"> de {p.title}</span>
                                </a>
                                {p.demo && (
                                    <a href={p.demo} target="_blank" rel="noreferrer" className={link}>
                                        Demo
                                        <ArrowUpRight aria-hidden="true" size={14} />
                                        <span className="sr-only"> de {p.title}</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    </BlurFade>
                ))}
            </ul>
        </section>
    )
}
