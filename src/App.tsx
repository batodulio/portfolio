import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { MouseGlow } from "./components/MouseGlow";
import { BatCursor } from "./components/BatCursor";
import { BatSwarm } from "./components/BatSwarm";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function AppShell() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <MouseGlow />
      <BatCursor />
      <BatSwarm trigger={location.pathname} />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
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
