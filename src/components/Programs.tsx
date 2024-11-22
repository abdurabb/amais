import React from 'react';
import { BookOpen, Users, TestTube, Code } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: "Quraan",
    description: "Develop critical thinking and creativity through our comprehensive liberal arts program.",
    color: "text-purple-600"
  },
  {
    icon: Code,
    title: "Computer Science",
    description: "Learn cutting-edge technologies and prepare for a career in tech innovation.",
    color: "text-blue-600"
  },
  {
    icon: TestTube,
    title: "Sciences",
    description: "Engage in groundbreaking research and scientific discovery.",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Business",
    description: "Master the principles of business and entrepreneurship.",
    color: "text-orange-600"
  }
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Academic Programs</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover your passion and pursue excellence in your chosen field
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`${program.color} mb-4`}>
                <program.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              <p className="mt-2 text-gray-600">{program.description}</p>
              <a
                href="#"
                className={`mt-4 inline-flex items-center text-sm font-medium ${program.color} hover:underline`}
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}