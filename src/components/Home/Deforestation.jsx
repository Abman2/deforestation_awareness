import React from 'react';

export const Deforestation = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:h-screen lg:px-0 flex flex-col md:flex-row items-center md:space-x-10 space-y-10 lg:space-y-0 py-10 lg:py-0 ">
      {/* Text Section */}
      <div className="md:w-1/2 lg:text-left space-y-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-green-800">
          What is Deforestation?
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
          Deforestation is the large-scale removal of forests, often to make space for agriculture,
          infrastructure, or urban development. This practice leads to habitat loss, climate change,
          soil erosion, and a decline in biodiversity. Preserving our forests is essential for
          maintaining ecological balance and combating global warming.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex  justify-center lg:justify-end gap-6 h-80 lg:h-3/4">
        <img
          src="src/assets/Home/deforestation1.png"
          alt="Forest before deforestation"
          className="w-1/2 h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="src/assets/Home/deforestation2.png"
          alt="Cleared land after deforestation"
          className="w-1/2 h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </main>
  );
};
