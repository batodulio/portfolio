import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { BatIcon } from "./BatIcon";

/**
 * Replaces the native cursor with a bat that glides with the pointer,
 * turning Energy Orange and growing over interactive elements.
 * Mounts only on fine-pointer devices without reduced motion.
 */
export function BatCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest("a, button, [role='button'], summary, label, select"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div className="pointer-events-none fixed top-0 left-0 z-[90]" style={{ x, y }} aria-hidden>
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: hovering ? 1.3 : 1, rotate: hovering ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={hovering ? "text-orange" : "text-blue"}
        >
          <BatIcon className="w-11 drop-shadow-[0_3px_0_rgba(34,34,59,0.15)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
