import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}

/**
 * A compact anchor section for the single-page layout.
 * scroll-mt keeps the heading clear of the sticky nav when jumped to.
 */
export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5">
            <p className="font-display text-[11px] font-bold tracking-[3px] text-blue uppercase">{label}</p>
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{title}</h2>
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
