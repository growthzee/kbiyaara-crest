import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Lina M.",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop",
      review:
        "The sound of the waves and the sunrise yoga made our trip unforgettable. Staff anticipated everything—pure calm.",
    },
    {
      id: 2,
      name: "Marcus V.",
      image:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop",
      review:
        "We loved the cliffside bungalow. Private plunge pool at sunset felt like a dream. We'll be back soon.",
    },
    {
      id: 3,
      name: "Amara K.",
      image:
        "https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=1000&auto=format&fit=crop",
      review:
        "From spa rituals to reef snorkeling, everything felt tailored. The team made our anniversary so special.",
    },
  ];

  return (
    <section id="testimonials" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              What guests say
            </h2>
            <p className="mt-3 text-base text-gray-700">
              Real stories from memorable stays.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover ring-1 ring-gray-200"
                />
                <div>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
