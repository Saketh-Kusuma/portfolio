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
        {/* Header */}
        <FadeUp>
          <PageHeading>Experience</PageHeading>
        </FadeUp>

        {/* Experience Cards */}
        <div className="pt-8 space-y-6">
          {experiences.map((exp, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="border border-border rounded-lg p-6 md:p-8 hover:border-foreground/20 transition-colors duration-300">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-neutral-200">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-primary dark:text-neutral-200 opacity-60 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs text-primary dark:text-neutral-200 opacity-70 whitespace-nowrap pt-1">
                    {exp.period}
                  </span>
                </div>

                {/* Highlights - 3 key points */}
                <div className="space-y-4 mb-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex gap-3">
                      <span className="text-primary dark:text-neutral-200 opacity-40 mt-1 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </span>
                      <p className="text-sm leading-relaxed text-primary dark:text-neutral-200">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 border border-border text-primary dark:text-neutral-200 hover:border-foreground/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Education Section */}
        <FadeUp delay={0.1}>
          <p className="text-sm font-semibold text-primary dark:text-neutral-200 mb-6 tracking-wide uppercase">
            Education
          </p>
        </FadeUp>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <FadeUp key={index} delay={0.1 + index * 0.05}>
              <div className="flex justify-between items-start gap-4 py-3 border-b border-border/50 last:border-0">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary dark:text-neutral-200">
                    {edu.degree}
                  </p>
                  <Paragraph className="text-xs mt-1">
                    {edu.institution} · {edu.location}
                  </Paragraph>
                </div>
                <span className="text-xs text-primary dark:text-neutral-200 whitespace-nowrap pt-0.5 opacity-70">
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
