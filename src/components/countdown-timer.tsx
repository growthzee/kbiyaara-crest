"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date to 60 days from now
    const launch = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      let diff = Math.max(0, launch - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      const seconds = Math.floor(diff / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-4 gap-3 sm:gap-4 animate-fade-up delay-450">
      <div className="rounded-xl border border-[color:var(--gold)]/30 bg-white/0 px-2 py-3 sm:px-3 sm:py-4">
        <div className="text-[26px] sm:text-[34px] font-semibold leading-none tracking-tight text-gold font-cinzel">
          {pad(timeLeft.days)}
        </div>
        <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[color:var(--gold)]/70">
          Days
        </div>
      </div>
      <div className="rounded-xl border border-[color:var(--gold)]/30 bg-white/0 px-2 py-3 sm:px-3 sm:py-4">
        <div className="text-[26px] sm:text-[34px] font-semibold leading-none tracking-tight text-gold font-cinzel">
          {pad(timeLeft.hours)}
        </div>
        <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[color:var(--gold)]/70">
          Hours
        </div>
      </div>
      <div className="rounded-xl border border-[color:var(--gold)]/30 bg-white/0 px-2 py-3 sm:px-3 sm:py-4">
        <div className="text-[26px] sm:text-[34px] font-semibold leading-none tracking-tight text-gold font-cinzel">
          {pad(timeLeft.minutes)}
        </div>
        <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[color:var(--gold)]/70">
          Minutes
        </div>
      </div>
      <div className="rounded-xl border border-[color:var(--gold)]/30 bg-white/0 px-2 py-3 sm:px-3 sm:py-4">
        <div className="text-[26px] sm:text-[34px] font-semibold leading-none tracking-tight text-gold font-cinzel">
          {pad(timeLeft.seconds)}
        </div>
        <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[color:var(--gold)]/70">
          Seconds
        </div>
      </div>
    </div>
  );
}
