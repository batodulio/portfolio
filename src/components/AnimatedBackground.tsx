/** Full-opacity confetti blobs, dots, and triangles per the brand shape language. */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Corner-bleed blobs — softened so they glow through the glass */}
      <div className="blob blob-soft bob-a bg-sky -top-24 -left-20 h-72 w-72 opacity-70" />
      <div className="blob blob-soft bob-b bg-orange -right-28 -bottom-32 h-96 w-96 opacity-60" />
      <div className="blob blob-soft bob-b bg-purple top-[15%] right-[8%] h-52 w-52 opacity-45" />
      <div className="blob blob-soft bob-b bg-yellow top-[58%] -left-16 h-44 w-44 opacity-60" />
      {/* Scattered confetti dots */}
      <div className="blob bg-yellow top-16 right-36 h-4 w-4" />
      <div className="blob bg-green top-36 right-20 h-3 w-3" />
      <div className="blob bg-purple right-64 bottom-24 h-3.5 w-3.5" />
      <div className="blob bg-sky bottom-40 left-[45%] h-3 w-3" />
      {/* Triangles */}
      <div
        className="tri top-[30%] left-[8%]"
        style={{
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "18px solid var(--color-yellow)",
        }}
      />
      <div
        className="tri right-[18%] bottom-[18%]"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "14px solid var(--color-green)",
        }}
      />
    </div>
  );
}
