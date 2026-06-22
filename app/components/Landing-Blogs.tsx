import { blogs } from '../lib/blogs'
import Link from 'next/link'

const LandingBlogs = () => {
  return (
            <div>
                <p className="text-secondary text-sm md:text-sm max-w-lg pt-2 md:pt-4 mb-2 md:mb-4">
                     I love writing it down
                 </p>
                <div className='flex flex-col gap-8'>
                    {blogs.map((blog,index)=>(
                    <Link key={index} href={`/blog/${blog.slug}`}>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-primary text-base font-bold tracking-tight'>
                                {blog.title}
                            </h2>
                            <p className='text-secondary text-sm md:text-sm'>
                                {blog.date}
                            </p>
                        </div>
                        <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
                        {blog.description}
                        </p>
                    </Link>
                    ))}
                 </div>
            </div>
  )
}

export default LandingBlogs