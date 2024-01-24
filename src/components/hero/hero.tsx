import { Abril_Fatface } from "next/font/google";
import { Button, Navbar } from "@/components";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});
export const Hero = () => {
  return (
    <div className="bg-main px-12 min-h-[800px] md:min-h-[970px] lg:px-72 lg:min-h-[850px]">
      <Navbar />
      <section className="mt-20 lg:w-[1000px]">
        <h1
          className={`text-2xl tracking-wider ${abril.className} mb-8 md:text-4xl lg:text-6xl`}
        >
          Hi, I’m Kevin,{" "}
          <div className="inline-block relative pb-1">
            <span className="relative z-10">Front-End Developer</span>
            <span className="absolute bottom-1 right-0 left-0 h-8 md:bg-secondary z-0 mx-auto"></span>
          </div>
          <br />
          and{" "}
          <div className="inline-block relative pb-1">
            <span className="relative z-10"> Web Design Enthusiast</span>
            <span className="absolute bottom-1 right-0 left-0 h-8 md:bg-secondary z-0 mx-auto"></span>
          </div>
        </h1>
        <p className="lg:leading-7 lg:w-[500px] text-[18px]">
          I craft elegant and effective websites for businesses globally,
          combining modern design with top-notch front-end development.
          Interested in elevating your online presence? Reach out for a custom
          time and cost estimate tailored to your project needs.
        </p>
        <Button>see my work</Button>
      </section>
    </div>
  );
};
