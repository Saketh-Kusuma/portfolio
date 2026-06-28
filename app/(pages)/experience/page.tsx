import Container from "@/app/components/Container";
import FadeUp from "@/app/components/FadeUp";
import PageHeading from "@/app/components/PageHeading";
import Paragraph from "@/app/components/Paragraph";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Saketh Kusuma",
  description:
    "Work experience and education of Saketh Kusuma, a full-stack developer specializing in React, Node.js, and the MERN stack.",
};

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Akdenar Private Limited",
    companyUrl: "#",
    location: "Remote",
    period: "June 2025 – October 2025",
    current: false,
    highlights: [
      "Engineered 10+ reusable React components and a Shadcn UI library for a production e-commerce platform using Tailwind CSS, reducing UI development time by nearly 30%.",
      "Implemented Redux Toolkit for centralized state management, reducing unnecessary re-renders by 40% and improving responsiveness on product listing pages.",
      "Integrated REST APIs and added Framer Motion animations to improve interaction smoothness and reduce perceived page-load delays by 20%.",
    ],
    stack: ["React", "TypeScript", "Shadcn UI", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "REST APIs", "Git"],
  },
];

const education = [
  {
    degree: "B.Tech, Computer Science (Data Science)",
    institution: "Holy Mary Institute of Technology and Science",
    location: "Hyderabad",
    period: "2022 – 2026",
  },
  {
    degree: "Intermediate in MPC",
    institution: "Narayana Junior College",
    location: "Hyderabad",
    period: "2020 – 2022",
  },
  {
    degree: "SSC",
    institution: "Bhashyam High School",
    location: "Hyderabad",
    period: "2019 – 2020",
  },
];

export default function ExperiencePage() {
  return (
    <main className="flex-1 flex items-start justify-start gap-10 w-full">
      <Container className="px-8 pt-20 md:px-20 flex-1 max-w-3xl">
        <FadeUp>
          <PageHeading>Experience</PageHeading>
        </FadeUp>

        <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="border rounded-lg p-4 sm:p-6 md:p-8 hover:border-foreground/20 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-4 sm:mb-6">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-primary dark:text-neutral-200 truncate">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary dark:text-neutral-200 opacity-60 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs text-primary dark:text-neutral-200 opacity-70 whitespace-nowrap sm:pt-1">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex gap-2.5 sm:gap-3">
                      <span className="text-primary dark:text-neutral-200 opacity-40 mt-0.5 sm:mt-1 flex-shrink-0">
                        <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-primary dark:text-neutral-200">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 border border-border text-primary dark:text-neutral-200 hover:border-foreground/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>


        <FadeUp delay={0.1}>
          <PageHeading className="mt-8">
            Education
          </PageHeading>
        </FadeUp>

        <div className="space-y-1 sm:space-y-2 mb-3">
          {education.map((edu, index) => (
            <FadeUp key={index} delay={0.1 + index * 0.05}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 py-2 sm:py-3 border-b border-border/50 last:border-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-primary dark:text-neutral-200">
                    {edu.degree}
                  </p>
                  <Paragraph className="text-xs mt-0.5">
                    {edu.institution} · {edu.location}
                  </Paragraph>
                </div>
                <span className="text-xs text-primary dark:text-neutral-200 whitespace-nowrap opacity-70">
                  {edu.period}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </main>
  );
}
