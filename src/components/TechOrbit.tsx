'use client';

const orbitItems = ['React', 'Java', 'SQL', 'UI', 'API', 'Git'];

export default function TechOrbit() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[32px] border border-cyan-300/15 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.22),rgba(15,23,42,0.72)_42%,rgba(2,6,23,0.96)_100%)] shadow-[0_0_80px_rgba(34,211,238,0.12)] [perspective:900px]">
      <div className="absolute inset-8 rounded-full border border-cyan-300/10" />
      <div className="absolute inset-16 rounded-full border border-emerald-300/10" />
      <div className="portfolio-orbit absolute h-56 w-56 rounded-full border border-cyan-300/25 [transform-style:preserve-3d]" />
      <div className="portfolio-orbit-slow absolute h-72 w-72 rounded-full border border-violet-300/20 [transform-style:preserve-3d]" />
      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-center text-sm font-semibold text-white shadow-[0_0_50px_rgba(34,211,238,0.18)]">
        Aqeel
        <br />
        Portfolio
      </div>
      {orbitItems.map((item, index) => (
        <span
          key={item}
          className="absolute z-20 rounded-full border border-cyan-300/25 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.16)]"
          style={{
            transform: `rotate(${index * 60}deg) translateX(135px) rotate(-${index * 60}deg)`,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
