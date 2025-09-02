// app/components/Testimonials.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: "https://placehold.co/250x250",
  alt: `Client ${i + 1}`,
}));

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 px-6 text-center overflow-hidden">
      {/* Floating Images */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-6 opacity-90 -z-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="w-28 h-28 rounded-xl overflow-hidden shadow-md"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2, // stagger effect
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={t.src}
              alt={t.alt}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-full mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by leaders <br />
          <span className="text-gray-500">from various industries</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Read Success Stories →
        </button>
      </div>
    </section>
  );
}
