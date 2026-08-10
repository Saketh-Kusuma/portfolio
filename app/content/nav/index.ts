import {
  Briefcase,
  FolderGit2,
  House,
  Mail,
  Newspaper,
  User,
  type LucideIcon,
} from "lucide-react";

/** Destinations for the desktop navbars. Home is reached via the avatar there. */
export const navItems = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Experience", href: "/experience" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

/**
 * Destinations for the mobile bottom dock. Home gets an explicit tab here —
 * the avatar that links home on desktop sits outside the thumb arc.
 */
export const dockItems: { title: string; href: string; icon: LucideIcon }[] = [
  { title: "Home", href: "/", icon: House },
  { title: "About", href: "/about", icon: User },
  { title: "Projects", href: "/projects", icon: FolderGit2 },
  { title: "Experience", href: "/experience", icon: Briefcase },
  { title: "Blog", href: "/blog", icon: Newspaper },
  { title: "Contact", href: "/contact", icon: Mail },
];
