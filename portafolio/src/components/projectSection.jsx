import React from "react";

const steps = [
  {
    number: "API GraphQL  ",
    title: "Backend\nReact UI/UX",
    duration: "GitHub",
    offset: "mt-40",
    href: "https://github.com/DevVivas/graphql-react-mongodb",
  },
  {
    number: "02",
    title: "Full 3D\nDesign",
    duration: "2–4 weeks",
    offset: "mt-28",
    href: "https://github.com/DevVivas",
  },
  {
    number: "03",
    title: "Project\nDeliverables",
    duration: "3 weeks",
    offset: "mt-14",
    href: "https://github.com/DevVivas",
  },
  {
    number: "04",
    title: "Project\nFinals",
    duration: "1 week depending on the\nsize of the design",
    offset: "mt-0",
    href: "https://github.com/DevVivas",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-screen w-full items-center justify-center bg-black/80 px-6 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');
        .hero-font { font-family: 'Poppins', sans-serif; }
        .mono-font { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/90">
            <div className="border-b border-neutral-900 px-8 py-10 sm:px-10">
                <p className="text-xl font-light uppercase tracking-[0.28em] text-neutral-400">
                    [ Projects ]
                </p>
            </div>

        {/* steps */}
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {steps.map((step, i) => (
            <a
              key={step.number}
              href={step.href}
              target="_blank"
              rel="noreferrer"
              className={`group block flex min-h-[380px] flex-col border-neutral-900 px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900/60 sm:border-l ${
                i === 0 ? "sm:border-l-0" : ""
              }`}
            >
              <div className={step.offset}>
                <p className="mono-font text-xs text-neutral-500">
                  [ {step.number} ]
                </p>
                <div className="mt-2 h-px w-full bg-red-600/80" />
                <h3 className="hero-font mt-4 whitespace-pre-line text-2xl font-normal leading-snug text-neutral-400 transition-colors group-hover:text-white">
                  {step.title}
                </h3>
              </div>

              <div className="mt-auto pt-8">
                <p className="mono-font whitespace-pre-line text-xs leading-relaxed text-neutral-600 transition-colors group-hover:text-neutral-300">
                  [ {step.duration} ]
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}