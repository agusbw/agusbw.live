import FeaturedProject from "./featured-project";
import ButtonLink from "../shared/button-link";
import Container from "../layout/container";

const ProjectSection = () => {
  return (
    <section className="py-16 mx-auto text-center">
      <Container>
        <p className="mb-16 text-4xl text_gradient">My Work</p>
        <FeaturedProject />
        <ButtonLink
          href={"/projects"}
          className={"w-fit mx-auto px-20 mt-10"}
        >
          More works...
        </ButtonLink>
      </Container>
    </section>
  );
};
export default ProjectSection;
