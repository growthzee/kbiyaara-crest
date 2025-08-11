import {
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Compass,
  BedDouble,
  Sparkles,
  Utensils,
  ImageIcon,
  Calendar,
  TicketPercent,
  ConciergeBell,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-gray-200 shadow-[0_10px_30px_-12px_rgba(16,24,40,0.15)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
            {/* Brand */}
            <div>
              <a href="#home" className="inline-flex items-center gap-2 group">
                <div className="text-lg tracking-tight font-semibold text-gray-900 leading-none">
                  KBIYARA CREST
                </div>
              </a>
              <p className="mt-3 text-sm text-gray-600">
                Oceanfront suites, coastal dining, and curated experiences
                crafted for calm.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white text-gray-700 hover:text-emerald-700 hover:border-emerald-200 hover:-translate-y-0.5 transition"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white text-gray-700 hover:text-emerald-700 hover:border-emerald-200 hover:-translate-y-0.5 transition"
                >
                  <Twitter className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white text-gray-700 hover:text-emerald-700 hover:border-emerald-200 hover:-translate-y-0.5 transition"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#newsletter"
                  aria-label="Email"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white text-gray-700 hover:text-emerald-700 hover:border-emerald-200 hover:-translate-y-0.5 transition"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <div className="text-sm font-semibold text-gray-900 tracking-tight">
                Explore
              </div>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#resort"
                    className="group inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <Compass className="w-4 h-4 text-emerald-700" />
                    <span>Resort</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#rooms"
                    className="group inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <BedDouble className="w-4 h-4 text-emerald-700" />
                    <span>Suites</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="group inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Experiences</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#dining"
                    className="group inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <Utensils className="w-4 h-4 text-emerald-700" />
                    <span>Dining</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="group inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <ImageIcon className="w-4 h-4 text-emerald-700" />
                    <span>Gallery</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Plan */}
            <div>
              <div className="text-sm font-semibold text-gray-900 tracking-tight">
                Plan
              </div>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <Calendar className="w-4 h-4 text-emerald-700" />
                    <span>Check Dates</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#newsletter"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <TicketPercent className="w-4 h-4 text-emerald-700" />
                    <span>Offers</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                  >
                    <ConciergeBell className="w-4 h-4 text-emerald-700" />
                    <span>Concierge</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-sm font-semibold text-gray-900 tracking-tight">
                Contact
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-emerald-700 mt-0.5" />
                  <span>Azure Cove, Shoreline Rd, Coral Bay</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <a
                    href="tel:+18005551234"
                    className="hover:text-gray-900 transition"
                  >
                    +1 (800) 555‑1234
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <a
                    href="mailto:hello@azurecove.example"
                    className="hover:text-gray-900 transition"
                  >
                    hello@azurecove.example
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
