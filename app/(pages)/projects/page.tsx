import Container from "@/app/components/Container"
import Projects from "@/app/components/Projects"
import PageHeading from "@/app/components/PageHeading"
import FadeUp from "@/app/components/FadeUp"
import { Metadata } from "next"

export async function generateMetadata():Promise<Metadata> {
return {
  title: 'Projects | Saketh Kusuma',
  description: "I'm Saketh, a developer who enjoys building things and understanding how they work behind the scenes. Whether it's developing a new feature, solving a challenging bug, or learning a new technology, I enjoy the problem-solving aspect of software development."
}
}
export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-start justify-start gap-10 w-full">
        <Container className="min-h-screen px-8 pt-15 md:p-20">
          <FadeUp>
            <PageHeading>Projects</PageHeading>
          </FadeUp>
          <Projects/>
        </Container>
    </div>
  )
}
