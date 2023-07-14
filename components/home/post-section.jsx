import PostList from "./post-list";
import ButtonLink from "../shared/button-link";
import { getAllPostsMeta } from "@/lib/mdx/post";
import Container from "../layout/container";

const PostSection = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="py-16 mx-auto text-center">
      <Container>
        <p className="mb-8 text-4xl text_gradient">Recent Posts</p>
        <PostList posts={posts} />
        {posts.length > 3 && (
          <ButtonLink
            href={"/blog"}
            className={"w-fit mx-auto px-20"}
          >
            More posts...
          </ButtonLink>
        )}
      </Container>
    </section>
  );
};
export default PostSection;
