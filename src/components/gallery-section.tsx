import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1970&auto=format&fit=crop",
      alt: "Beachfront",
      className: "col-span-2 row-span-2 h-64",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1974&auto=format&fit=crop",
      alt: "Cabanas",
      className: "h-32",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
      alt: "Infinity pool",
      className: "h-32",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
      alt: "Sunset deck",
      className: "h-32",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1974&auto=format&fit=crop",
      alt: "Suite interior",
      className: "h-32",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80",
      alt: "Dining",
      className: "h-32",
    },
  ];

  return (
    <section id="gallery" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Gallery
            </h2>
            <p className="mt-3 text-base text-gray-700">
              A glimpse of sunlit days and glowing nights.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-700">
            <ImageIcon className="w-4 h-4" />
            12 curated images
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${image.className} w-full relative overflow-hidden rounded-lg ring-1 ring-gray-200 shadow-md hover:shadow-lg transition hover:-translate-y-0.5`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:brightness-110 transition"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
