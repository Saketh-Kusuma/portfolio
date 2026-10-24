"use client";
import FadeUp from "./FadeUp";
import Paragraph from "./Paragraph";
import MediaCard from "./MediaCard";
import { projects } from "../content/projects";

type ProjectsProps = {
  /** Home page shows a preview; the projects page shows everything. */
  limit?: number;
  /** Top spacing for the intro line — the projects page needs room under its heading. */
  introClassName?: string;
};

const Projects = ({ limit, introClassName = "" }: ProjectsProps) => {
  const shown = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={limit ? "text-primary" : "pt-3 text-primary dark:text-neutral-200"}>
      <FadeUp>
        <Paragraph className={`text-primary dark:text-neutral-200 ${introClassName}`}>
          I love building web apps and products that can impact millions of
          lives
        </Paragraph>
      </FadeUp>
      <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${limit ? "pt-6" : "py-8"}`}>
        {shown.map((project, index) => (
          <MediaCard
            key={project.href}
            href={project.href}
            external
            image={project.src}
            title={project.title}
            headingLevel={limit ? "h3" : "h2"}
            description={project.description}
            meta={project.tags.join(" · ")}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
