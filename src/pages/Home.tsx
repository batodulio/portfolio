import { motion } from "framer-motion";
import { TiltCard } from "../components/TiltCard";
import { Magnetic } from "../components/Magnetic";
import { BatIcon } from "../components/BatIcon";
import { ArrowUpRight, Linkedin } from "../components/Icons";
import { profile, pillars, techMarquee } from "../data/profile";

const PILLAR_ACCENTS = ["var(--color-blue)", "var(--color-green)", "var(--color-orange)"];
const TAG_STYLES = [
  "bg-blue text-white",
  "bg-green text-white",
  "bg-orange text-white",
  "bg-sky text-white",
  "bg-purple text-white",
  "bg-yellow text-[#22223B]",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Home() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pt-6 sm:px-8 lg:min-h-[calc(100dvh-5.5rem)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid flex-1 content-center gap-8 py-4 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-10"
        >
          {/* ---------- Intro ---------- */}
          <div className="relative">
            <motion.div variants={item} className="mb-4 flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}batman-photo-formal.jpg`}
                  alt="Portrait of Batman Odulio"
                  className="h-20 w-20 rounded-full border-4 border-blue object-cover shadow-[0_5px_0_rgba(34,34,59,0.15)] sm:h-24 sm:w-24"
                />
                <span className="blob bg-yellow -top-1 -right-1 h-4 w-4" aria-hidden />
                <span className="blob bg-green -bottom-1 left-1 h-3 w-3" aria-hidden />
              </div>
              <p className="max-w-56 font-display text-[11px] font-bold tracking-[3px] text-blue uppercase sm:max-w-none">
                IT Product Manager · Technology Leader · Software Builder
              </p>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl leading-[1.05] font-extrabold text-ink sm:text-6xl xl:text-7xl"
            >
              Batman
              <br />
              <span className="text-grad">Odulio</span>
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-xl text-sm leading-relaxed text-soft sm:text-base">
              Integrating <strong className="font-semibold text-ink">people, process, and technology</strong> to
              deliver measurable operational excellence across global supply chains — from {profile.location}.
            </motion.p>

            <motion.p variants={item} className="mt-3 flex items-center gap-2 text-sm font-medium text-purple italic">
              <BatIcon className="w-6" />
              {profile.batLine}
            </motion.p>

            <motion.div variants={item} className="relative mt-7 flex flex-wrap items-center gap-3">
              {/* confetti dots near CTAs, per the brand guide */}
              <span className="blob bg-yellow -top-5 left-36 h-3 w-3" aria-hidden />
              <span className="blob bg-green -bottom-4 left-16 h-2.5 w-2.5" aria-hidden />
              <Magnetic>
                <a
                  href="#experience"
                  className="grad-blue group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(26,86,196,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  Explore the work
                  <ArrowUpRight className="w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="grad-orange inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold text-white shadow-[0_8px_24px_rgba(244,121,32,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4" />
                  Connect on LinkedIn
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* ---------- Three identities, one mission ---------- */}
          <div className="flex flex-col gap-3.5">
            <motion.p variants={item} className="font-display text-[11px] font-bold tracking-[3px] text-soft uppercase">
              Three identities. One mission.
            </motion.p>
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} variants={item}>
                <TiltCard>
                  <div className="relative overflow-hidden p-5" style={{ borderTop: `6px solid ${PILLAR_ACCENTS[i]}` }}>
                    <span
                      className="blob -right-8 -bottom-8 h-20 w-20 opacity-90"
                      style={{ background: PILLAR_ACCENTS[i] }}
                      aria-hidden
                    />
                    <p
                      className="font-display text-[10px] font-bold tracking-[2px] uppercase"
                      style={{ color: PILLAR_ACCENTS[i] }}
                    >
                      {pillar.kicker}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">{pillar.title}</h3>
                    <p className="relative mt-1.5 max-w-[92%] text-[13px] leading-relaxed text-soft">{pillar.body}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Tech marquee ---------- */}
        <div className="shrink-0 pb-6">
          <div className="marquee">
            <div className="marquee-track py-1">
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className={`inline-flex items-center rounded-full px-4 py-1.5 font-display text-xs font-bold whitespace-nowrap ${TAG_STYLES[i % TAG_STYLES.length]}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
