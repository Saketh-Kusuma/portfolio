import { Badge } from "@/components/ui/badge";
import Container from "../../components/Container";
import { skills } from "../../content/skills";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Timeline from "@/app/components/Timeline";
import { timeline } from "@/app/content/timeline";
import PageHeading from "@/app/components/PageHeading";
import Paragraph from "@/app/components/Paragraph";
import FadeUp from "@/app/components/FadeUp";
import type { Metadata } from 'next'
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About | Saketh Kusuma',
    description: "I'm Saketh, a developer who enjoys building things and understanding how they work behind the scenes. Whether it's developing a new feature, solving a challenging bug, or learning a new technology, I enjoy the problem-solving aspect of software development."
  }
}
export default function About() {
  return (
    <div className="min-h-screen flex items-start justify-start gap-10 w-full">
     <Container className="min-h-screen px-8 pt-15 md:p-20">
      <FadeUp>
        <PageHeading>About Me</PageHeading>
        <Paragraph className="pt-4">
         hyderabad / india
        </Paragraph>
        <Paragraph className="pt-4">
         i&apos;m a software developer who loves solving real-world problems
        </Paragraph>
        <Paragraph className="pt-4">
         i enjoy breaking complex challenges into simple solutions
        </Paragraph>
        <Paragraph className="pt-4">
          currently building projects, writing blogs, and preparing for the next big opportunity
        </Paragraph>
        <Paragraph className="pt-4">
         powered by coffee and persistence
        </Paragraph>
      </FadeUp>
      <FadeUp delay={0.1}>
        <div>
          <p className="text-primary text-sm md:text-sm max-w-lg pt-6">
             Tech Stack:
           </p>
            <div className="flex flex-wrap shrink md:grow gap-3 mt-2">
           {skills.map((skill,index)=>(
             <Badge key={index} className={cn("w-max py-5 flex justify-start items-center border-2 gap-2",`hover:border-[${skill.borderColor}]`)} variant={"link"}><Image unoptimized src={`${skill.imgSrc}`} alt={`${skill.skill}`} width={20} height={20}/><span className="text-secondary text-sm">{skill.skill}</span></Badge>
           ))}
         </div>
        </div>
      </FadeUp>
      <FadeUp delay={0.15}>
        <div>
         <p className="text-primary text-sm md:text-sm max-w-lg py-6">
             Here&apos;s a timeline of my achivements:
         </p>
         <Timeline data={timeline}/>
        </div>
      </FadeUp>
     </Container>
    </div>
  );
}

