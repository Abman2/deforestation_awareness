import React, { useState } from 'react';

export const ImpactOfDeforestation = () => {
  const [activeTab, setActiveTab] = useState('environment');

  const impacts = {
    environment: [
      {
        title: 'Loss of Biodiversity',
        description:
          'Deforestation destroys the habitats of countless species, leading to extinction and loss of genetic diversity in fragile ecosystems.',
        img: 'https://0901.static.prezi.com/preview/v2/etiemkqf2oujusuttiodzanknh6jc3sachvcdoaizecfr3dnitcq_3_0.png',
      },
      {
        title: 'Climate Change',
        description:
          'Forests act as carbon sinks. When they are cleared, CO₂ is released into the atmosphere, intensifying global warming.',
        img: 'https://tse4.mm.bing.net/th/id/OIP.imEHcAnEkEQ9fIxe6ouoaAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Disrupted Water Cycles',
        description:
          'Trees help regulate the water cycle by returning moisture to the air. Without them, rainfall patterns change and droughts increase.',
        img: 'https://tse3.mm.bing.net/th/id/OIP.chBiuwjAnNvKd2hRnWgL8gHaFj?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Soil Erosion & Degradation',
        description:
          'Without tree roots, soil becomes loose and washes away, degrading land quality and affecting agricultural productivity.',
        img: 'https://th.bing.com/th/id/R.7d209b277ae863c4aa000d41d6470e8a?rik=ebVPllv0%2bV38bQ&pid=ImgRaw&r=0',
      },
    ],
    social: [
      {
        title: 'Displacement of Indigenous Peoples',
        description:
          'Many indigenous communities are forced to leave their ancestral lands, losing homes, culture, and access to resources.',
        img: 'https://tse1.mm.bing.net/th/id/OIP.2AoUqL6YbFGTyEk3dvmUrwHaE5?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Food and Water Insecurity',
        description:
          'Loss of forests affects water sources and agriculture, causing scarcity of food and clean water in vulnerable regions.',
        img: 'https://th.bing.com/th/id/R.540efe25cfc0a833212dc474169f7c2d?rik=qcWuaMT2eukLuw&riu=http%3a%2f%2f2.bp.blogspot.com%2f_K1rN7fRrhjk%2fSpf6ku-e93I%2fAAAAAAAAAMY%2fr3rxnxlVX74%2fs400%2f2477719111_6b9daa5386.jpg&ehk=MkkVgygq8THWRV8mxFOJ3u3O8JrAeReIUkMqbEcwnxs%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        title: 'Health Risks',
        description:
          'Deforestation increases the spread of zoonotic diseases and worsens air quality, affecting public health.',
        img: 'https://tse2.mm.bing.net/th/id/OIP.gZZmKALoa_pXNbTlZm-1jAHaD5?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Loss of Livelihood',
        description:
          'Millions depend on forests for fuel, food, and jobs. Forest destruction strips these vital income sources.',
        img: 'https://tse2.mm.bing.net/th/id/OIP.M3EWhP0nv1Zm6TcL1Z73CgHaFj?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
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
