import Image from "next/image";
import Container from "./components/Container";
import Projects from "./components/Projects-Home";
import LandingBlogs from "./components/Landing-Blogs";
import { Link } from "next-view-transitions";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import NavbarHome from "./navbar/navbar-home";
import Paragraph from "./components/Paragraph";
import FadeUp from "./components/FadeUp";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <div className="flex-1 w-full flex flex-col">
        <Container className="flex-1 px-8 pt-15 md:pt-20 md:px-20">
          <FadeUp>
            <div className="flex items-center gap-4 pb-2">
              <Image
                src={"/avatar-hero1.png"}
                alt="Saketh Kusuma"
                loading="eager"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl text-primary dark:text-white font-medium">
                  Saketh Kusuma
                </h1>
                {/* <h2 className="text-secondary text-sm">Software engineer</h2> */}
                <Link
                  href="/contact"
                  className="text-secondary dark:text-neutral-400 text-sm"
                >
                  @kusumasaketh92
                </Link>
              </div>
            </div>
            <Paragraph className="pt-2">i&apos;m a software engineer</Paragraph>
            <Paragraph className="pt-2">
              i build modern, responsive, and scalable web applications.
            </Paragraph>
            <Paragraph className="pt-2">
              occasionally, i watch movies, test custom roms, and take photos
            </Paragraph>
            <Paragraph className="pt-2">
              reach me at{" "}
              <Link
                className="text-primary dark:text-white"
                href="https://www.linkedin.com/in/saketh-kusuma"
                target="_blank"
              >
                @saketh-kusuma
              </Link>
            </Paragraph>
            <Paragraph className="pt-6">
              <Link
                href={"/resume/SakethKusuma_SoftwareEngineer.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-700 dark:text-neutral-200 flex items-center gap-1"
              >
                View Resume
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </Paragraph>
          </FadeUp>
          <FadeUp>
            <Projects />
            <Link
              href={"/projects"}
              className="text-xs md:text-sm flex items-center gap-1 group justify-end pb-5 text-neutral-600 dark:text-neutral-200"
            >
              <span>view all projects</span>
              <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div>
              <LandingBlogs />
              <Link
                href={"/blog"}
                className="text-xs md:text-sm flex items-center gap-1 group justify-end pt-4 md:pt-1 pb-4 text-neutral-600 dark:text-neutral-200"
              >
                <span>browse all blogs</span>
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </FadeUp>
        </Container>
      </div>
    </div>
  );
}
