import React from 'react';

export const TypesOfDeforestation = () => {
  const types = [
    {
      title: 'Clear-Cutting',
      description:
        'Complete removal of trees from a forested area, often used in commercial logging. It causes habitat destruction and major biodiversity loss.',
      img: `../../src/assets/Learn/clearCutting.png`,
    },
    {
      title: 'Slash-and-Burn',
      description:
        'Forests are cut and burned to create farmland. Common in tropical areas, it leads to rapid deforestation and nutrient-poor soils.',
      img: '../../src/assets/Learn/slashburn.png',
    },
    {
      title: 'Selective Logging',
      description:
        'Only certain trees are removed, usually for their commercial value. Although less destructive, it can still degrade forest structure over time.',
      img: '../../src/assets/Learn/selectiv_logging.png',
    },
    {
      title: 'Fragmentation',
      description:
        'Breaking large forests into smaller patches due to roads, farms, or cities. It isolates species and disrupts ecosystems.',
      img: '../../src/assets/Learn/fragmentation.png',
    },
  ];

  return (
   <div className='bg-green-50'>
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Types of Deforestation</h2>
        <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Deforestation occurs in different forms, each with unique environmental consequences. Understanding these types helps us develop better conservation strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {types.map((type, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
          >
            <img
              src={type.img}
              alt={type.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{type.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};
