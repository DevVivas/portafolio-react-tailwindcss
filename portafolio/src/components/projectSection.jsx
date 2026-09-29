import { ArrowUpRight } from "lucide-react";

const project = {
  category: "API GRAPHQL",
  title: "Backend React UI/UX",
  description: "Proyecto de backend y UI/UX con una API GraphQL.",
  href: "https://github.com/DevVivas/graphql-react-mongodb",
};

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-screen w-full items-center bg-neutral-950 px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
          [ Proyectos ]
        </p>
        <article className="mt-12 grid gap-8 border-y border-neutral-800 py-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              [ {project.category} ]
            </p>
            <h2 className="mt-4 text-2xl font-medium text-neutral-100">
              {project.title}
            </h2>
            <p className="mt-3 max-w-2xl leading-6 text-neutral-400">
              {project.description}
            </p>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-200 transition-colors hover:text-white"
          >
            Ver repositorio
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </article>
        <a
          href="https://github.com/DevVivas"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-200"
        >
          Ver más proyectos en GitHub
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </div>
    </section>
  );
}