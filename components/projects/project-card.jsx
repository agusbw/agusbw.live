import SpotlightCard from "../shared/spotlight-card";
import TextLink from "../shared/text-link";
import Badge from "../shared/badge";
import Image from "next/image";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ProjectCard = async ({ project }) => {
  return (
    <SpotlightCard>
      <div className="flex flex-col w-full h-full md:flex-row">
        <div className="flex-1 mb-4 md:mb-0 md:mr-4 min-w-[200px]">
          <Image
            src={project.banner}
            alt={project.title}
            width="0"
            height="0"
            sizes="100vw"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <TextLink
            href={`/projects/${project.slug}`}
            className={"text-xl text-highContrast hover:underline mb-2"}
          >
            {project.title}
          </TextLink>
          <div className="flex flex-wrap gap-1 my-4">
            {project.techs.map((tech) => (
              <Badge
                className="text-xs"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
          <p className="mb-6 text-lg">{project.description}</p>
          <div className="flex gap-4 text-2xl">
            {project.repo && (
              <TextLink
                href={project.repo}
                isExternal
              >
                <AiOutlineGithub />
              </TextLink>
            )}
            {project.url && (
              <TextLink
                href={project.url}
                isExternal
              >
                <AiOutlineLink />
              </TextLink>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
export default ProjectCard;
