import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BatIcon } from "./BatIcon";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/profile";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass flex items-center gap-2 rounded-full py-1.5 pr-1.5 pl-4">
        <NavLink to="/" className="group flex items-center gap-2.5" aria-label="Home">
          <motion.span whileHover={{ scale: 1.15, rotate: -6 }} className="text-brand-soft">
            <BatIcon className="w-8" />
          </motion.span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-mist sm:block">
            {profile.name}
          </span>
        </NavLink>

        <div className="ml-2 flex items-center gap-1">
          {tabs.map((tab) => (
            <NavLink key={tab.to} to={tab.to} end={tab.to === "/"} className="relative rounded-full px-3.5 py-2">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-edge bg-gradient-to-r from-brand/30 to-royal/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors ${
                      isActive ? "text-mist" : "text-mist-dim hover:text-mist"
                    }`}
                  >
                    {tab.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
