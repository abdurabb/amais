import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="College campus"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Shape Your Future at Amais
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl">
            Join a community of innovators, leaders, and changemakers. Experience world-class education
            that prepares you for success in a rapidly evolving world.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition flex items-center justify-center">
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}