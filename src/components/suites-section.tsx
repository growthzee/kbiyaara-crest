import {
  ArrowRight,
  Sparkles,
  Leaf,
  Mountain,
  BedDouble,
  Bath,
  Wifi,
  Trees,
  Fan,
  Sun,
  Droplets,
} from "lucide-react";
import Image from "next/image";

export default function SuitesSection() {
  const suites = [
    {
      id: 1,
      name: "Oceanfront Suite",
      description: "King bed, soaking tub, terrace lounge.",
      price: 389,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      badge: { icon: Sparkles, text: "Ocean View" },
      amenities: [
        { icon: BedDouble, text: "1 King" },
        { icon: Bath, text: "Ensuite" },
        { icon: Wifi, text: "Wi‑Fi" },
      ],
    },
    {
      id: 2,
      name: "Garden Villa",
      description: "Private patio, outdoor shower, hammock.",
      price: 329,
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
      badge: { icon: Leaf, text: "Garden" },
      amenities: [
        { icon: BedDouble, text: "1 King" },
        { icon: Trees, text: "Patio" },
        { icon: Fan, text: "Breezy" },
      ],
    },
    {
      id: 3,
      name: "Cliffside Bungalow",
      description: "Panoramic deck, plunge pool, daybed.",
      price: 469,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2069&auto=format&fit=crop",
      badge: { icon: Mountain, text: "Cliffside" },
      amenities: [
        { icon: BedDouble, text: "1 King" },
        { icon: Sun, text: "Deck" },
        { icon: Droplets, text: "Plunge" },
      ],
    },
  ];

  return (
    <section id="rooms" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Signature Suites
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Spacious layouts, private terraces, and coastal textures crafted
              for calm.
            </p>
          </div>
          <a
            href="#book"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suites.map((suite) => (
            <article
              key={suite.id}
              className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={suite.image || "/placeholder.svg"}
                  alt={suite.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-200 shadow-sm">
                  <suite.badge.icon className="w-3.5 h-3.5 text-emerald-700" />
                  {suite.badge.text}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {suite.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {suite.description}
                </p>
                <div className="mt-3 flex items-center gap-4 text-gray-700">
                  {suite.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 text-sm"
                    >
                      <amenity.icon className="w-4 h-4" />
                      {amenity.text}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    From{" "}
                    <span className="font-semibold text-gray-900">
                      ${suite.price}
                    </span>
                    /night
                  </div>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 transition"
                  >
                    Reserve <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
