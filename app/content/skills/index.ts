export type SkillCategory = "languages" | "frontend" | "backend" | "tools";

export type Skill = {
  /** skillicons.dev slug. Omitted when no upstream icon exists for the skill. */
  icon?: string;
  skill: string;
  borderColor: string;
  category: SkillCategory;
};

/** Render order for the grouped mobile layout. */
export const skillGroups: { id: SkillCategory; label: string }[] = [
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Data" },
  { id: "tools", label: "Tools & DevOps" },
];

export const skills: Skill[] = [
  {
    icon: "java",
    skill: "Java",
    borderColor: "#ED8B00",
    category: "languages",
  },
  {
    icon: "js",
    skill: "JavaScript",
    borderColor: "#F7DF1E",
    category: "languages",
  },
  {
    icon: "ts",
    skill: "TypeScript",
    borderColor: "#3178C6",
    category: "languages",
  },
  {
    icon: "mysql",
    skill: "SQL",
    borderColor: "#336791",
    category: "languages",
  },

  {
    icon: "html",
    skill: "HTML5",
    borderColor: "#E34F26",
    category: "frontend",
  },
  {
    icon: "css",
    skill: "CSS3",
    borderColor: "#1572B6",
    category: "frontend",
  },
  {
    icon: "tailwind",
    skill: "Tailwind CSS",
    borderColor: "#06B6D4",
    category: "frontend",
  },
  {
    icon: "react",
    skill: "React.js",
    borderColor: "#61DAFB",
    category: "frontend",
  },
  {
    icon: "nextjs",
    skill: "Next.js",
    borderColor: "#FFFFFF",
    category: "frontend",
  },
  {
    icon: "redux",
    skill: "Redux Toolkit",
    borderColor: "#764ABC",
    category: "frontend",
  },
  {
    icon: "nodejs",
    skill: "Node.js",
    borderColor: "#339933",
    category: "backend",
  },
  {
    icon: "express",
    skill: "Express.js",
    borderColor: "#FFFFFF",
    category: "backend",
  },
  {
    icon: "mongodb",
    skill: "MongoDB",
    borderColor: "#47A248",
    category: "backend",
  },
  {
    icon: "postgres",
    skill: "PostgreSQL",
    borderColor: "#4169E1",
    category: "backend",
  },
  {
    icon: "firebase",
    skill: "Firebase",
    borderColor: "#FFCA28",
    category: "backend",
  },

  {
    icon: "aws",
    skill: "AWS EC2",
    borderColor: "#FF9900",
    category: "tools",
  },
  {
    icon: "docker",
    skill: "Docker",
    borderColor: "#2496ED",
    category: "tools",
  },
  {
    icon: "git",
    skill: "Git",
    borderColor: "#F05032",
    category: "tools",
  },
  {
    icon: "github",
    skill: "GitHub",
    borderColor: "#FFFFFF",
    category: "tools",
  },
  {
    icon: "postman",
    skill: "Postman",
    borderColor: "#FF6C37",
    category: "tools",
  },
];
