import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { SectionHeading } from "../components/SectionHeading";
import { TiltCard } from "../components/TiltCard";
import { Reveal } from "../components/Reveal";
import { Magnetic } from "../components/Magnetic";
import { ArrowUpRight, Award, Chevron } from "../components/Icons";
import {
  experience,
  passionProject,
  topSkills,
  skillGroups,
  certifications,
  honors,
  publications,
  education,
  type Role,
} from "../data/profile";

function RoleCard({ role, defaultOpen = false }: { role: Role; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="glass overflow-hidden rounded-2xl transition-colors hover:border-brand-soft/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <div>
          <h4 className="font-display text-base font-semibold text-mist sm:text-lg">{role.title}</h4>
          <p className="mt-1.5 text-xs tracking-wide text-mist-dim">
            {role.period}
            {role.location ? ` · ${role.location}` : ""}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-brand-soft"
        >
          <Chevron className="w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 px-5 pb-5 sm:px-6 sm:pb-6">
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-mist-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 sm:px-6 sm:pt-32">
        {/* ---------- Intro ---------- */}
        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-mist sm:text-6xl">
            The <span className="text-gradient">work</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-mist-dim sm:text-lg">
            Experience, skills, research, and recognition — everything below is pulled straight from the record.
          </p>
        </Reveal>

        {/* ---------- Experience ---------- */}
        <section className="mt-16">
          <SectionHeading
            kicker="Experience"
            title="From engineer to global product owner"
            subtitle="Global supply chain and energy technology — plus the student leadership where it all started."
          />
          <div className="space-y-12">
            {experience.map((company, companyIndex) => (
              <Reveal key={company.name}>
                <div className="flex items-center gap-4">
                  <span className="glass-deep flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-bold text-brand-soft">
                    {company.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-mist sm:text-2xl">{company.name}</h3>
                    {company.tenure && <p className="text-xs tracking-wide text-mist-dim">{company.tenure}</p>}
                  </div>
                </div>
                <div className="mt-5 ml-5 space-y-4 border-l border-edge pl-6 sm:ml-6 sm:pl-8">
                  {company.roles.map((role, roleIndex) => (
                    <div key={role.title} className="relative">
                      <span className="absolute top-7 -left-[29px] h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand to-royal ring-4 ring-night sm:-left-[37px]" />
                      <RoleCard role={role} defaultOpen={companyIndex === 0 && roleIndex === 0} />
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Passion project ---------- */}
        <section className="mt-20">
          <SectionHeading
            kicker="Passion project"
            title="Built after hours"
            subtitle="Product management by day, shipping side projects by night."
          />
          <Reveal>
            <div className="glass-deep relative overflow-hidden rounded-3xl p-7 sm:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(500px_circle_at_15%_-30%,rgba(47,91,255,0.18),transparent)]"
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <h3 className="font-display text-2xl font-bold text-mist sm:text-3xl">{passionProject.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-soft">{passionProject.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist-dim sm:text-base">
                    {passionProject.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {passionProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-edge bg-veil px-3.5 py-1.5 text-xs text-mist-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Magnetic>
                    <a
                      href={passionProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-brand to-royal px-6 py-4 font-display text-sm font-semibold text-white shadow-[0_8px_32px_rgba(109,40,217,0.3)]"
                    >
                      Play it live
                      <ArrowUpRight className="w-4 shrink-0" />
                    </a>
                  </Magnetic>
                  <a
                    href={passionProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glass flex items-center justify-between gap-2 rounded-2xl px-6 py-4 text-sm font-medium text-mist transition-colors hover:border-brand-soft/40"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="mt-20">
          <SectionHeading kicker="Expertise" title="Skills & technical range" />
          <Reveal className="mb-6">
            <div className="glass-deep flex flex-wrap items-center gap-3 rounded-2xl p-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-ember uppercase">Top skills</span>
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-sm font-medium text-mist"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <TiltCard className="h-full">
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-lg font-bold text-mist">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-edge bg-veil px-3.5 py-1.5 text-xs text-mist-dim transition-colors hover:border-brand-soft/40 hover:text-mist"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Certifications ---------- */}
        <section className="mt-20">
          <SectionHeading kicker="Credentials" title="Certifications" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 0.05}>
                <TiltCard className="h-full">
                  <div className="flex h-full items-center gap-4 p-5 sm:p-6">
                    <span className="glass-deep flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-ember">
                      <Award className="w-5" />
                    </span>
                    <p className="text-sm font-medium text-mist">{cert}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Publications ---------- */}
        <section className="mt-20">
          <SectionHeading
            kicker="Research"
            title="Publications"
            subtitle="Deep-learning research on accent recognition for Philippine languages, and a web platform for medicinal plants."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {publications.map((publication, i) => (
              <Reveal key={publication.title} delay={i * 0.05}>
                <TiltCard className="h-full">
                  <div className="p-5 sm:p-6">
                    <span className="rounded-full border border-royal-soft/30 bg-royal/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-royal-soft uppercase">
                      {publication.tag}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed font-medium text-mist">{publication.title}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Education & Awards ---------- */}
        <section className="mt-20 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <TiltCard className="h-full">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.25em] text-ember uppercase">Education</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-mist">{education.school}</h3>
                <p className="mt-1 text-sm text-mist-dim">
                  {education.degree} · {education.period}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {education.notes.map((note) => (
                    <li key={note} className="flex gap-3 text-sm text-mist-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-soft" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard className="h-full">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.25em] text-ember uppercase">Honors & Awards</p>
                <ul className="mt-5 space-y-3.5">
                  {honors.map((honor) => (
                    <li key={honor} className="flex items-center gap-3 text-sm font-medium text-mist">
                      <span className="glass-deep flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ember">
                        <Award className="w-4" />
                      </span>
                      {honor}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}
