'use client';

import { PointerEvent, useEffect, useRef, useState } from 'react';

const programmingLanguages = [
  { name: 'HTML', shortName: 'HTML', transform: 'rotateY(0deg) rotateX(0deg) translateZ(128px)' },
  { name: 'CSS', shortName: 'CSS', transform: 'rotateY(45deg) rotateX(22deg) translateZ(128px)' },
  { name: 'Java', shortName: 'Java', transform: 'rotateY(90deg) rotateX(-18deg) translateZ(128px)' },
  { name: 'JavaScript', shortName: 'JS', transform: 'rotateY(135deg) rotateX(18deg) translateZ(128px)' },
  { name: 'C', shortName: 'C', transform: 'rotateY(180deg) rotateX(-24deg) translateZ(128px)' },
  { name: 'C++', shortName: 'C++', transform: 'rotateY(225deg) rotateX(20deg) translateZ(128px)' },
  { name: 'React', shortName: 'React', transform: 'rotateY(270deg) rotateX(-16deg) translateZ(128px)' },
  { name: 'SQL', shortName: 'SQL', transform: 'rotateY(315deg) rotateX(16deg) translateZ(128px)' },
  { name: 'MongoDB', shortName: 'Mongo', transform: 'rotateY(30deg) rotateX(54deg) translateZ(112px)' },
  { name: 'Git', shortName: 'Git', transform: 'rotateY(150deg) rotateX(-54deg) translateZ(112px)' },
  { name: 'API', shortName: 'API', transform: 'rotateY(250deg) rotateX(48deg) translateZ(112px)' },
  { name: 'UI', shortName: 'UI', transform: 'rotateY(330deg) rotateX(-48deg) translateZ(112px)' },
];

type Rotation = {
  x: number;
  y: number;
};

type DragState = {
  pointerId: number;
  lastX: number;
  lastY: number;
  lastTime: number;
};

export default function ProgrammingGlobe() {
  const [rotation, setRotation] = useState<Rotation>({ x: -12, y: 0 });
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const velocityRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const cancelMotion = () => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  useEffect(() => {
    return cancelMotion;
  }, []);

  const scheduleAutoRotate = () => {
    resumeTimerRef.current = window.setTimeout(() => {
      setIsAutoRotating(true);
      resumeTimerRef.current = null;
    }, 2000);
  };

  const startMomentum = () => {
    let velocityX = velocityRef.current.x;
    let velocityY = velocityRef.current.y;

    const animate = () => {
      velocityX *= 0.94;
      velocityY *= 0.94;

      setRotation((current) => ({
        x: Math.max(-70, Math.min(70, current.x + velocityX)),
        y: current.y + velocityY,
      }));

      if (Math.abs(velocityX) > 0.08 || Math.abs(velocityY) > 0.08) {
        frameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      frameRef.current = null;
      scheduleAutoRotate();
    };

    frameRef.current = window.requestAnimationFrame(animate);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    cancelMotion();
    setIsAutoRotating(false);
    velocityRef.current = { x: 0, y: 0 };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragState({
      pointerId: event.pointerId,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: performance.now(),
    });
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    const now = performance.now();
    const deltaX = event.clientX - dragState.lastX;
    const deltaY = event.clientY - dragState.lastY;
    const elapsed = Math.max(16, now - dragState.lastTime);
    const rotateX = -deltaY * 0.45;
    const rotateY = deltaX * 0.55;

    velocityRef.current = {
      x: (rotateX / elapsed) * 16,
      y: (rotateY / elapsed) * 16,
    };

    setRotation((current) => ({
      x: Math.max(-70, Math.min(70, current.x + rotateX)),
      y: current.y + rotateY,
    }));

    setDragState({
      pointerId: event.pointerId,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: now,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragState?.pointerId !== event.pointerId) {
      return;
    }

    event.currentTarget.releasePointerCapture(event.pointerId);
    setDragState(null);
    startMomentum();
  };

  return (
    <div className="relative rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.16),rgba(15,23,42,0.86)_58%,rgba(2,6,23,0.96)_100%)] p-6 shadow-[0_0_60px_rgba(34,211,238,0.1)]">
      <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/20 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
        Drag to rotate
      </div>
      <div
        className="mx-auto flex min-h-[340px] max-w-[460px] cursor-grab touch-none select-none items-center justify-center [perspective:950px] active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        aria-label="Interactive programming language globe"
        role="img"
      >
        <div
          className={`relative h-64 w-64 [transform-style:preserve-3d] ${
            isAutoRotating ? 'programming-globe' : 'programming-globe-manual'
          }`}
          style={
            isAutoRotating
              ? undefined
              : {
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }
          }
        >
          <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
          <div className="absolute inset-5 rounded-full border border-white/10" />
          <div className="programming-globe-ring absolute inset-10 rounded-full border border-cyan-300/15" />
          <div className="programming-globe-ring-alt absolute inset-10 rounded-full border border-white/10" />

          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-slate-950/80 shadow-[0_0_34px_rgba(34,211,238,0.18)]" />

          {programmingLanguages.map((language) => (
            <div
              key={language.name}
              className="absolute left-1/2 top-1/2 -ml-10 -mt-5 flex h-10 w-20 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950/90 text-xs font-bold text-slate-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] [backface-visibility:hidden]"
              style={{ transform: language.transform }}
              aria-label={language.name}
            >
              {language.shortName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
