import React from 'react';

const footerSections = {
  contact: {
    title: "Contact Us",
    items: [
      "123 University Ave",
      "College Town, ST 12345",
      "Phone: (555) 123-4567",
      "Email: info@academiaelite.edu"
    ]
  },
  quickLinks: {
    title: "Quick Links",
    items: ["About Us", "Academics", "Admissions", "Campus Life"]
  },
  resources: {
    title: "Resources",
    items: ["Library", "Career Services", "Research", "Alumni"]
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{footerSections.contact.title}</h3>
            {footerSections.contact.items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{footerSections.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerSections.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{footerSections.resources.title}</h3>
            <ul className="space-y-2">
              {footerSections.resources.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="mb-4">Stay updated with our newsletter</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Academia Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}