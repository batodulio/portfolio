export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="orb orb-a -top-32 -left-32 h-[34rem] w-[34rem] bg-brand/25" />
      <div className="orb orb-b top-1/3 -right-40 h-[30rem] w-[30rem] bg-royal/20" />
      <div className="orb orb-c -bottom-48 left-1/4 h-[28rem] w-[28rem] bg-ember/10" />
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(5,5,8,0.9),transparent)]" />
    </div>
  );
}
