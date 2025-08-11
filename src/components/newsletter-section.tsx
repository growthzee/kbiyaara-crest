import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Be first to know
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Seasonal offers, new experiences, and members-only perks.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-400 transition">
                <Mail className="w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white hover:to-teal-500 hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
