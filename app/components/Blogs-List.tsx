"use client";
import {Link} from "next-view-transitions"
import { blogs } from "../lib/blogs"
import Image from "next/image"
import {motion} from "motion/react"
const BlogsList = () => {
  return (
         
            <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2">
                        {blogs.map((blog,index)=>(
                            <motion.div initial={{opacity:0,filter:'blur(10px)',y:10}} whileInView={{opacity:1,filter:'blur(0px)',y:0}} transition={{
                            duration:0.3,
                            delay: index*0.1,
                            ease:"easeInOut"
                            }}  key={index} className="group md:h-50 md:mb-8">
                                <Link href={`/blog/${blog.slug}`}>
                                    <div className="relative w-full aspect-video md:h-50 md:aspect-auto overflow-hidden rounded-xl">
                                        <Image alt={`${blog.title}`} src={blog.image} loading="eager" fill className="object-cover group-hover:scale-[1.02] transition duration-200"/>
                                    </div>
                                    <h2 className="text-neutral-800 dark:text-neutral-400 font-medium mt-3 tracking-tight text-sm sm:text-base">{blog.title}</h2>
                                    <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-sm mt-1 leading-relaxed">{blog.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                </div>
  )
}

export default BlogsList