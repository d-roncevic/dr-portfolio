export default function Hero() {
  return (
    <section className="relative px-6 py-32">
      <div className="hero-glow top-20 left-1/2 -translate-x-1/2 absolute" />

      <div className="max-w-4xl mx-auto space-y-8 relative">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Frontend Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight">
          Darian Rončević
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Building modern, scalable and performant web applications with React,
          TypeScript and Next.js.
        </p>

        <div className="flex flex-wrap gap-3">
          {["React", "TypeScript", "Next.js", "TailwindCSS", "Redux"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
