import { Button, ResponsiveImage } from "@/components";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  projectTitle: string;
  technologies: { id: string; tech: string }[];
  projectImage: string;
}

export const ProjectInfo = ({
  projectTitle,
  technologies,
  projectImage,
}: Props) => {
  return (
    <div
      id="work"
      className="my-36 md:flex md:justify-between md:items-center md:gap-20"
    >
      <div className="flex-1 md:w-[1200px]">
        <span className="uppercase text-subtitle tracking-widest font-extrabold text-xl">
          latest work
        </span>
        <h3
          className={`text-5xl leading-tight mb-4 lg:text-7xl ${abril.className}`}
        >
          {projectTitle}
        </h3>
        <ul className="flex flex-wrap gap-x-2">
          {technologies.map((t) => (
            <li
              className="bg-main my-2 p-2 capitalize w-[max-content] font-extrabold"
              key={t.id}
            >
              {t.tech}
            </li>
          ))}
        </ul>
        <p className="text-[18px] lg:leading-7">
          Full website design and build for a concept team collaboration
          platform. This website also includes a beautiful blog. I have built
          the website and the blog in Web flow which has one of the best CMS for
          blog hosting.
        </p>
        <Button>see this project</Button>
      </div>
      <div
        className="flex-1 w-32 mt-10"
        style={{ width: "100%", height: "400px" }}
      >
        <ResponsiveImage src={projectImage} alt="Project" />
      </div>
    </div>
  );
};
