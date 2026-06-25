"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import FadeUp from "./FadeUp";
import Paragraph from "./Paragraph";
import { projects } from "../content/projects";
const Projects = () => {
  return (
    <div className="pt-3 text-primary dark:text-neutral-200">
      <FadeUp>
        <Paragraph className="pt-4 text-primary dark:text-neutral-200">
          I love building web apps and products that can impact millions of
          lives
        </Paragraph>
      </FadeUp>
      <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={index}
            className="group md:h-60 md:mb-20"
          >
            <Link href={project.href} className="block">
              <div className="relative w-full aspect-video md:h-50 md:aspect-auto overflow-hidden rounded-xl">
                <Image
                  alt={`${project.title}`}
                  src={project.src}
                  fill
                  sizes="100"
                  loading="eager"
                  className="object-cover group-hover:scale-[1.02] transition duration-200"
                />
              </div>
              <h2 className="text-neutral-500 dark:text-neutral-200 font-medium mt-3 tracking-tight text-sm sm:text-base">
                {project.title}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-xs mt-1 leading-relaxed">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
