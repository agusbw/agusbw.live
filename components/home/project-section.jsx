import FeaturedProject from "./featured-project";
import ButtonLink from "../shared/button-link";
import agriplanPic from "@/assets/images/agriplan.png";

const project = {
  title: "Agriplan",
  image: agriplanPic,
  tools: "React, Vite, TailwindCSS, Recoil",
  description:
    "Admin dashboard that manages contents and resources for Agriplan mobile app ",
};

const ProjectSection = () => {
  return (
    <section className="py-16 mx-auto text-center lg:w-7/12">
      <p className="mb-16 text-4xl text_gradient">My Work</p>
      <FeaturedProject project={project} />
      <ButtonLink
        href={"/projects"}
        className={"w-fit mx-auto px-20 mt-10"}
      >
        More works...
      </ButtonLink>
    </section>
  );
};
export default ProjectSection;
