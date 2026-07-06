import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BatIcon } from "./BatIcon";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/profile";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/credentials", label: "Credentials" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/research", label: "Research" },
];

export function Nav() {
  return (
    <header className="relative z-40 flex shrink-0 justify-center px-4 pt-4 pb-2">
      <nav className="card flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0.5 rounded-[24px] px-2 py-1.5 sm:rounded-full sm:pl-4">
        <NavLink to="/" className="group mr-1 flex items-center gap-2" aria-label="Home">
          <motion.span whileHover={{ scale: 1.15, rotate: -6 }} className="text-blue dark:text-sky">
            <BatIcon className="w-8" />
          </motion.span>
          <span className="hidden font-display text-sm font-bold tracking-wide text-ink lg:block">
            {profile.name}
          </span>
        </NavLink>

        {tabs.map((tab) => (
          <NavLink key={tab.to} to={tab.to} end={tab.to === "/"} className="relative rounded-full px-2.5 py-2 sm:px-3.5">
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="grad-blue absolute inset-0 rounded-full shadow-[0_4px_16px_rgba(26,86,196,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 font-display text-xs font-bold whitespace-nowrap transition-colors sm:text-[13px] ${
                    isActive ? "text-white" : "text-soft hover:text-ink"
                  }`}
                >
                  {tab.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
