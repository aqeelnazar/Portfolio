'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const storageKey = 'portfolio-theme';

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('light', theme === 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = savedTheme ?? systemTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-theme-toggle
      className="relative inline-flex h-10 w-20 items-center rounded-full border border-white/10 bg-white/5 p-1 text-slate-200 transition hover:border-cyan-300/40"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span
        data-theme-toggle-thumb
        className={`absolute h-8 w-8 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.35)] transition-transform ${
          theme === 'light' ? 'translate-x-10' : 'translate-x-0'
        }`}
      />
      <span className="relative z-10 grid h-8 w-8 place-items-center">
        <svg
          aria-hidden="true"
          className={`h-4 w-4 transition ${theme === 'dark' ? 'text-slate-950' : 'text-slate-400'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z" />
        </svg>
      </span>
      <span className="relative z-10 grid h-8 w-8 place-items-center">
        <svg
          aria-hidden="true"
          className={`h-4 w-4 transition ${theme === 'light' ? 'text-slate-950' : 'text-slate-400'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </span>
    </button>
  );
}
