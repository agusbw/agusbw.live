import Image from "next/image";
import TextLink from "../shared/text-link";
import SpotlightCard from "../shared/spotlight-card";
import { getFeaturedProject } from "@/lib/mdx/project";
import Badge from "../shared/badge";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const FeaturedProject = async () => {
  const project = await getFeaturedProject();

  return (
    <SpotlightCard
      className={"hover:scale-105 transition-transform duration-250"}
    >
      <div className="lg:min-h-[300px] flex flex-col lg:flex-row">
        <div className="relative flex-1 after:block after:absolute after:inset-0 after:bg-gradient-to-l from-black/70">
          <Image
            src={project.banner}
            width={600}
            height={600}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-end justify-between flex-1 mt-3 text-left lg:ml-3 lg:mt-0 ">
          <div className="self-start">
            <TextLink
              href={`/projects/${project.slug}`}
              className="text-3xl text-highContrast hover:underline"
            >
              {project.title}
            </TextLink>
            <div className="flex flex-wrap mt-3">
              {project.techs.map((techs) => (
                <Badge key={techs}>{techs}</Badge>
              ))}
            </div>
            <p className="my-3 md:my-5">{project.description}</p>
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
          <TextLink
            href={`/projects/${project.slug}`}
            className={
              "px-6 py-2 bg-primary border-bdr border text-lowContrast hover:text-highContrast text-sm"
            }
          >
            Details
          </TextLink>
        </div>
      </div>
    </SpotlightCard>
  );
};
export default FeaturedProject;
