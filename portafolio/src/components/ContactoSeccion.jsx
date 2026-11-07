import { Mail } from 'lucide-react'
import BlurFade from './BlurFade.jsx'
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx'

const contactLinks = [
    { label: 'Gmail', value: 'Escríbeme por correo', href: 'mailto:vivasabrahan02@gmail.com', icon: Mail },
    { label: 'LinkedIn', value: 'Contacto Profesional', href: 'https://www.linkedin.com/in/devvivas', icon: LinkedinIcon },
    { label: 'GitHub', value: 'Mira mis proyectos', href: 'https://github.com/DevVivas', icon: GithubIcon },
]

export default function ContactoSeccion() {
    return (
        <section id="contact" className="mx-auto w-full max-w-2xl px-6 pb-40 pt-12">
            <BlurFade as="h2" className="text-xl font-bold">Contacto</BlurFade>
            <BlurFade as="p" delay={0.04} className="mt-3 text-pretty leading-7 text-muted-foreground">
                Puedes escribirme para conversar sobre proyectos web, desarrollo de APIs, colaboraciones
                profesionales o nuevas oportunidades laborales.
            </BlurFade>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {contactLinks.map((link, i) => {
                    const external = link.href.startsWith('http')
                    return (
                        <BlurFade as="li" key={link.label} delay={0.08 + i * 0.05} className="list-none">
                            <a
                                href={link.href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noreferrer' : undefined}
                                className="group block h-full rounded-xl border border-border bg-card p-4 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-muted-foreground/50 active:scale-[0.98]"
                            >
                                <link.icon aria-hidden="true" className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-accent" />
                                <span className="mt-3 block text-sm font-semibold">{link.label}</span>
                                <span className="mt-1 block text-sm text-muted-foreground">{link.value}</span>
                            </a>
                        </BlurFade>
                    )
                })}
            </ul>
        </section>
    )
}
