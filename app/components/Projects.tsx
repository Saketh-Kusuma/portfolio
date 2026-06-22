"use client";
import Image from "next/image"
import {motion} from "motion/react"
import {Link} from "next-view-transitions";
const Projects = () => {
    const projects = [{
        title:"Wonder World Adventure Hub",
        src:"/projects/wonder-world-hub-thumbnail.png",
        description:"A  full-stack React and Node.js web application for a theme park with a responsive interface and real-time visitor query handling.",
        href:"#"
    },{
        title:"Link Devs",
        src:"/projects/linkdevs-thumbnail-dark.png",
        description:"A developer matchmaking platform using React and Node.js/Express.js with JWT-secured REST APIs for registration, authentication, and profile management.",
        href:"#"
    }]
  return (
    <div className='py-10'>
        <p className="text-secondary text-sm md:text-sm max-w-lg pt-4">
         I love building web apps and products that can impact millions of lives
        </p>
        <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2">
            {projects.map((project,index)=>(
                <motion.div initial={{opacity:0,filter:'blur(10px)',y:10}} whileInView={{opacity:1,filter:'blur(0px)',y:0}} transition={{
                duration:0.3,
                delay: index*0.1,
                ease:"easeInOut"
                }}  key={index} className="group md:h-60 md:mb-20">
                    <Link href={project.href} className="block">
                        <div className="relative w-full aspect-video md:h-60 md:aspect-auto overflow-hidden rounded-xl">
                            <Image alt={`${project.title}`} src={project.src} fill loading="eager" className="object-cover group-hover:scale-[1.02] transition duration-200"/>
                        </div>
                        <h2 className="text-neutral-500 dark:text-neutral-400 font-medium mt-3 tracking-tight text-sm sm:text-base">{project.title}</h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-xs mt-1 leading-relaxed">{project.description}</p>
                    </Link>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects