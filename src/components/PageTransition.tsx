import type { ReactNode } from "react";
import { motion } from "framer-motion";

/** Shared page wrapper: fade/slide transition inside the fixed-viewport shell. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 h-full"
    >
      {children}
    </motion.main>
  );
}
