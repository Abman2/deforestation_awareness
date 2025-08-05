import React, { useState } from 'react';

export const ImpactOfDeforestation = () => {
  const [activeTab, setActiveTab] = useState('environment');

  const impacts = {
    environment: [
      {
        title: 'Loss of Biodiversity',
        description:
          'Deforestation destroys the habitats of countless species, leading to extinction and loss of genetic diversity in fragile ecosystems.',
        img: 'https://via.placeholder.com/400x250?text=Loss+of+Biodiversity',
      },
      {
        title: 'Climate Change',
        description:
          'Forests act as carbon sinks. When they are cleared, CO₂ is released into the atmosphere, intensifying global warming.',
        img: 'https://via.placeholder.com/400x250?text=Climate+Change',
      },
      {
        title: 'Disrupted Water Cycles',
        description:
          'Trees help regulate the water cycle by returning moisture to the air. Without them, rainfall patterns change and droughts increase.',
        img: 'https://via.placeholder.com/400x250?text=Water+Cycle+Disruption',
      },
      {
        title: 'Soil Erosion & Degradation',
        description:
          'Without tree roots, soil becomes loose and washes away, degrading land quality and affecting agricultural productivity.',
        img: 'https://via.placeholder.com/400x250?text=Soil+Erosion',
      },
    ],
    social: [
      {
        title: 'Displacement of Indigenous Peoples',
        description:
          'Many indigenous communities are forced to leave their ancestral lands, losing homes, culture, and access to resources.',
        img: 'https://via.placeholder.com/400x250?text=Indigenous+Displacement',
      },
      {
        title: 'Food and Water Insecurity',
        description:
          'Loss of forests affects water sources and agriculture, causing scarcity of food and clean water in vulnerable regions.',
        img: 'https://via.placeholder.com/400x250?text=Food+Water+Insecurity',
      },
      {
        title: 'Health Risks',
        description:
          'Deforestation increases the spread of zoonotic diseases and worsens air quality, affecting public health.',
        img: 'https://via.placeholder.com/400x250?text=Health+Risks',
      },
      {
        title: 'Loss of Livelihood',
        description:
          'Millions depend on forests for fuel, food, and jobs. Forest destruction strips these vital income sources.',
        img: 'https://via.placeholder.com/400x250?text=Loss+of+Livelihood',
      },
    ],
  };

  return (
   <div className="bg-green-50">
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700">Impacts of Deforestation</h2>
        <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Deforestation causes irreversible damage to both the environment and human society. Here’s how it affects us all.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <button
          className={`px-6 py-2 rounded-l-full font-medium text-sm sm:text-base transition-all duration-300 ${
            activeTab === 'environment'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-green-100'
          }`}
          onClick={() => setActiveTab('environment')}
        >
          Environmental Impacts
        </button>
        <button
          className={`px-6 py-2 rounded-r-full font-medium text-sm sm:text-base transition-all duration-300 ${
            activeTab === 'social'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-green-100'
          }`}
          onClick={() => setActiveTab('social')}
        >
          Social Impacts
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {impacts[activeTab].map((impact, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
          >
            <img
              src={impact.img}
              alt={impact.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{impact.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{impact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};
