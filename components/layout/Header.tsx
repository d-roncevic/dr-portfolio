import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition"
        >
          DR
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="#projects"
            className="hover:underline underline-offset-4 transition"
          >
            Projects
          </Link>

          <Link
            href="#experience"
            className="hover:underline underline-offset-4 transition"
          >
            Experience
          </Link>

          <Link
            href="#journey"
            className="hover:underline underline-offset-4 transition"
          >
            Journey
          </Link>

          <Link
            href="#contact"
            className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
