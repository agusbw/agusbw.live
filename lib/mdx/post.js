import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import options from "./mdx-options";
import components from "./mdx-components";
import GithubSlugger from "github-slugger";

const rootDirectory = path.join(process.cwd(), "app", "content", "posts");

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();

  const headings = Array.from(fileContent.matchAll(regXHeader)).map(
    ({ groups }) => {
      const flag = groups?.flag;
      const content = groups?.content;
      return {
        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
        text: content,
        slug: content ? slugger.slug(content) : undefined,
      };
    }
  );

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options,
    components,
  });

  return { meta: { ...frontmatter, slug: realSlug }, content, headings };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
};
