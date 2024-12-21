import React from 'react';

function Services() {
  const services = [
    { name: 'Masonry', icon: '🏗️' },
    { name: 'Electrical', icon: '⚡' },
    { name: 'Painting', icon: '🎨' },
    { name: 'Gardening', icon: '🌱' },
    { name: 'Cleaning', icon: '🧹' },
    { name: 'Plumbing', icon: '🔧' },
    { name: 'Moving', icon: '📦' },
    { name: 'Repair', icon: '🛠️' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
          >
            <div className="flex-shrink-0 text-2xl">{service.icon}</div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{service.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;