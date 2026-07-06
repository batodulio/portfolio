import { PanelPage } from "../components/PanelPage";
import { ArrowUpRight } from "../components/Icons";
import { passionProject } from "../data/profile";

export default function Projects() {
  return (
    <PanelPage
      label="03 — Passion projects"
      title={
        <>
          Built <span className="text-grad-warm">after hours</span>.
        </>
      }
    >
      <div className="grid items-start gap-5 lg:grid-cols-[1.7fr_1fr]">
      <div className="grad-feature relative overflow-hidden rounded-[20px] border border-white/20 p-6 shadow-[0_12px_36px_rgba(26,86,196,0.35)] backdrop-blur-md sm:p-10">
        <span className="blob blob-soft bg-sky -top-16 -right-14 h-48 w-48 opacity-80" aria-hidden />
        <span className="blob blob-soft bg-yellow -bottom-14 left-[38%] h-28 w-28 opacity-70" aria-hidden />
        <span className="blob bg-green top-8 right-52 h-4 w-4" aria-hidden />
        <span className="blob bg-purple bottom-10 left-10 h-3 w-3" aria-hidden />
        <span
          className="tri top-[20%] left-[6%]"
          style={{
            borderLeft: "9px solid transparent",
            borderRight: "9px solid transparent",
            borderBottom: "16px solid var(--color-orange)",
          }}
          aria-hidden
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-display text-[11px] font-bold tracking-[3px] text-yellow uppercase">
              Product management by day · shipping by night
            </p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">{passionProject.name}</h3>
            <p className="mt-1.5 text-base font-semibold text-white/90">{passionProject.tagline}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85">{passionProject.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {passionProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/20 px-3.5 py-1.5 font-display text-xs font-bold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={passionProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="grad-orange flex items-center justify-between gap-2 rounded-full px-6 py-4 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(244,121,32,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Play it live
              <ArrowUpRight className="w-4 shrink-0" />
            </a>
            <a
              href={passionProject.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-2 rounded-full border-[3px] border-white/70 px-6 py-3.5 font-display text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              View on GitHub
              <ArrowUpRight className="w-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Off the clock — standalone, not part of any project */}
      <div className="card relative overflow-hidden p-5">
        <span className="blob bg-orange -top-8 -right-8 h-20 w-20 opacity-90" aria-hidden />
        <span className="blob bg-green top-16 right-5 h-3 w-3" aria-hidden />
        <p className="relative font-display text-[11px] font-bold tracking-[3px] text-blue uppercase">
          Off the clock
        </p>
        <img
          src={`${import.meta.env.BASE_URL}batman-photo.jpg`}
          alt="Batman Odulio in front of the Golden Gate Bridge"
          className="relative mt-3 w-full rotate-1 rounded-[16px] object-cover shadow-[0_5px_0_rgba(34,34,59,0.12)]"
        />
        <p className="relative mt-3 text-[13px] leading-relaxed text-soft">
          Exploring the world between shipping things 🌉
        </p>
      </div>
      </div>
    </PanelPage>
  );
}
