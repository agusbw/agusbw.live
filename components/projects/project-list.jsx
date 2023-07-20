import ProjectCard from "./project-card";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
};
export default ProjectList;
