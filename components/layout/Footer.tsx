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
            className="hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/darian-roncevic/"
            target="_blank"
            className="hover:text-black dark:hover:text-white transition"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:roncevic.darian99@gmail.com"
            className="hover:text-black dark:hover:text-white transition"
          >
            Email
          </Link>
          <Link
            href="https://wa.me/385958669679"
            target="_blank"
            className="hover:text-black dark:hover:text-white transition"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}
