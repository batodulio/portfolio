import { Section } from "../components/Section";
import { TiltCard } from "../components/TiltCard";
import { publications } from "../data/profile";

const TAG_COLORS = ["bg-purple", "bg-sky", "bg-green", "bg-orange"];

export default function Research() {
  return (
    <Section
      id="research"
      label="05 — Research"
      title={
        <>
          Published <span className="text-grad-warm">work</span>.
        </>
      }
    >
      <p className="mb-4 max-w-2xl text-sm text-soft">
        Deep-learning research on accent recognition for Philippine languages, and a web platform for medicinal
        plants.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {publications.map((publication, i) => (
          <TiltCard key={publication.title} className="h-full">
            <div className="relative overflow-hidden p-5 sm:p-6">
              <span
                className={`blob -right-6 -bottom-6 h-14 w-14 opacity-90 ${TAG_COLORS[i % 4]}`}
                aria-hidden
              />
              <span
                className={`rounded-full px-3 py-1 font-display text-[10px] font-bold tracking-wide text-white uppercase ${TAG_COLORS[i % 4]}`}
              >
                {publication.tag}
              </span>
              <p className="relative mt-3 max-w-[92%] text-sm leading-relaxed font-semibold text-ink">
                {publication.title}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
