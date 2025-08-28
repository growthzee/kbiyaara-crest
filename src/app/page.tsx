import { MapPin, Instagram, Mail, ArrowRight } from "lucide-react";
import GrainCanvas from "@/components/grain-canvas";
import CountdownTimer from "@/components/countdown-timer";
import ParallaxEffects from "@/components/parallax-effects";
import EmailSignup from "@/components/email-signup";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--emerald)]">
      {/* Subtle texture layers */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 10%, rgba(255,255,255,.06), transparent 50%), radial-gradient(60% 60% at 50% 120%, rgba(0,0,0,.65), transparent 60%)",
        }}
      />

      {/* Animated grain canvas */}
      <GrainCanvas />

      {/* Corner botanicals */}
      <svg
        className="pointer-events-none absolute -left-8 -bottom-10 w-[42vw] max-w-[520px] opacity-60"
        viewBox="0 0 500 500"
        fill="none"
      >
        <g strokeWidth="1.5" className="stroke-gold">
          <path
            pathLength="1"
            className="animate-draw-stroke delay-400"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M40 420 C 120 320, 200 300, 380 280"
          />
          <path
            pathLength="1"
            className="animate-draw-stroke delay-600"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M120 470 C 200 360, 260 340, 420 320"
          />
          <path
            pathLength="1"
            className="animate-draw-stroke delay-800"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M70 450 C 150 360, 260 310, 350 300"
          />
          <path
            pathLength="1"
            className="animate-draw-stroke delay-1000"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M90 390 C 170 330, 250 290, 340 280"
          />
        </g>
      </svg>

      <svg
        className="pointer-events-none absolute -right-6 -top-8 w-[40vw] max-w-[500px] opacity-60 rotate-12"
        viewBox="0 0 500 500"
        fill="none"
      >
        <g strokeWidth="1.5" className="stroke-gold">
          <path
            pathLength="1"
            className="animate-draw-stroke delay-400"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M60 100 C 180 160, 260 190, 430 220"
          />
          <path
            pathLength="1"
            className="animate-draw-stroke delay-600"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M80 60 C 210 140, 300 170, 460 210"
          />
          <path
            pathLength="1"
            className="animate-draw-stroke delay-800"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            d="M100 130 C 210 180, 300 200, 420 240"
          />
        </g>
      </svg>

      {/* Soft gold vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, rgba(201,162,122,.12), rgba(201,162,122,0) 60%)",
        }}
      />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Crest */}
          <div className="mx-auto mb-8 inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/30 bg-white/0 p-5 backdrop-blur-[1px] animate-float-slow">
            <svg
              width="124"
              height="84"
              viewBox="0 0 620 420"
              className="fill-none"
            >
              {/* Crown */}
              <g
                className="stroke-gold"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M150 110 L210 170 L310 90 L410 170 L470 110 L430 230 L190 230 Z"
                  fill="none"
                />
                <circle
                  cx="310"
                  cy="70"
                  r="10"
                  fill="currentColor"
                  className="fill-gold"
                />
              </g>
              {/* Flourish */}
              <g className="fill-gold animate-glow">
                <path d="M310 210c-35 0-60 25-60 60 0 15 6 28 16 38-46-8-80-46-80-92 0-35 21-66 52-80-19 2-36 9-50 20 11-35 43-61 81-63-16-10-35-16-56-16 27-22 62-35 97-35s70 13 97 35c-21 0-40 6-56 16 38 2 70 28 81 63-14-11-31-18-50-20 31 14 52 45 52 80 0 46-34 84-80 92 10-10 16-23 16-38 0-35-25-60-60-60Z" />
                <path d="M220 320c-20-2-52-24-65-44 11 3 30 3 44-3-36-16-54-52-54-80 18 20 47 39 90 44-22 5-37 33-15 83Z" />
                <path d="M400 320c20-2 52-24 65-44-11 3-30 3-44-3 36-16 54-52 54-80-18 20-47 39-90 44 22 5 37 33 15 83Z" />
              </g>
            </svg>
          </div>

          {/* Brand */}
          <h1 className="mx-auto max-w-3xl text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-tight text-gold font-cinzel font-semibold animate-fade-up delay-100">
            KBIYARA CREST
          </h1>

          <p className="mt-2 text-[15px] sm:text-[16px] uppercase tracking-[0.28em] text-[color:var(--gold)]/90 font-cinzel font-medium animate-fade-up delay-200">
            Café & Resort
          </p>

          <p className="mt-1 text-[13px] sm:text-[14px] uppercase tracking-[0.35em] text-[color:var(--gold)]/75 font-medium animate-fade-up delay-300">
            Celebration • Stay • Savor
          </p>

          {/* Launching Soon */}
          <div className="mt-8 inline-block rounded-full border border-[color:var(--gold)]/30 px-6 py-2">
            <span className="bg-gold-grad bg-clip-text text-transparent text-[26px] sm:text-[32px] md:text-[40px] tracking-tight font-cinzel font-semibold animate-shimmer animate-fade-up delay-350">
              Launching Soon
            </span>
          </div>

          {/* Countdown */}
          <CountdownTimer />

          {/* Email Signup */}
          <EmailSignup />

          {/* Bottom Info */}
          <div className="mx-auto mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 animate-fade-up delay-550">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[14px] text-[color:var(--gold)]/80 hover:text-gold transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Location</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="hidden h-4 w-px bg-[color:var(--gold)]/25 sm:inline-block" />
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[14px] text-[color:var(--gold)]/80 hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-medium">Instagram</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="hidden h-4 w-px bg-[color:var(--gold)]/25 sm:inline-block" />
            <a
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-2 text-[14px] text-[color:var(--gold)]/80 hover:text-gold transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="font-medium">Contact</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/30 to-transparent" />

      {/* Parallax Effects */}
      <ParallaxEffects />
    </main>
  );
}
