import { Reveal } from "./Reveal";
import { BatIcon } from "./BatIcon";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-ember uppercase">
        <BatIcon className="w-5 text-ember/80" />
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-mist-dim sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
