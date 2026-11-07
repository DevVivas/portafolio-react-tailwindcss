import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { House, FolderGit2, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx'

const items = [
    { label: 'Inicio', href: '#inicio', icon: House },
    { label: 'Work', href: '#work', icon: FolderGit2 },
    { label: 'Contacto', href: '#contact', icon: Mail },
    { sep: true },
    { label: 'GitHub', href: 'https://github.com/DevVivas', icon: GithubIcon, external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devvivas', icon: LinkedinIcon, external: true },
]

function DockItem({ mouseX, label, children }) {
    const [el, setEl] = useState(null)
    const distance = useTransform(mouseX, (x) => {
        if (!el) return 999
        const r = el.getBoundingClientRect()
        return x - (r.left + r.width / 2)
    })
    const size = useSpring(useTransform(distance, [-110, 0, 110], [40, 60, 40]), {
        mass: 0.1,
        stiffness: 170,
        damping: 14,
    })
    return (
        <motion.div ref={setEl} style={{ width: size, height: size }} className="group relative">
            {children}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            >
                {label}
            </span>
        </motion.div>
    )
}

export default function Dock() {
    const mouseX = useMotionValue(Infinity)

    return (
        <nav
            aria-label="Navegación principal"
            className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-2 pb-[env(safe-area-inset-bottom)]"
        >
            <motion.div
                onMouseMove={(e) => mouseX.set(e.clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="flex h-16 items-end gap-1 rounded-full border border-border bg-background/80 p-2 shadow-lg backdrop-blur-xl"
            >
                {items.map((it, i) =>
                    it.sep ? (
                        <div key={i} className="mx-1 h-full w-px self-center bg-border" />
                    ) : (
                        <DockItem key={it.label} mouseX={mouseX} label={it.label}>
                            <a
                                href={it.href}
                                aria-label={it.label}
                                target={it.external ? '_blank' : undefined}
                                rel={it.external ? 'noreferrer' : undefined}
                                className="flex h-full w-full items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground active:scale-95"
                            >
                                <it.icon className="h-1/2 w-1/2" />
                            </a>
                        </DockItem>
                    ),
                )}
            </motion.div>
        </nav>
    )
}
