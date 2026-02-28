import { CinematicBackground } from "@/components/CinematicBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <CinematicBackground />
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div>
          <TopBar />
          <Hero />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
}
