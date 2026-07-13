import { Section } from "../components/Section";
import { TiltCard } from "../components/TiltCard";
import { ArrowUpRight, Award, Mic } from "../components/Icons";
import { certifications, ceoAward, honors, education, speaking } from "../data/profile";

const CERT_COLORS = ["text-blue", "text-green", "text-orange"];

export default function Credentials() {
  return (
    <Section
      id="credentials"
      label="02 — Credentials"
      title={
        <>
          Certifications, honors & <span className="text-grad-warm">education</span>.
        </>
      }
    >
      <div className="space-y-5">
        {/* Celebration moment — P&G CEO Award */}
        <div className="grad-celebrate relative overflow-hidden rounded-[20px] border border-white/15 p-6 shadow-[0_14px_36px_rgba(26,86,196,0.28)] sm:p-7">
          <span className="blob blob-soft bg-white/15 -top-8 right-8 h-24 w-24" aria-hidden />
          <span className="blob blob-soft bg-white/10 -right-6 -bottom-10 h-28 w-28" aria-hidden />
          <p className="relative font-display text-[11px] font-bold tracking-[3px] text-white/80 uppercase">
            Featured recognition
          </p>
          <h3 className="relative mt-1 max-w-md font-display text-2xl font-extrabold text-white sm:text-3xl">
            {ceoAward.title}
          </h3>
          <p className="relative mt-1.5 max-w-lg text-sm text-white/85">{ceoAward.detail}</p>
        </div>

        <div>
          <p className="mb-3 font-display text-[11px] font-bold tracking-[3px] text-blue uppercase">Certifications</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <TiltCard key={cert} className="h-full">
                <div className="flex h-full items-center gap-3 p-4">
                  <span className={`shrink-0 ${CERT_COLORS[i % CERT_COLORS.length]}`}>
                    <Award className="w-6" />
                  </span>
                  <p className="text-[13px] font-semibold text-ink">{cert}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <TiltCard className="h-full">
            <div
              className="relative h-full overflow-hidden p-5 sm:p-6"
              style={{ borderTop: "6px solid var(--color-orange)" }}
            >
              <span className="blob bg-orange -right-8 -bottom-8 h-16 w-16 opacity-90" aria-hidden />
              <p className="font-display text-[11px] font-bold tracking-[3px] text-orange uppercase">
                Honors & Awards
              </p>
              <ul className="relative mt-3 space-y-2.5">
                {honors.map((honor, i) => (
                  <li key={honor} className="flex items-center gap-3 text-[13px] font-semibold text-ink">
                    <span className={CERT_COLORS[i % CERT_COLORS.length]}>
                      <Award className="w-5" />
                    </span>
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
          <TiltCard className="h-full">
            <div
              className="relative h-full overflow-hidden p-5 sm:p-6"
              style={{ borderTop: "6px solid var(--color-green)" }}
            >
              <span className="blob bg-green -right-8 -bottom-8 h-16 w-16 opacity-90" aria-hidden />
              <p className="font-display text-[11px] font-bold tracking-[3px] text-green uppercase">Education</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">{education.school}</h3>
              <p className="mt-0.5 text-sm font-medium text-soft">
                {education.degree} · {education.period}
              </p>
              <ul className="relative mt-3 space-y-2">
                {education.notes.map((note) => (
                  <li key={note} className="flex gap-2.5 text-[13px] text-soft">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </div>

        <div>
          <p className="mb-3 font-display text-[11px] font-bold tracking-[3px] text-blue uppercase">
            Speaking engagements
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {speaking.map((talk) => (
              <TiltCard key={talk.url} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
                  <span className="blob blob-soft bg-blue -top-10 -right-10 h-28 w-28 opacity-30" aria-hidden />
                  <div className="relative flex items-center gap-3">
                    <span className="grad-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white">
                      <Mic className="w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">{talk.role}</h3>
                      <p className="text-xs font-medium text-soft">{talk.event}</p>
                    </div>
                  </div>
                  <p className="relative mt-3 flex-1 text-[13px] leading-relaxed text-soft">{talk.detail}</p>
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-3 inline-flex w-fit items-center gap-1.5 font-display text-xs font-bold text-blue transition-colors hover:text-orange"
                  >
                    View on LinkedIn
                    <ArrowUpRight className="w-3.5" />
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
