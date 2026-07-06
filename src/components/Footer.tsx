import { BatIcon } from "./BatIcon";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 flex shrink-0 items-center justify-between gap-3 px-6 py-3">
      <p className="flex items-center gap-2 text-xs font-medium text-soft">
        <BatIcon className="w-5 text-blue" />
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="font-display text-xs font-bold text-blue transition-colors hover:text-orange"
      >
        LinkedIn ↗
      </a>
    </footer>
  );
}
