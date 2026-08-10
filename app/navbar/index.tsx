"use client";
import Image from "next/image";
import Container from "../components/Container";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { navItems } from "@/app/content/nav";

function getWidthRange(vw: number): [string, string] {
  if (vw < 640) return ["90%", "88%"];
  if (vw < 768) return ["95%", "70%"];
  if (vw < 1024) return ["85%", "70%"];

  return ["52%", "48%"];
}

const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState<boolean>(false);
  const y = useTransform(scrollY, [0, 100], [0, 10]);

  const [[widthStart, widthEnd], setWidthRange] = useState<[string, string]>([
    "96%",
    "88%",
  ]);

  useEffect(() => {
    const update = () => setWidthRange(getWidthRange(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const width = useTransform(scrollY, [0, 100], [widthStart, widthEnd]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: shadow ? "var(--shadow-aceternity)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={`${shadow ? "rounded-4xl bg-neutral-200 dark:bg-neutral-900" : ""} fixed inset-x-0 top-0 z-100 max-w-4xl min-w-fit mx-auto flex items-center justify-between gap-3 px-3 py-3 w-full mt-2`}
      >
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: "linear",
          }}
        >
          <Link href={"/"}>
            <Image
              src="/avatar-hero1.png"
              width="100"
              height="100"
              alt="avatar"
              priority
              sizes="40px"
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          </Link>
        </motion.div>

        <div className="hidden sm:flex items-center">
          {navItems.map((item, index) => (
            <Link
              className="text-sm relative px-3 py-1.5 text-secondary hover:text-primary transition-colors"
              href={item.href}
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-full bg-neutral-300 dark:bg-neutral-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ModeToggle />
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
