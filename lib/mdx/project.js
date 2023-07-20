import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import options from "./mdx-options";

const rootDirectory = path.join(process.cwd(), "app", "content", "projects");

export const getProjectBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options,
  });

  const bannerPath = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    realSlug
  );
  const bannerExt = fs.readdirSync(bannerPath)[0].split(".").pop();

  return {
    meta: {
      ...frontmatter,
      slug: realSlug,
      banner: `/images/projects/${realSlug}/banner.${bannerExt}`,
    },
    content,
  };
};

export const getAllProjectMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let projects = [];

  for (const file of files) {
    const { meta } = await getProjectBySlug(file);
    projects.push(meta);
  }

  return projects.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
};

export const getFeaturedProject = async () => {
  const projectsMeta = await getAllProjectMeta();
  return projectsMeta.filter((project) => project.is_featured)[0];
};
