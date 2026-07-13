import { Section } from "../components/Section";
import { ArrowUpRight } from "../components/Icons";
import { passionProjects, type PassionProject } from "../data/profile";

function ProjectCard({ project }: { project: PassionProject }) {
  const grad = project.accent === "green" ? "grad-feature-green" : "grad-feature";
  return (
    <div
      className={`${grad} relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/20 p-6 shadow-[0_10px_30px_rgba(26,86,196,0.28)] sm:p-8`}
    >
      <span className="blob blob-soft bg-white/25 -top-14 -right-12 h-40 w-40" aria-hidden />

      <p className="relative font-display text-[11px] font-bold tracking-[3px] text-white/80 uppercase">
        Product management by day · shipping by night
      </p>
      <div className="relative mt-2 flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-blue bg-white shadow-[0_4px_0_rgba(28,34,51,0.18)]">
          <img
            src={`${import.meta.env.BASE_URL}${project.logo}`}
            alt={`${project.name} logo`}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{project.name}</h3>
      </div>
      <p className="relative mt-1.5 text-sm font-semibold text-white/90 sm:text-base">{project.tagline}</p>
      <p className="relative mt-3 flex-1 text-[13px] leading-relaxed text-white/85 sm:text-sm">{project.description}</p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full bg-white/20 px-3 py-1 font-display text-[11px] font-bold text-white">
            {tech}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="grad-orange inline-flex items-center gap-2 rounded-full px-5 py-3 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(236,107,30,0.38)] transition-transform hover:-translate-y-0.5"
        >
          {project.liveLabel}
          <ArrowUpRight className="w-4 shrink-0" />
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-white/70 px-5 py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            GitHub
            <ArrowUpRight className="w-4 shrink-0" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      label="03 — Passion projects"
      title={
        <>
          Built <span className="text-grad-warm">after hours</span>.
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {passionProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* Off the clock — a personal aside, kept slim so the section stays compact */}
      <div className="card relative mt-5 flex items-center gap-4 overflow-hidden p-4 sm:gap-6 sm:p-5">
        <span className="blob bg-orange -top-8 -right-8 h-20 w-20 opacity-90" aria-hidden />
        <img
          src={`${import.meta.env.BASE_URL}batman-photo.jpg`}
          alt="Batman Odulio in front of the Golden Gate Bridge"
          className="relative w-24 shrink-0 rotate-2 rounded-[14px] object-cover shadow-[0_4px_0_rgba(34,34,59,0.12)] sm:w-36"
        />
        <div className="relative">
          <p className="font-display text-[11px] font-bold tracking-[3px] text-blue uppercase">Off the clock</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-soft sm:text-sm">
            Exploring the world between shipping things 🌉
          </p>
        </div>
      </div>
    </Section>
  );
}
