import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelPage } from "../components/PanelPage";
import { Chevron } from "../components/Icons";
import { experience, type Role } from "../data/profile";

const COMPANY_COLORS = [
  "grad-blue",
  "bg-gradient-to-br from-sky to-blue",
  "bg-gradient-to-br from-purple to-blue",
];

function RoleCard({ role, defaultOpen = false }: { role: Role; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
      >
        <div>
          <h4 className="font-display text-sm font-bold text-ink sm:text-base">{role.title}</h4>
          <p className="mt-1 text-xs font-medium text-soft">
            {role.period}
            {role.location ? ` · ${role.location}` : ""}
          </p>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-blue">
          <Chevron className="w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 px-4 pb-4 sm:px-5 sm:pb-5">
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 40)} className="flex gap-3 text-[13px] leading-relaxed text-soft">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
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

export default function Experience() {
  return (
    <PanelPage
      label="01 — Experience"
      title={
        <>
          From engineer to <span className="text-grad-warm">product owner</span>.
        </>
      }
    >
      <div className="space-y-8">
        {experience.map((company, companyIndex) => (
          <div key={company.name}>
            <div className="mb-3 flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-extrabold text-white ${COMPANY_COLORS[companyIndex % COMPANY_COLORS.length]}`}
              >
                {company.name
                  .split(" ")
                  .filter((word) => /^[A-Za-z]/.test(word))
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink sm:text-xl">{company.name}</h3>
                {company.tenure && <p className="text-xs font-medium text-soft">{company.tenure}</p>}
              </div>
            </div>
            <div className="space-y-3 sm:ml-14">
              {company.roles.map((role, roleIndex) => (
                <RoleCard key={role.title} role={role} defaultOpen={companyIndex === 0 && roleIndex === 0} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PanelPage>
  );
}
