"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React, { useSyncExternalStore } from "react";
import { skillGroups, skills, type Skill } from "../content/skills";
import { useTheme } from "next-themes";

const iconSrc = (icon: string, theme: string) =>
  `https://skillicons.dev/icons?i=${icon}&theme=${theme}`;

/* resolvedTheme is undefined during SSR, so deriving the icon theme straight from
   it made the server emit theme=dark while a dark-mode client wanted theme=light
   — a hydration mismatch. useSyncExternalStore gives an SSR-safe mounted flag
   (false on the server and through hydration, true after), without the
   setState-in-effect that react-hooks rejects. */
const noopSubscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

const SkillChip = ({ skill, iconTheme }: { skill: Skill; iconTheme: string }) => (
  <Badge
    variant="outline"
    style={{ "--brand-border": skill.borderColor } as React.CSSProperties}
    className="h-8 gap-1.5 px-2.5 border-border bg-card/40 text-xs text-secondary dark:text-neutral-200 transition-colors duration-200 hover:border-[var(--brand-border)]"
  >
    {skill.icon && (
      <Image
        src={iconSrc(skill.icon, iconTheme)}
        alt=""
        aria-hidden
        width={20}
        height={20}
        unoptimized
      />
    )}
    <span>{skill.skill}</span>
  </Badge>
);

const TechStackList = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const iconTheme = mounted && resolvedTheme === "dark" ? "light" : "dark";

  // Anything with an unrecognised category still renders, under "Other".
  const grouped = skillGroups.map((group) => ({
    label: group.label,
    items: skills.filter((s) => s.category === group.id),
  }));
  const orphans = skills.filter(
    (s) => !skillGroups.some((group) => group.id === s.category),
  );
  if (orphans.length > 0) grouped.push({ label: "Other", items: orphans });

  return (
    <div className="flex flex-col gap-4 mt-2">
      {grouped
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-medium tracking-wide text-secondary">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillChip key={skill.skill} skill={skill} iconTheme={iconTheme} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TechStackList;
