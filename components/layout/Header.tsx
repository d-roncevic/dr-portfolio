"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full border-b border-neutral-200 bg-white backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900 hover:opacity-80 transition"
        >
          DR
        </Link>

        <nav className="hidden md:flex text-neutral-700 items-center gap-8 text-sm font-medium">
          <Link
            href="#projects"
            className="hover:underline underline-offset-4 transition"
          >
            Projects
          </Link>
          {/* <Link
            href="#experience"
            className="hover:underline underline-offset-4 transition"
          >
            Experience
          </Link> */}
          <Link
            href="#journey"
            className="hover:underline underline-offset-4 transition"
          >
            Journey
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-neutral-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-neutral-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t text-neutral-700 border-neutral-200 px-6 py-4 flex flex-col gap-4 text-sm font-medium shadow-lg">
          <Link
            href="#projects"
            className="hover:underline underline-offset-4 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          {/* <Link
            href="#experience"
            className="hover:underline underline-offset-4 transition"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link> */}
          <Link
            href="#journey"
            className="hover:underline underline-offset-4 transition"
            onClick={() => setMenuOpen(false)}
          >
            Journey
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
