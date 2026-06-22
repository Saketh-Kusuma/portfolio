import Image from "next/image";
import Container from "./components/Container";
import Projects from "./components/Projects";
import LandingBlogs from "./components/Landing-Blogs";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start gap-10">
     <Container className="min-h-screen px-8 pt-15 md:p-20">
       <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hello there!</h1>
      <p className="text-secondary text-sm md:text-sm max-w-lg pt-4">
        I build modern, responsive, and scalable web applications that combine intuitive user experiences with robust backend systems. With hands-on experience in React.js, Node.js, Express.js, MongoDB, Java, SQL, and AWS, I enjoy transforming ideas into reliable software solutions while continuously improving my problem-solving and software engineering skills.
      </p>
      <Projects/>
      <LandingBlogs/>
     </Container>
    </div>
  );
}
