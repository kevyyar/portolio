import { ProjectImage, ProjectInfo } from "@/components";

export const Project = () => {
  return (
    <div className="px-12 lg:px-72 lg:flex lg:items-center lg:justify-between">
      <ProjectInfo />
      <ProjectImage />
    </div>
  );
};
