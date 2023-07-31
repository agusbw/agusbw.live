import { getAllPostsMeta } from "@/lib/mdx/post";
import Container from "@/components/layout/container";
import TextLink from "@/components/shared/text-link";
import { DATE_FORMAT } from "@/constants";

export const metadata = {
  title: "Blog",
  description: "Posts by Nyoman Agus Budhiarta Waisnawa",
};

const Page = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="w-full mt-8 mb-24">
      <Container>
        <h1 className="text_gradient">Blog.</h1>
        <p className="mt-2 mb-10">My Thought Space: Where ideas find wings</p>
        <div>
          {posts.map((post) => {
            return (
              <div
                key={post.slug}
                className="flex group hover:text-highContrast"
              >
                <div className="px-2 py-4 flex items-center justify-center border border-bdr w-[130px]">
                  <p>
                    {new Date(post.created_at).toLocaleDateString(
                      DATE_FORMAT.locale
                    )}
                  </p>
                </div>
                <div className="flex-1 px-2 py-4 underline border cursor-pointer border-bdr group-hover:underline lg:no-underline">
                  <TextLink href={`/blog/${post.slug}`}>{post.title}</TextLink>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Page;
