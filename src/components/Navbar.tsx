import React, { useState } from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Ainul Maarif Acadamy For Islamic Studies</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Programs <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Admissions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Campus Life</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Research</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Programs</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Admissions</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Campus Life</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Research</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}