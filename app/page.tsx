import Image from "next/image";
import avatarHero from "./avatar-hero1.webp";
import Container from "./components/Container";
import Projects from "./components/Projects";
import LandingBlogs from "./components/Landing-Blogs";
import { Link } from "next-view-transitions";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import NavbarHome from "./navbar/navbar-home";
import Paragraph from "./components/Paragraph";
import FadeUp from "./components/FadeUp";
import { Suspense } from "react";
import GitHubActivity, {
  GitHubActivitySkeleton,
} from "./components/GitHubActivity";
import HomeSection from "./components/HomeSection";
import ScrolledTooFar from "./components/ScrolledTooFar";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <div className="flex-1 w-full flex flex-col">
        <Container className="flex-1 space-y-8 px-8 pt-15 pb-8 md:space-y-10 md:pt-20 md:pb-10 md:px-20">
          <FadeUp>
            <div className="flex items-center gap-4 pb-2">
              <Image
                src={avatarHero}
                alt="Saketh Kusuma"
                preload
                placeholder="blur"
                sizes="80px"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl text-primary dark:text-white font-medium font-serif">
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
            <HomeSection
              id="projects-heading"
              title="Projects"
              action={
                <Link
                  href="/projects"
                  className="flex min-h-8 items-center gap-1.5 rounded-sm text-xs text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
                >
                  View all projects
                  <ArrowRight aria-hidden="true" size={13} strokeWidth={2} />
                </Link>
              }
            >
              <Projects limit={2} />
            </HomeSection>
          </FadeUp>
          <FadeUp delay={0.1}>
            <HomeSection
              id="writings-heading"
              title="Writings"
              action={
                <Link
                  href="/blog"
                  className="flex min-h-8 items-center gap-1.5 rounded-sm text-xs text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
                >
                  Browse all blogs
                  <ArrowRight aria-hidden="true" size={13} strokeWidth={2} />
                </Link>
              }
            >
              <LandingBlogs />
            </HomeSection>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Suspense fallback={<GitHubActivitySkeleton />}>
              <GitHubActivity />
            </Suspense>
          </FadeUp>
          <ScrolledTooFar />
        </Container>
      </div>
    </div>
  );
}
