import Link from "next/link";
import localFont from "next/font/local";

const muli = localFont({
  src: "../../fonts/Muli-Bold.ttf",
  display: "swap",
});
export const Navbar = () => {
  return (
    <header className={`flex justify-between py-5 text-xl ${muli.className}`}>
      <div className="font-extrabold">
        <Link href={"/"}>
          Kev<span>The</span>Dev<span>.</span>
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="#work" className="relative pb-1 hover:bg-secondary">
          <span className="relative z-10">my work</span>
          <span className="absolute bottom-1 right-0 left-0 h-2 bg-secondary z-0"></span>
        </Link>
        <Link href="#contact" className="relative pb-1 hover:bg-secondary">
          <span className="relative z-10">get in touch</span>
          <span className="absolute bottom-1 left-0 right-0 h-2 bg-secondary z-0"></span>
        </Link>
      </nav>
    </header>
  );
};
