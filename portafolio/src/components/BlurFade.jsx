import { motion, useReducedMotion } from 'motion/react'

export default function BlurFade({ children, delay = 0, className, as = 'div' }) {
    const reduce = useReducedMotion()
    const Tag = motion[as]
    if (reduce) return <Tag className={className}>{children}</Tag>
    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
        >
            {children}
        </Tag>
    )
}
