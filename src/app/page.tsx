import { CinematicBackground } from "@/components/CinematicBackground";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CinematicBackground />
      <div className="relative z-10">
        <TopBar />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
