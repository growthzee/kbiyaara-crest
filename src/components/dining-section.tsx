import { ArrowRight, Wine, Sprout, CupSoda, FileText } from "lucide-react";
import Image from "next/image";

export default function DiningSection() {
  return (
    <section id="dining" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop"
              alt="Seaside Dining"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                Ocean Terrace
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Where sea breezes meet seasonal cuisine
              </h3>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Dining & Lounge
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Inspired by island waters and local farms—paired with a thoughtful
              list of coastal wines and crafted botanicals.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <Wine className="w-5 h-5 text-emerald-700 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Cellar & Pairings</div>
                  <p className="text-sm text-gray-600">
                    Sunset tastings curated by our sommeliers.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Sprout className="w-5 h-5 text-emerald-700 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Garden-to-Table</div>
                  <p className="text-sm text-gray-600">
                    Seasonal produce from nearby growers.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CupSoda className="w-5 h-5 text-emerald-700 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Botanical Lounge</div>
                  <p className="text-sm text-gray-600">
                    Infusions, tonics, and herb-forward cocktails.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 transition"
              >
                Reserve Table <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white hover:to-teal-500 hover:-translate-y-0.5 transition"
              >
                View Menu <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
