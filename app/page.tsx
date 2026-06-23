import Image from "next/image";
import Container from "./components/Container";
import Projects from "./components/Projects";
import LandingBlogs from "./components/Landing-Blogs";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import NavbarHome from "./navbar/navbar-home";

export default function Home() {
  return (
    <div>
      <NavbarHome />
    <div className="min-h-screen flex items-start justify-start gap-10">
     <Container className="min-h-screen px-8 pt-15 md:pt-15 md:px-20">
       <div className="flex items-center gap-4 pb-2">
        <Image src={"/avatar-hero1.png"} alt="Saketh Kusuma" loading="eager" width={80} height={80} className="roundex-full" />
        <div className="flex flex-col">
          <h1 className="text-2xl text-primary font-medium">
            Saketh Kusuma
          </h1>
          <h2 className="text-secondary text-sm">software engineer</h2>
        </div>
       </div>
      <p className="text-secondary text-sm md:text-sm max-w-lg pt-2">
        i&apos;m a software engineer
      </p>
      <p className="text-secondary text-sm md:text-sm max-w-lg pt-2">
        I build modern, responsive, and scalable web applications.
      </p>
      <p className="text-secondary text-sm md:text-sm max-w-lg pt-2">
        occasionally, i watch movies, test custom roms, and take photos
      </p>
      <p className="text-secondary text-sm md:text-sm max-w-lg pt-2">
        reach me at <a className="text-primary" href="https://www.linkedin.com/in/saketh-kusuma" target="_blank">@saketh-kusuma</a>
      </p>
      <div>
         <Projects/>
         <Link href={"/projects"} className="text-xs md:text-sm flex items-center gap-1 group justify-end md:pt-7 pb-5 text-neutral-600 dark:text-neutral-400"><span>view all projects</span><ArrowRight size={13} strokeWidth={2}/></Link>
      </div>
      <div>
        <LandingBlogs/>
        <Link href={"/blog"} className="text-xs md:text-sm flex items-center gap-1 group justify-end pt-4 pb-4 text-neutral-600 dark:text-neutral-400"><span>browse all blogs</span><ArrowRight size={13} strokeWidth={2}/></Link>

      </div>
     </Container>
    </div>
    </div>
  );
}
