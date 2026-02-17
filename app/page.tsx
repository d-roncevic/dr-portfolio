"use client";
import Contact from "@/components/sections/Contact";
import ContactForm from "@/components/sections/ContactForm";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full bg-grid flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Hero />
        <Projects />
        <Journey />
        <Contact onEmailClick={() => setIsFormOpen(!isFormOpen)} />
        <ContactForm isOpen={isFormOpen} />
      </main>
    </div>
  );
}
