import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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

function AppShell() {
  const location = useLocation();

  return (
    // Fixed-viewport shell: the app fills the screen and the page never scrolls.
    <div className="relative flex h-dvh flex-col overflow-hidden">
      <AnimatedBackground />
      <BatCursor />
      <BatSwarm trigger={location.pathname} />
      <Nav />
      <div className="relative z-10 min-h-0 flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/credentials" element={<Credentials />} />
            {/* Legacy route from the previous two-tab layout */}
            <Route path="/portfolio" element={<Navigate to="/experience" replace />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    // HashRouter: GitHub Pages has no SPA rewrites, so routes live in the URL hash.
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
