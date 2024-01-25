import { ProjectInfo } from "@/components";
import { projectTechnologies } from "@/utils/technologies";
import { projects } from "@/utils/projects";

export const Project = () => {
  return (
    <div className="px-12 pb-10 lg:flex lg:flex-col lg:items-center lg:justify-between lg:px-72">
      {projects.map((p) => (
        <ProjectInfo
          key={p.title}
          projectTitle={p.title}
          technologies={projectTechnologies}
          projectImage={p.image}
        />
      ))}
    </div>
  );
};
