import { Button } from "@/components";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

const projectTechnologies = [
  { id: crypto.randomUUID(), tech: "php" },
  { id: crypto.randomUUID(), tech: "react" },
  { id: crypto.randomUUID(), tech: "nextjs" },
  { id: crypto.randomUUID(), tech: "wordpress" },
  { id: crypto.randomUUID(), tech: "tailwind" },
  { id: crypto.randomUUID(), tech: "javascript" },
  { id: crypto.randomUUID(), tech: "typescript" },
];

export const ProjectInfo = () => {
  return (
    <div className="mt-32">
      <span className="uppercase text-subtitle tracking-widest font-extrabold text-xl">
        latest work
      </span>
      <h3 className={`text-5xl leading-tight ${abril.className}`}>
        Team App website
      </h3>
      <ul className="flex flex-wrap gap-x-2">
        {projectTechnologies.map((t) => (
          <li
            className="bg-main my-2 p-2 capitalize w-[max-content] font-extrabold"
            key={t.id}
          >
            {t.tech}
          </li>
        ))}
      </ul>
      <p>
        Full website design and build for a concept team collaboration platform.
        This website also includes a beautiful blog. I have built the website
        and the blog in Webflow which has one of the best CMS for blog hosting.
      </p>
      <Button>see this project</Button>
    </div>
  );
};
