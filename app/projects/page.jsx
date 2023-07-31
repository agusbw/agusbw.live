import Container from "@/components/layout/container";
import ProjectList from "@/components/projects/project-list";
import TextLink from "@/components/shared/text-link";
import { getAllProjectMeta } from "@/lib/mdx/project";
import appConfig from "@/config/appConfig";

export const metadata = {
  title: "Projects",
  description: "Projects by Nyoman Agus Budhiarta Waisnawa",
};

const Page = async () => {
  const projects = await getAllProjectMeta();

  return (
    <section className="w-full mt-8 mb-24">
      <Container>
        <h1 className="text_gradient">Projects.</h1>
        <p className="mt-2 mb-10">
          Where i put some of my projects, more on{" "}
          <TextLink
            href={appConfig.socials.Github}
            className="underline"
          >
            Github
          </TextLink>
        </p>
        <ProjectList projects={projects} />
      </Container>
    </section>
  );
};
export default Page;
