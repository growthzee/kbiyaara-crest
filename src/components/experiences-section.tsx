import { ConciergeBell, Sunrise, Waves, Bike, Utensils } from "lucide-react";
import Image from "next/image";

export default function ExperiencesSection() {
  const experiences = [
    {
      id: 1,
      name: "Sunrise Yoga",
      location: "Cliffside pavilion",
      time: "6 AM",
      icon: Sunrise,
      image:
        "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
    },
    {
      id: 2,
      name: "Reef Snorkeling",
      location: "Guided coves",
      time: "Daily",
      icon: Waves,
      image:
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=1970&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Island Cycling",
      location: "Lighthouse loop",
      time: "9 AM",
      icon: Bike,
      image:
        "https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80",
    },
    {
      id: 4,
      name: "Chef's Table",
      location: "Tasting menu",
      time: "7 PM",
      icon: Utensils,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section id="experiences" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Experiences
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Curated adventures from sunrise paddles to candlelit tastings.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Concierge
            <ConciergeBell className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group relative overflow-hidden rounded-xl ring-1 ring-gray-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/5]">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.name}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold tracking-tight">
                    {experience.name}
                  </div>
                  <div className="text-white/80 text-xs">
                    {experience.location}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800">
                  <experience.icon className="w-3.5 h-3.5" />
                  {experience.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
