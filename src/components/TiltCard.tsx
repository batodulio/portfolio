import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/** Chunky brand card that tilts in 3D toward the cursor. */
export function TiltCard({ children, className = "" }: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !ref.current || e.pointerType !== "mouse") return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
    ref.current.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    ref.current.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="card group relative h-full overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(360px circle at var(--gx,50%) var(--gy,50%), var(--glare), transparent 45%)",
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}
