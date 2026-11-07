import { Cloud } from 'lucide-react'
import BlurFade from './BlurFade.jsx'
import reactIcon from '../assets/images/react-icon.svg'
import postgresqlIcon from '../assets/images/postgresql-icon.svg'
import gitIcon from '../assets/images/git-icon.svg'
import dockerIcon from '../assets/images/docker-icon.svg'
import javaIcon from '../assets/images/java-icon.svg'
import expressIcon from '../assets/images/express-icon.svg'
import phpIcon from '../assets/images/php-icon.svg'
import javascriptIcon from '../assets/images/javascript-icon.svg'
import pythonIcon from '../assets/images/python-icon.svg'
import laravelIcon from '../assets/images/laravel-icon.svg'
import djangoIcon from '../assets/images/django-icon.svg'

const AwsIcon = () => <Cloud aria-hidden="true" className="h-full w-full text-[#ff9900]" />

const SupabaseIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
        <path
            fill="#3ecf8e"
            d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12V21.6a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.656z"
        />
    </svg>
)

const img = (src) => () => <img src={src} alt="" className="h-full w-full object-contain" />

const groups = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', Icon: img(reactIcon) },
            { name: 'JavaScript', Icon: img(javascriptIcon) },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Express', Icon: img(expressIcon) },
            { name: 'Java', Icon: img(javaIcon) },
            { name: 'PHP', Icon: img(phpIcon) },
            { name: 'Laravel', Icon: img(laravelIcon) },
            { name: 'Python', Icon: img(pythonIcon) },
            { name: 'Django', Icon: img(djangoIcon) },
            { name: 'PostgreSQL', Icon: img(postgresqlIcon) },
            { name: 'Supabase', Icon: SupabaseIcon },
        ],
    },
    {
        title: 'DevOps',
        skills: [
            { name: 'Docker', Icon: img(dockerIcon) },
            { name: 'Git', Icon: img(gitIcon) },
            { name: 'AWS', Icon: AwsIcon },
        ],
    },
]

export default function SkillsSeccion() {
    return (
        <section id="skills" className="mx-auto w-full max-w-2xl px-6 py-12">
            <BlurFade as="h2" className="text-xl font-bold">Skills</BlurFade>
            <dl className="mt-5 divide-y divide-border border-y border-border">
                {groups.map((g, gi) => (
                    <BlurFade key={g.title} delay={0.04 + gi * 0.06} className="grid gap-3 py-4 sm:grid-cols-[6.5rem_1fr]">
                        <dt className="pt-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">{g.title}</dt>
                        <dd>
                            <ul className="flex flex-wrap gap-2">
                                {g.skills.map(({ name, Icon }) => (
                                    <li
                                        key={name}
                                        className="inline-flex list-none items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3.5 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1">
                                            <Icon />
                                        </span>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </BlurFade>
                ))}
            </dl>
        </section>
    )
}
