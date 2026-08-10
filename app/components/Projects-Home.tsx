"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";
import Paragraph from "./Paragraph";
import { projects } from "../content/projects";
const Projects = () => {
  return (
    <div className="pt-3">
      <FadeUp>
        <Paragraph className="text-primary text-sm md:text-sm max-w-lg">
          I love building web apps and products that can impact millions of
          lives
        </Paragraph>
      </FadeUp>
      <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={index}
            className="group"
          >
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border bg-card p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600"
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                <Image
                  alt={`${project.title}`}
                  src={project.src}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-1 pt-3 pb-1">
                <h2 className="flex items-center gap-1 text-primary dark:text-neutral-100 font-medium tracking-tight text-sm sm:text-base">
                  {project.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0" />
                </h2>
                <p className="text-secondary dark:text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
