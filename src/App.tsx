import { useEffect, useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { BatCursor } from "./components/BatCursor";
import { BatSwarm } from "./components/BatSwarm";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Skills from "./pages/Skills";
import Credentials from "./pages/Credentials";

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
];

/** Highlights whichever section currently sits near the top of the viewport. */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function App() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <AnimatedBackground />
      <BatCursor />
      <BatSwarm trigger={active} />
      <Nav active={active} />
      <main className="relative z-10 flex-1">
        <Home />
        <Experience />
        <Credentials />
        <Projects />
        <Skills />
        <Research />
      </main>
      <Footer />
    </div>
  );
}
