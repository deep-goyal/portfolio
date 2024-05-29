import Aboutme from "@/app/components/Aboutme";
import NavBar from "@/app/components/NavBar";

import CanvasBackground from "@/app/components/CanvasBackground";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Toolbar from "@/app/components/Toolbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white dark:bg-white dark:text-black">
      <CanvasBackground />
      <NavBar />

      <main className="flex flex-col items-center justify-center min-h-screen pb-0">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-8xl font-bold mb-4">Hi! I'm Deep.</h1>
          <h2 className="text-8xl mb-20">I build cool stuff.</h2>
        </div>
      </main>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <Toolbar />
    </div>
  );
}
