import { Badge } from "@/components/ui/badge";
import Container from "../components/Container";
import { skills } from "../content/skills";
import Image from "next/image";
export default function About() {
  return (
    <div className="min-h-screen flex items-start justify-start gap-10 w-full">
     <Container className="min-h-screen px-8 pt-15 md:p-20">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">About Me</h1>
      <p className="text-secondary text-sm md:text-sm max-w-lg pt-4">
        I&apos;m Saketh, a developer who enjoys building things and understanding how they work behind the scenes. Whether it&apos;s developing a new feature, solving a challenging bug, or learning a new technology, I enjoy the problem-solving aspect of software development.
        What excites me most is the continuous journey of learning and improvement. Every project teaches me something new and helps me grow as both a developer and a problem solver. When I&apos;m not coding, you&apos;ll usually find me practicing DSA, exploring new technologies, or working on personal projects.
      </p>
     <div>
       <p className="text-secondary text-sm md:text-sm max-w-lg pt-4">
          Tech Stack:
        </p>
         <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill,index)=>(
          <Badge key={index} className="bg-primary h-8 flex items-center"><Image unoptimized src={`${skill.imgSrc}`} alt={`${skill.skill}`} width={20} height={20} ></Image><span className="text-neutral-100">{skill.skill}</span></Badge>
        ))}
      </div>
     </div>
     </Container>
    </div>
  );
}
