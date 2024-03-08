import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}