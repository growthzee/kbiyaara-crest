import {
  Crown,
  Leaf,
  CalendarRange,
  BedDouble,
  Star,
  Calendar,
  CalendarClock,
  Users,
  Search,
  ChevronsDown,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1974&auto=format&fit=crop"
          alt="Luxury oceanfront resort"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Luxury Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10"></div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 500px at 20% 10%, rgba(234,179,8,0.12), transparent), radial-gradient(900px 500px at 85% 80%, rgba(16,185,129,0.10), transparent)",
        }}
      ></div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-28 sm:pt-36 pb-8">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-medium text-white ring-1 ring-white/20">
              <Crown className="w-3.5 h-3.5 text-amber-300" />
              Five‑Star Seaside Sanctuary
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-medium text-white ring-1 ring-white/20">
              <Leaf className="w-3.5 h-3.5 text-emerald-300" />
              Sustainably minded
            </span>
          </div>

          {/* Headline */}
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-emerald-100/90">
              Your private sanctuary on the edge of the ocean
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80">
              Wake to whispering tides, dine under starlit palms, and unwind in
              design‑forward suites crafted for calm.
            </p>
          </div>

          {/* Accents and CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#book"
              className="relative inline-flex justify-center items-center gap-2 rounded-md bg-gradient-to-br from-emerald-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-900/20 hover:-translate-y-0.5 hover:shadow-2xl hover:to-teal-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <span className="absolute -inset-px rounded-md ring-1 ring-emerald-300/20"></span>
              <CalendarRange className="w-5 h-5" />
              Plan Your Stay
            </a>
            <a
              href="#rooms"
              className="inline-flex justify-center items-center gap-2 rounded-md border border-white/20 bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              <BedDouble className="w-5 h-5" />
              Explore Suites
            </a>
            <div className="hidden sm:flex items-center gap-2 text-white/80 text-sm sm:ml-4">
              <Star className="w-4 h-4 text-amber-300" />
              <Star className="w-4 h-4 text-amber-300" />
              <Star className="w-4 h-4 text-amber-300" />
              <Star className="w-4 h-4 text-amber-300" />
              <Star className="w-4 h-4 text-amber-300" />
              <span className="ml-1">Guest‑rated excellence</span>
            </div>
          </div>

          {/* Booking Quick Form */}
          <div id="book" className="mt-10">
            <div className="rounded-xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 shadow-2xl shadow-black/20">
              <form className="grid grid-cols-1 md:grid-cols-5 gap-3 p-4">
                <div className="col-span-1 md:col-span-2">
                  <label className="text-sm font-medium text-white/90">
                    Check-in
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-300/60 transition">
                    <Calendar className="w-4 h-4 text-white/70" />
                    <input
                      type="date"
                      className="w-full text-sm outline-none placeholder:text-white/60 bg-transparent text-white"
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="text-sm font-medium text-white/90">
                    Check-out
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-300/60 transition">
                    <CalendarClock className="w-4 h-4 text-white/70" />
                    <input
                      type="date"
                      className="w-full text-sm outline-none placeholder:text-white/60 bg-transparent text-white"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="text-sm font-medium text-white/90">
                    Guests
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-300/60 transition">
                    <Users className="w-4 h-4 text-white/70" />
                    <input
                      type="number"
                      min="1"
                      defaultValue="2"
                      className="w-full text-sm outline-none bg-transparent text-white"
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-5">
                  <button
                    type="submit"
                    className="relative w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white hover:to-teal-500 hover:shadow-emerald-900/30 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  >
                    <span className="absolute -inset-px rounded-md ring-1 ring-emerald-300/20"></span>
                    <Search className="w-5 h-5" />
                    Check Availability
                  </button>
                </div>
              </form>
            </div>
            <p className="mt-3 text-xs text-white/70">
              No prepayment needed. Free cancellation within 48 hours of
              booking.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur hover:bg-white/15 transition">
          <ChevronsDown className="w-4 h-4 text-white/80" />
          Scroll
        </div>
      </div>
    </section>
  );
}
