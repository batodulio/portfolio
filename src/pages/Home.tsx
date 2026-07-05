import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { SectionHeading } from "../components/SectionHeading";
import { TiltCard } from "../components/TiltCard";
import { Reveal } from "../components/Reveal";
import { Magnetic } from "../components/Magnetic";
import { BatIcon } from "../components/BatIcon";
import { ArrowUpRight, Linkedin } from "../components/Icons";
import { profile, pillars, techMarquee } from "../data/profile";

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Home() {
  return (
    <PageTransition>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-[82vh] items-center px-5 pt-28 pb-10 sm:px-6">
        <motion.div variants={heroStagger} initial="hidden" animate="show" className="mx-auto w-full max-w-6xl">
          <motion.div variants={heroItem} className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-mist-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              {profile.role}
            </span>
            <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-mist-dim">
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-display text-5xl leading-[1.02] font-bold tracking-tight text-mist sm:text-7xl lg:text-8xl"
          >
            Batman
            <br />
            <span className="text-gradient">Odulio</span>
          </motion.h1>

          <motion.p variants={heroItem} className="mt-6 max-w-2xl text-base leading-relaxed text-mist-dim sm:text-xl">
            IT Product Manager, Technology Leader, and Software Builder — integrating{" "}
            <span className="text-mist">people, process, and technology</span> to deliver measurable operational
            excellence across global supply chains.
          </motion.p>

          <motion.p variants={heroItem} className="mt-4 flex items-center gap-2 text-sm text-brand-soft/90 italic">
            <BatIcon className="w-6" />
            {profile.batLine}
          </motion.p>

          <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Magnetic>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-royal px-7 py-3.5 font-display text-sm font-semibold text-white shadow-[0_8px_32px_rgba(109,40,217,0.35)] transition-shadow hover:shadow-[0_8px_44px_rgba(109,40,217,0.55)]"
              >
                Explore the work
                <ArrowUpRight className="w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <button
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold text-mist transition-colors hover:border-brand-soft/40"
              >
                Get in touch
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-mist-dim/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v16m0 0-5-5m5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>

      {/* ---------- Pillars ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <SectionHeading kicker="What I bring" title="Three identities. One mission." subtitle={profile.summary} />
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.2em] text-ember uppercase">{pillar.kicker}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-mist sm:text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-dim">{pillar.body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Tech marquee ---------- */}
      <section className="py-6">
        <div className="marquee">
          <div className="marquee-track">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm whitespace-nowrap text-mist-dim"
              >
                <span className="h-1 w-1 rounded-full bg-brand-soft" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6">
        <Reveal>
          <div className="glass-deep relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(500px_circle_at_80%_-20%,rgba(109,40,217,0.22),transparent)]"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-ember uppercase">
                  <BatIcon className="w-6 text-ember/80" />
                  Contact
                </p>
                <h2 className="font-display text-3xl font-bold text-mist sm:text-4xl">
                  Send the <span className="text-gradient">signal</span>.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-dim sm:text-base">
                  Open to conversations about digital products, cloud platforms, and building things that scale.
                  Working with global teams across time zones is the day job.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Magnetic>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-brand to-royal px-6 py-4 font-display text-sm font-semibold text-white shadow-[0_8px_32px_rgba(109,40,217,0.3)]"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin className="w-4 shrink-0" />
                      Connect on LinkedIn
                    </span>
                    <ArrowUpRight className="w-4 shrink-0" />
                  </a>
                </Magnetic>
                <p className="text-center text-xs text-mist-dim">linkedin.com/in/batmanodulio</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
