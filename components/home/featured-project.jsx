import Image from "next/image";
import TextLink from "../shared/text-link";

const FeaturedProject = ({ project }) => {
  return (
    <div className="flex flex-col w-11/12 max-w-md gap-2 mx-auto border-2 md:flex-row border-bdr md:max-w-full md:h-[340px] hover:scale-105 transition duration-300">
      <div className="relative flex-1 after:block after:absolute after:inset-0 after:bg-gradient-to-l from-black/70">
        <Image
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative flex flex-col flex-1 p-3 text-left">
        <TextLink
          href={"#"}
          className="text-3xl text-highContrast hover:underline"
        >
          {project.title}
        </TextLink>
        <p>{project.tools}</p>
        <p className="mt-3 mb-10 md:mt-8">{project.description}</p>
        <TextLink
          href={"#"}
          className={"absolute bottom-0 right-0 pr-4 pb-4 underline"}
        >
          Details...
        </TextLink>
      </div>
    </div>
  );
};
export default FeaturedProject;
