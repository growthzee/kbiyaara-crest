"use client";

import type React from "react";

import { useState } from "react";
import { Bell } from "lucide-react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowThankYou(true);
      setEmail("");
    }
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-xl">
      <form
        className="flex w-full items-center gap-2 sm:gap-3"
        onSubmit={handleSubmit}
      >
        <div className="relative flex-1">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[color:var(--gold)]/35 bg-[rgba(10,35,32,.55)]/50 px-4 py-3 text-[15px] text-[color:var(--gold-soft)] placeholder:text-[color:var(--gold)]/45 outline-none ring-0 focus:border-[color:var(--gold)]/60 font-medium backdrop-blur-[2px]"
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 my-auto rounded-md bg-gold-grad px-1 opacity-30 w-[2px] animate-shimmer" />
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center gap-2 rounded-xl border border-[color:var(--gold)]/40 bg-[rgba(201,162,122,.08)] px-4 py-3 text-[15px] text-gold transition-all duration-300 hover:bg-[rgba(201,162,122,.14)] hover:border-[color:var(--gold)]/60 active:scale-[.98] group"
        >
          <Bell className="h-4 w-4" />
          <span className="font-medium">Notify Me</span>
          <span className="pointer-events-none absolute inset-0 rounded-xl bg-gold-grad opacity-0 transition-opacity duration-500 group-hover:opacity-20 animate-shimmer" />
        </button>
      </form>

      {showThankYou && (
        <p className="mt-3 text-[13px] text-[color:var(--gold)]/75">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}
    </div>
  );
}
