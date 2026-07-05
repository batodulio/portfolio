import { BatIcon } from "./BatIcon";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="flex items-center gap-2 text-sm text-mist-dim">
          <BatIcon className="w-6 text-brand-soft/70" />
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-mist-dim transition-colors hover:text-brand-soft"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
