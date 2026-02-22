"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactForm({ isOpen }: { isOpen: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const company = formData.get("company");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message, company }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  }

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);
  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500 overflow-hidden mx-auto
        ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="max-w-3xl mx-auto px-8 py-14 border border-neutral-200 rounded-2xl bg-white shadow-sm space-y-8">
        <h3 className="text-2xl text-neutral-600 font-semibold tracking-tight">
          Send a message
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm text-neutral-500">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-neutral-500">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-500">Message</label>
            <textarea
              rows={5}
              name="message"
              className="w-full p-3 rounded-xl border border-neutral-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
            />
          </div>
          <input type="text" name="company" className="hidden" />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 border border-black rounded-lg bg-black text-white hover:bg-white hover:text-black transition hover:cursor-pointer`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && (
            <p className="text-sm text-green-600">Message sent successfully.</p>
          )}
        </form>
      </div>
    </div>
  );
}
