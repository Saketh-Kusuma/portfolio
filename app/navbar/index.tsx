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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setIsMobile(vw < 640);
      setWidthRange(getWidthRange(vw));
    };
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
      {/* Below `sm` the navbar is `absolute`, not pinned — the mobile dock is the
          only docked bar there, so this one scrolls away with the page. The
          scroll-driven width/shadow/y are gated off to match: a pill that grew a
          shadow and then immediately slid off-screen just reads as a glitch. */}
      <motion.nav
        style={{
          boxShadow: !isMobile && shadow ? "var(--shadow-aceternity)" : "none",
          width: isMobile ? "100%" : width,
          y: isMobile ? 0 : y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={`${!isMobile && shadow ? "rounded-4xl bg-neutral-200 dark:bg-neutral-900" : ""} absolute sm:fixed inset-x-0 top-0 z-100 max-w-4xl min-w-fit mx-auto flex items-center justify-between gap-3 px-3 py-3 w-full mt-2`}
      >
        {/* `animate`, not `whileInView`: this navbar is `absolute` below `sm`, so it
            scrolls out of view and back in — whileInView replayed the entrance on
            every scroll back to the top. It's above the fold on load anyway. */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
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
