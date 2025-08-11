import { Sun, Leaf, Utensils, Waves } from "lucide-react";
import Image from "next/image";

export default function ResortHighlights() {
  return (
    <section id="resort" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Effortless luxury, naturally inspiring
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Thoughtfully designed spaces blend ocean views, native textures,
              and calming palettes. Stroll shaded pathways to a beachfront
              infinity pool, renew at the botanical spa, and end each day by the
              glow of sunset.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors hover:-translate-y-0.5 hover:shadow-sm">
                <Sun className="w-5 h-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Oceanfront Infinity Pool
                  </div>
                  <p className="text-sm text-gray-600">
                    Loungers, cabanas, and sunset views.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors hover:-translate-y-0.5 hover:shadow-sm">
                <Leaf className="w-5 h-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Botanical Spa
                  </div>
                  <p className="text-sm text-gray-600">
                    Nature-infused treatments & sauna.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors hover:-translate-y-0.5 hover:shadow-sm">
                <Utensils className="w-5 h-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Coastal Dining
                  </div>
                  <p className="text-sm text-gray-600">
                    Seasonal menus from island farms.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors hover:-translate-y-0.5 hover:shadow-sm">
                <Waves className="w-5 h-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Private Beach
                  </div>
                  <p className="text-sm text-gray-600">
                    Gentle surf, crystal waters, soft sands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
              alt="Resort view"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
