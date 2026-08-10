export type Project = {
  title: string;
  src: string;
  description: string;
  href: string;
  /** Shown under the title as plain text. Keep to the stack the project actually uses. */
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Wonder World Adventure Hub",
    src: "/projects/wonder-world-thumbnail.png",
    description:
      "A  full-stack React and Node.js web application for a theme park with a responsive interface and real-time visitor query handling.",
    href: "https://github.com/Saketh-Kusuma/wonderworld-chat-service",
    tags: ["React", "Node.js"],
  },
  {
    title: "Link Devs",
    src: "/projects/linkdevs-thumbnail-dark.png",
    description:
      "A developer matchmaking platform using React and Node.js/Express.js with JWT-secured REST APIs for registration, authentication.",
    href: "https://linkdevs.vercel.app/signup",
    tags: ["React", "Node.js", "Express.js", "JWT"],
  },
];
