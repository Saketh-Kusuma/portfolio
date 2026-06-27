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
      "Collaborated in a production codebase using Git, GitHub, and Agile (Scrum) practices, improving team efficiency by an estimated 10%.",
      "Debugged and resolved UI issues across multiple screens, improving layout consistency and reducing visual defects in the production interface.",
      "Optimized reusable component structure to support faster feature rollout and cleaner code maintenance across the application.",
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

        {/* Experience Timeline */}
<FadeUp>
            <div className="relative pt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 pb-12 relative">
              {/* Vertical line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
              )}

              {/* Timeline Dot */}
              <div className="flex-shrink-0 mt-1.5 z-10">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 ${
                    exp.current
                      ? "bg-foreground border-foreground"
                      : "bg-background border-border"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 -mt-0.5">
                {/* Role & Period */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <span className="text-sm font-semibold text-primary dark:text-neutral-200">
                    {exp.role}
                  </span>
                  <span className="text-xs text-primary dark:text-neutral-200 whitespace-nowrap pt-0.5 opacity-70">
                    {exp.period}
                  </span>
                </div>

                {/* Company & Location */}
                <Paragraph className="mb-4 text-sm">
                  <a
                    href={exp.companyUrl}
                    className="hover:text-neutral-700 dark:text-neutral-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                  </a>
                  {" · "}
                  {exp.location}
                </Paragraph>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-sm leading-relaxed text-primary dark:text-neutral-200 pl-4 relative"
                    >
                      <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-border" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-primary dark:text-neutral-200 hover:bg-accent/50 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

</FadeUp>
        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Education Section */}
        <FadeUp delay={0.1}>
          <p className="text-sm font-semibold text-primary dark:text-neutral-200 mb-6 mt-8 tracking-wide uppercase">
            Education
          </p>
        </FadeUp>

       <FadeUp>
         <div className="space-y-5 mb-3">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start gap-4">
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
          ))}
        </div>
       </FadeUp>
      </Container>
    </main>
  );
}
