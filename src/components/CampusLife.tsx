import React from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    alt: "Campus life"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    alt: "Students studying"
  },
  {
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80",
    alt: "Student activities"
  },
  {
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80",
    alt: "Research facilities"
  }
];

export default function CampusLife() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Experience Campus Life</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our vibrant campus community offers endless opportunities for growth, friendship, and
              discovery. From state-of-the-art facilities to diverse student organizations, you'll
              find your place here.
            </p>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center">
              Take a Virtual Tour <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-lg object-cover h-48 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}