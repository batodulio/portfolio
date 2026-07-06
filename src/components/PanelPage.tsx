import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";

interface PanelPageProps {
  label: string;
  title: ReactNode;
  children: ReactNode;
}

/** Shared viewport-fit section layout: fixed header, internally scrolling panel. */
export function PanelPage({ label, title, children }: PanelPageProps) {
  return (
    <PageTransition>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-5 sm:px-8">
        <div className="shrink-0 pt-1 pb-4">
          <p className="font-display text-[11px] font-bold tracking-[3px] text-blue uppercase">{label}</p>
          <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
        </div>
        <div className="panel-scroll min-h-0 flex-1 pb-4">{children}</div>
      </div>
    </PageTransition>
  );
}
