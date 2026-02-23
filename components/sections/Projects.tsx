"use client";

import ScrollReveal from "@/components/helper/ScrollReveal";
import ProjectCard from "../helper/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto md:px-6 py-16 space-y-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
        Selected Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <ScrollReveal>
          <ProjectCard
            title="Portfolio Website"
            description="Modern Next.js portfolio with TypeScript and animations."
            tech="Next.js · TypeScript · Tailwind"
            url="#"
          />
        </ScrollReveal>

        {/* <ScrollReveal delay={150}>
          <ProjectCard
            url=""
            title="Task Manager App"
            description="Fullstack task manager with authentication and API integration."
            tech="React · Redux · REST API"
          />
        </ScrollReveal> */}
        <ScrollReveal delay={150}>
          <ProjectCard
            url="https://github.com/d-roncevic/slothui"
            title="slothUI"
            description="A simple kanban-style dashboard for task management."
            tech="TypeScript · React · TailwindCSS · JSONplaceholder · Redux"
          />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <ProjectCard
            url="https://budgetwise-8d9d1.web.app/"
            title="Budgetwise"
            description="Budgeting application – define your income and expenses to plan your monthly spending."
            tech="JavaScript · React · TailwindCSS · Firebase"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
