"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/helper/ScrollReveal";
import Link from "next/link";

type JourneyStep = {
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "certification";
  details?: {
    title: string;
    provider: string;
    topics: string;
    url?: string;
    pdf?: string;
  }[];
};

export default function Journey() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const scrollTop = window.scrollY;
      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollTop - offsetTop + window.innerHeight * 0.3) / height,
        ),
      );

      setProgressHeight(progress * height);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps: JourneyStep[] = [
    {
      year: "2014",
      title: "Technical School – Computer Technician",
      description:
        "Built strong foundations in computing systems, electronics and structured technical thinking.",
      type: "education",
    },
    {
      year: "2020",
      title: "CAD & 3D Modelling",
      description:
        "Worked as technical draftsman, developing precision, attention to detail and documentation skills.",
      type: "work",
    },
    {
      year: "2023",
      title: "Junior Frontend Developer",
      description:
        "Transitioned into modern frontend development and started building production-ready React applications.",
      type: "work",
    },
    {
      year: "2025",
      title: "Advanced React & Frontend Architecture",
      description:
        "Focused on scalable architecture, state management and performance optimization.",
      type: "certification",
      details: [
        {
          title: "Front-end Development",
          provider: "Pučko otvoreno učilište Brod",
          url: "https://uciliste-brod.hr/",
          topics: "HTML · CSS · SCSS · JavaScript · React",
          pdf: "/files/DarianRoncevic_FE_qualification.pdf",
        },
        {
          title: "React - The Complete Guide 2025",
          provider: "Academind",
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
          topics: "React · Redux · Context API · React Router · Next.js",
          pdf: "/files/DarianRoncevic_React_certificate.pdf",
        },
      ],
    },
  ];

  return (
    <section
      className="max-w-4xl mx-auto md:px-6 md:py-16 space-y-20"
      id="journey"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
        My Journey
      </h2>

      <div ref={containerRef} className="relative pl-10">
        <div className="absolute left-4 top-0 w-[2px] h-full bg-neutral-300 dark:bg-neutral-700" />

        <div
          className="absolute left-4 top-0 w-[3px] bg-black transition-all duration-300"
          style={{ height: progressHeight }}
        />

        <div className="space-y-20">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="relative">
                <div className="absolute -left-7 top-2 w-3 h-3 rounded-full bg-black dark:bg-white" />

                <p className="text-sm text-neutral-500 mb-2">{step.year}</p>

                <h3 className="text-xl font-semibold mb-3 text-neutral-700">
                  {step.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                  {step.description}
                </p>

                {step.details && (
                  <div className="mt-8 space-y-6">
                    {step.details.map((cert, certIndex) => (
                      <div
                        key={certIndex}
                        className="p-6 rounded-2xl border border-neutral-200 border-neutral-800 bg-white bg-neutral-900/60 backdrop-blur transition hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
                      >
                        <p className="font-medium text-neutral-700 mb-1">
                          {cert.title}
                        </p>
                        {cert.url ? (
                          <Link
                            href={cert.url}
                            target="_blank"
                            className="text-sm text-neutral-500 mb-2 hover:underline"
                          >
                            {cert.provider}
                          </Link>
                        ) : (
                          <p className="text-sm text-neutral-500 mb-2">
                            {cert.provider}
                          </p>
                        )}

                        <p className="text-sm text-neutral-500 mb-3">
                          {cert.topics}
                        </p>

                        {cert.pdf && (
                          <a
                            href={cert.pdf}
                            target="_blank"
                            className="inline-flex items-center text-neutral-500 hover:underline gap-2 text-sm font-medium group"
                          >
                            View Certificate
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
