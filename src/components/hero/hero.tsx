import { Abril_Fatface } from "next/font/google";
import { Button } from "@/components";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});
export const Hero = () => {
  return (
    <section className="mt-20 text-center md:text-left md:w-[800px]">
      <h1
        className={`text-4xl tracking-wider ${abril.className} mb-8 md:text-5xl`}
      >
        Hi, I’m Kevin,{" "}
        <div className="inline-block relative pb-1">
          <span className="relative z-10">Web Designer</span>
          <span className="absolute bottom-1 right-0 left-0 h-8 md:bg-secondary z-0 mx-auto"></span>
        </div>
        <br />
        and{" "}
        <div className="inline-block relative pb-1">
          <span className="relative z-10"> Web Developer</span>
          <span className="absolute bottom-1 right-0 left-0 h-8 md:bg-secondary z-0 mx-auto"></span>
        </div>
      </h1>
      <p className="md:leading-7 md:w-[500px] text-[18px]">
        I design and build beautiful websites for businesses around the globe.
        If you need a modern and powerful website, send me an email. If we are a
        good fit, I will give you a time and cost estimate.
      </p>
      <Button>hi</Button>
    </section>
  );
};
