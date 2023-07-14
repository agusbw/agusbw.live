import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx/post";
import "@/styles/highlight-js/github-dark.css";
import Container from "@/components/layout/container";
import { DATE_FORMAT } from "@/constants";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Page = async ({ params }) => {
  let post;

  try {
    post = await getPostBySlug(params.slug);
  } catch (err) {
    console.error(err);
    redirect("/");
  }

  return (
    <section className="py-16 text-center">
      <Container>
        <h3 className="text-highContrast">{post.meta.title}</h3>
        <p className="mt-2">
          Posted on{" "}
          {new Date(post.meta.created_at).toLocaleDateString(
            DATE_FORMAT.locale,
            DATE_FORMAT.options
          )}
        </p>
        <div className="mx-auto mt-12 prose text-left prose-regular prose-a:no-underline hover:prose-a:underline">
          {post.content}
          <div className="mt-12 text-left not-prose">
            <p>
              Last modified:{" "}
              {new Date(post.meta.created_at).toLocaleDateString(
                DATE_FORMAT.locale,
                DATE_FORMAT.options
              )}
            </p>
            {}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Page;
