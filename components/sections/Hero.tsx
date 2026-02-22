import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 py-16 mx-auto">
      <div className="hero-glow absolute top-20 left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-neutral-900">
            Darian Rončević
          </h1>

          <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
            Building modern, scalable and performant web applications with
            React, TypeScript and Next.js.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-neutral-500">
            {["React", "TypeScript", "Next.js", "TailwindCSS", "Redux"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm rounded-full border border-neutral-300 bg-white/70 backdrop-blur flex justify-center items-center"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative flex flex-col items-center md:items-end gap-6">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            <Image
              src="/images/DarianRoncevic_photo.jpg"
              alt="Darian Rončević"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="mt-4 px-6 py-3 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-700 transition"
            >
              View Projects
            </a>
            <a
              href="/files/DarianRoncevic_Resume.pdf"
              target="_blank"
              className="mt-4 px-6 py-3 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-700 transition"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/darianroncevic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 text-neutral-500 hover:text-neutral-900 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.01 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.03A9.4 9.4 0 0 1 12 7.5c.85.004 1.71.11 2.51.32 1.91-1.3 2.75-1.03 2.75-1.03.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.89-2.34 4.75-4.57 5.01.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/darianroncevic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 text-neutral-500 hover:text-neutral-900 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.73-1.04 2.09-1.5 3.25-1.5 2.21 0 4 1.79 4 4v6.5z" />
              </svg>
            </a>
            <a href="mailto:darian.roncevic@gmail.com" aria-label="Email">
              <svg
                className="w-6 h-6 text-neutral-500 hover:text-neutral-900 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8l8 5 8-5v10H4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
