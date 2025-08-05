import React from 'react';

export const CausesOfDeforestation = () => {
  const causes = [
    {
      title: 'Agricultural Expansion',
      description:
        'The largest driver of deforestation. Forests are cleared for crops (like soy, palm oil) and livestock grazing, especially in tropical regions.',
      img: 'https://tse4.mm.bing.net/th/id/OIP.NgbJyg7hx8s9aGn9YR5RiAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'Logging and Timber Harvesting',
      description:
        'Legal and illegal logging for timber, fuelwood, and paper products contributes to significant forest degradation globally.',
      img: 'https://tse1.mm.bing.net/th/id/OIP.xCF4tc4k33Lt-BAVhitSvwHaEF?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'Urbanization and Infrastructure',
      description:
        'Growing cities, roads, and mining operations demand land, leading to permanent forest loss, especially near urban centers.',
      img: 'https://tse2.mm.bing.net/th/id/OIP.kiNO32O5gPGcnX6dlt0J8gHaDt?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'Fire and Climate Change',
      description:
        'Both natural and human-induced fires destroy vast areas of forest annually. Droughts and warming make forests more fire-prone.',
      img: 'https://tse3.mm.bing.net/th/id/OIP.0cqS0Ju31q4gTHkHwW3lqAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700">Causes of Deforestation</h2>
        <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Deforestation is driven by a combination of human activities and environmental changes. Understanding these causes is essential to preventing further forest loss.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {causes.map((cause, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
          >
            <img
              src={cause.img}
              alt={cause.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-red-600 mb-2">{cause.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{cause.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
