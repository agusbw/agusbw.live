import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx/post";
import "@/styles/highlight-js/github-dark.css";
import Container from "@/components/layout/container";
import { dateFormatter } from "@/utils/functions";
import { redirect } from "next/navigation";
import Badge from "@/components/shared/badge";
import ButtonLink from "@/components/shared/button-link";
import TableOfContents from "@/components/blog/table-of-contents";

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
        <div className="gap-4 lg:flex">
          <div>
            <h1 className="text-4xl font-semibold text-highContrast">
              {post.meta.title}
            </h1>
            <p className="mt-2">
              Posted on {dateFormatter(post.meta.created_at)}
            </p>
            <div className="mx-auto mt-12 text-left markdown_text">
              {post.content}
              <div className="mt-12 text-left not-prose">
                <p>Last modified: {dateFormatter(post.meta.updated_at)}</p>
                {post.meta.tags.map((tag, index) => {
                  return (
                    <Badge
                      className={"mr-1"}
                      key={index}
                    >
                      {tag}
                    </Badge>
                  );
                })}
                <ButtonLink
                  className={"mt-5 w-fit py-1.5"}
                  href={"/blog"}
                >
                  Read other posts...
                </ButtonLink>
              </div>
            </div>
          </div>
          <TableOfContents headings={post.headings} />
        </div>
      </Container>
    </section>
  );
};
export default Page;
