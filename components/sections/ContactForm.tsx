"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactForm({ isOpen }: { isOpen: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-[800px] opacity-100 mt-16" : "max-h-0 opacity-0"}
      `}
    >
      <div className="max-w-3xl mx-auto px-6 py-12 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 backdrop-blur space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight">
          Send a message
        </h3>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-neutral-500">Subject</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-500">Message</label>
            <textarea
              rows={5}
              className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
