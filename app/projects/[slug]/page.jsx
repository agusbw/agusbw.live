import { getAllProjectMeta } from "@/lib/mdx/project";
import Container from "@/components/layout/container";
import { getProjectBySlug } from "@/lib/mdx/project";
import Image from "next/image";
import Badge from "@/components/shared/badge";
import TextLink from "@/components/shared/text-link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

export async function generateStaticParams() {
  const projects = await getAllProjectMeta();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const Page = async ({ params }) => {
  const project = await getProjectBySlug(params.slug);

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-4xl inline-block font-semibold text_gradient after:block after:w-3/4 after:h-0.5 after:mt-0.5  after:bg-highContrast">
          {project.meta.title}
        </h1>
        <div className="flex flex-col gap-4 p-4 border-2 lg:flex-row mt-7 bg-primary border-bdr">
          <div className="flex items-center justify-center flex-1 w-full h-auto">
            <Image
              width={600}
              height={600}
              alt={project.meta.title}
              src={project.meta.banner}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold text-highContrast">Summary</p>
            <p className="text-md">{project.meta.summary}</p>
          </div>
          <div className="flex flex-col flex-1">
            <div className="mb-3">
              <p className="text-xl font-semibold text-highContrast">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1 mt-2 w-fit h-fit">
                {project.meta.techs.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold text-highContrast">Others</p>
              <div className="flex gap-4 mt-2 text-2xl">
                {project.meta.repo && (
                  <TextLink
                    href={project.meta.repo}
                    isExternal
                  >
                    <AiOutlineGithub />
                  </TextLink>
                )}
                {project.meta.url && (
                  <TextLink
                    href={project.meta.url}
                    isExternal
                  >
                    <AiOutlineLink />
                  </TextLink>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 text-left max-w-none markdown_text prose-headings:font-normal">
          {project.content}
        </div>
      </Container>
    </section>
  );
};

export default Page;
