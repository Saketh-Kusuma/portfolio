"use client";
import Image from "next/image";
import avatarHero from "../avatar-hero1.webp";
import Container from "../components/Container";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState(false);
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
    setShadow(latest > 10);
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
        transition={{ duration: 0.3, ease: "linear" }}
        className={`${!isMobile && shadow ? "rounded-4xl bg-neutral-200 dark:bg-neutral-900" : ""} absolute sm:fixed inset-x-0 top-0 z-100 mx-auto mt-2 flex w-full max-w-4xl min-w-fit items-center justify-between gap-3 px-3 py-2`}
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
              src={avatarHero}
              width={100}
              height={100}
              alt="avatar"
              preload
              placeholder="blur"
              sizes="40px"
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          </Link>
        </motion.div>

        <div className="hidden sm:flex items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const showLine = hovered === index || (hovered === null && isActive);
            return (
              <Link
                className={`relative px-3 py-1.5 text-sm transition-colors ${showLine ? "text-primary" : "text-secondary hover:text-primary"}`}
                href={item.href}
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {showLine && (
                  <motion.span
                    layoutId="nav-active-line"
                    className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-black dark:bg-white"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ModeToggle />
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
