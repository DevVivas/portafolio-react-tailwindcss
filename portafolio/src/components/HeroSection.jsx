import BlurFade from './BlurFade.jsx'
import foto from '../assets/images/abraham.webp'

export default function HeroSection({ nombre = 'Abraham Vivas', role = 'Software Engineer' }) {
    const [firstName] = nombre.split(' ')
    return (
        <section id="inicio" className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center px-6 py-24">
            <div className="flex items-center justify-between gap-6">
                <div>
                    <BlurFade as="h1" delay={0.04} className="text-4xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl">
                        Hola, soy {firstName}
                    </BlurFade>
                    <BlurFade as="p" delay={0.08} className="mt-3 max-w-md text-lg text-muted-foreground sm:text-xl">
                        {role}. Ingeniero en informática con enfoque en desarrollo Full Stack.
                    </BlurFade>
                </div>
                <BlurFade delay={0.12} className="shrink-0">
                    <img
                        src={foto}
                        alt="Foto de Abraham Vivas"
                        width="160"
                        height="160"
                        fetchPriority="high"
                        className="h-24 w-24 rounded-full border border-border object-cover sm:h-40 sm:w-40"
                    />
                </BlurFade>
            </div>
            <BlurFade delay={0.16} className="mt-8 flex flex-wrap gap-3">
                <a
                    href="#work"
                    className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-[transform,opacity] duration-150 hover:opacity-90 active:scale-[0.97]"
                >
                    Ver proyectos
                </a>
                <a
                    href="#contact"
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-[transform,background-color] duration-150 hover:bg-muted active:scale-[0.97]"
                >
                    Contactarme
                </a>
            </BlurFade>
        </section>
    )
}
