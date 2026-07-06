import { PanelPage } from "../components/PanelPage";
import { TiltCard } from "../components/TiltCard";
import { topSkills, skillGroups } from "../data/profile";

const GROUP_ACCENTS = ["var(--color-blue)", "var(--color-green)", "var(--color-orange)", "var(--color-purple)"];

export default function Skills() {
  return (
    <PanelPage
      label="04 — Skills"
      title={
        <>
          Skills & <span className="text-grad-warm">technical range</span>.
        </>
      }
    >
      <div className="space-y-5">
        <div className="card flex flex-wrap items-center gap-2.5 p-4 sm:p-5">
          <span className="font-display text-[11px] font-bold tracking-[3px] text-orange uppercase">Top skills</span>
          {topSkills.map((skill) => (
            <span key={skill} className="grad-orange rounded-full px-4 py-1.5 font-display text-xs font-bold text-white">
              {skill}
            </span>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <TiltCard key={group.title} className="h-full">
              <div className="relative overflow-hidden p-5" style={{ borderTop: `6px solid ${GROUP_ACCENTS[i % 4]}` }}>
                <span
                  className="blob -right-8 -bottom-8 h-16 w-16 opacity-90"
                  style={{ background: GROUP_ACCENTS[i % 4] }}
                  aria-hidden
                />
                <h3 className="font-display text-base font-bold text-ink">{group.title}</h3>
                <div className="relative mt-3 flex max-w-[94%] flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-line px-3 py-1 text-xs font-medium text-ink transition-colors hover:bg-blue hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </PanelPage>
  );
}
