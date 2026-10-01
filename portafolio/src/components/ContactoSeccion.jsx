const contactLinks = [
    {
        label: 'Gmail',
        value: 'Escríbeme por correo',
        href: 'mailto:vivasabrahan02@gmail.com',
    },
    {
        label: 'LinkedIn',
        value: 'Contacto Profesional',
        href: 'https://www.linkedin.com/in/devvivas',
    },
    {
        label: 'GitHub',
        value: 'Mira mis proyectos',
        href: 'https://github.com/DevVivas',
    },
]

export default function ContactoSeccion() {
    return (
        <section id="contact" className="bg-neutral-950 px-6 py-10 text-neutral-300 sm:px-12 sm:py-14 lg:px-20">
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
                    [ Contacto ]
                </p>
                <div className="mt-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                className="w-full max-w-[220px] border border-neutral-800 p-5 text-center transition-colors hover:border-neutral-500 hover:bg-neutral-900"
                            >
                                <span className="text-sm uppercase tracking-[0.2em] text-neutral-100">
                                    {link.label}
                                </span>
                                <span className="mt-3 block text-sm leading-6 text-neutral-500">
                                    {link.value}
                                </span>
                            </a>
                        ))}
                    </div>
                    <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-7 text-neutral-500">
                        Puedes escribirme para conversar sobre proyectos web, desarrollo de APIs,
                        colaboraciones profesionales o nuevas oportunidades laborales.
                    </p>
                </div>
            </div>
        </section>
    )
}
