"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { skills } from "../content/skills";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const TechStackList = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-wrap shrink md:grow gap-3 mt-2">
      {skills.map((skill, index) => (
        <Badge
          key={index}
          className={cn(
            "w-max py-5 flex justify-start items-center border-2 gap-2",
            `hover:border-[${skill.borderColor}]`,
          )}
          variant={"link"}
        >
          <Image
            src={`https://skillicons.dev/icons?i=${skill.icon}&theme=${resolvedTheme === "dark" ? "light" : "dark"}`}
            alt={skill.skill}
            width={25}
            height={25}
            unoptimized
          />
          <span className="text-secondary dark:text-neutral-200 text-sm">
            {skill.skill}
          </span>
        </Badge>
      ))}
    </div>
  );
};

export default TechStackList;
