import React from 'react';

const stats = [
  {
    value: "95%",
    label: "Graduate Employment Rate"
  },
  {
    value: "15:1",
    label: "Student-Faculty Ratio"
  },
  {
    value: "100+",
    label: "Academic Programs"
  },
  {
    value: "50+",
    label: "Student Organizations"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}