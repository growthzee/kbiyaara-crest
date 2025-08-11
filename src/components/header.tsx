import { Calendar, ConciergeBell, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="flex items-center justify-between py-5 px-6 rounded-xl bg-white/70 backdrop-blur-xl ring-1 ring-gray-200/60 shadow-[0_6px_20px_-8px_rgba(16,24,40,0.15)] transition-all">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group min-w-0">
              <div className="text-xl tracking-tight font-semibold text-gray-900 leading-none whitespace-nowrap">
                KBIYARA CREST
              </div>
              <span className="sr-only">KBIYARA CREST Resort</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10 mx-8">
              <a
                href="#resort"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Resort
              </a>
              <a
                href="#rooms"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Suites
              </a>
              <a
                href="#experiences"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Experiences
              </a>
              <a
                href="#dining"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Dining
              </a>
              <a
                href="#gallery"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Contact
              </a>
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-4 min-w-0">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                Check Dates
              </a>
              <a
                href="#book"
                className="relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:to-teal-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all whitespace-nowrap"
              >
                <span className="absolute -inset-px rounded-md ring-1 ring-white/10"></span>
                <ConciergeBell className="w-4 h-4" />
                Book Now
              </a>
            </div>

            {/* Mobile Menu */}
            <details className="lg:hidden relative">
              <summary className="list-none inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 hover:bg-gray-50 cursor-pointer transition-colors">
                <Menu className="w-5 h-5" />
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-64 rounded-lg border border-gray-200 bg-white/90 backdrop-blur-xl shadow-xl p-2">
                <a
                  href="#resort"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Resort
                </a>
                <a
                  href="#rooms"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Suites
                </a>
                <a
                  href="#experiences"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Experiences
                </a>
                <a
                  href="#dining"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Dining
                </a>
                <a
                  href="#gallery"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Contact
                </a>
                <div className="my-2 border-t border-gray-200"></div>
                <a
                  href="#book"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:to-teal-500 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </details>
          </div>
        </div>
        <div className="absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent"></div>
      </div>
    </header>
  );
}
