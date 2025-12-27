import Main from "@/Components/Main/Main";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
