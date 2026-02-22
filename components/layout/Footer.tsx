import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-600 dark:text-neutral-400">
        <p>
          © {new Date().getFullYear()} Darian Rončević. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="https://github.com/d-roncevic"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-black dark:hover:text-white transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.01 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.03A9.4 9.4 0 0 1 12 7.5c.85.004 1.71.11 2.51.32 1.91-1.3 2.75-1.03 2.75-1.03.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.89-2.34 4.75-4.57 5.01.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/darian-roncevic/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-black dark:hover:text-white transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.73-1.04 2.09-1.5 3.25-1.5 2.21 0 4 1.79 4 4v6.5z" />
            </svg>
          </Link>
          <Link
            href="mailto:roncevic.darian99@gmail.com"
            aria-label="Email"
            className="hover:text-black dark:hover:text-white transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8l8 5 8-5v10H4z" />
            </svg>
          </Link>
          <Link
            href="https://wa.me/385958669679"
            target="_blank"
            aria-label="WhatsApp"
            className="hover:text-black dark:hover:text-white transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.149-.198.297-.767.967-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.511-.173-.009-.372-.011-.571-.011-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.348.711.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741 1.093 1.093-3.727-.235-.377a9.86 9.86 0 0 1-1.519-5.28c.001-5.523 4.477-10 10-10 2.669 0 5.181 1.043 7.071 2.929 1.893 1.885 2.929 4.398 2.929 7.071-.002 5.523-4.478 10-10 10m8.413-18.413C19.099 1.599 15.698 0 12 0 5.373 0 0 5.373 0 12c0 2.123.553 4.195 1.601 6.021L0 24l6.063-1.589A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.698-1.599-7.099-4.115-9.617" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
