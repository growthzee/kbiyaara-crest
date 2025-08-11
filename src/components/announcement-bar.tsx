import { Sparkles, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative z-40">
      <div className="w-full bg-white/60 backdrop-blur-xl border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-3 text-sm text-emerald-900">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <p className="font-medium">
            Early Summer Offer: Save 20% on stays of 4+ nights
          </p>
          <a
            href="#book"
            className="ml-2 inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors"
          >
            Book now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
