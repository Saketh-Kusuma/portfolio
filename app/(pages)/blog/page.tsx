
import BlogsList from "../../components/Blogs-List"
import Container from "../../components/Container"

const AllBlogs = () => {
  return (
           <div className="min-h-screen flex items-start justify-start gap-10">
             <Container className="min-h-screen px-8 pt-15 md:p-20">
                <h1 className='text-2xl md:text-4xl font-bold tracking-tight text-primary'>
                 All blogs
                </h1>
                <p className='text-secondary text-sm md:text-sm max-w-lg pt-4'>
                Thoughts on code, design, and building things.
                </p>
               <BlogsList/>
             </Container>
           </div>
  )
}

export default AllBlogs