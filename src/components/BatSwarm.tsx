import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BatIcon } from "./BatIcon";

const FLOCK_COLORS = ["text-blue", "text-sky", "text-orange", "text-green", "text-purple", "text-yellow"];

interface Bat {
  id: number;
  startX: number;
  startY: number;
  drift: number;
  size: number;
  delay: number;
  color: string;
}

/** A brief confetti-colored flutter of bats across the screen on page transitions. */
export function BatSwarm({ trigger }: { trigger: string }) {
  const reduce = useReducedMotion();
  const firstRender = useRef(true);
  const [bats, setBats] = useState<Bat[] | null>(null);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (reduce) return;
    setBats(
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        startX: 8 + Math.random() * 40,
        startY: 60 + Math.random() * 30,
        drift: 30 + Math.random() * 40,
        size: 14 + Math.random() * 14,
        delay: i * 0.06,
        color: FLOCK_COLORS[i % FLOCK_COLORS.length],
      })),
    );
    const timer = setTimeout(() => setBats(null), 1500);
    return () => clearTimeout(timer);
  }, [trigger, reduce]);

  if (!bats) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden>
      {bats.map((bat) => (
        <motion.div
          key={bat.id}
          className={`absolute ${bat.color}`}
          style={{ left: `${bat.startX}%`, top: `${bat.startY}%` }}
          initial={{ opacity: 0, x: 0, y: 0, rotate: -8 }}
          animate={{
            opacity: [0, 0.95, 0.95, 0],
            x: [0, bat.drift * 4, bat.drift * 9],
            y: [0, -bat.drift * 5, -bat.drift * 11],
            rotate: [-8, 6, -4],
          }}
          transition={{ duration: 1.25, delay: bat.delay, ease: "easeOut" }}
        >
          <motion.div
            animate={{ scaleY: [1, 0.55, 1] }}
            transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: bat.size }}
          >
            <BatIcon className="w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
