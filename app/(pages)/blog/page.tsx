import BlogsList from "../../components/Blogs-List";
import Container from "../../components/Container";
import PageHeading from "@/app/components/PageHeading";
import Paragraph from "@/app/components/Paragraph";
import FadeUp from "@/app/components/FadeUp";

const AllBlogs = () => {
  return (
    <div className="flex-1 flex items-start justify-start gap-10">
      <Container className="px-8 pt-20 md:px-20">
        <FadeUp>
          <PageHeading>All blogs</PageHeading>
          <Paragraph className="pt-4">
            Thoughts on code, design, and building things.
          </Paragraph>
        </FadeUp>
        <BlogsList />
      </Container>
    </div>
  );
};

export default AllBlogs;
