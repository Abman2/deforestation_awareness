import React from 'react';

export const Deforestation = () => {
  return (
    <main
      className="bg-[url('src/assets/Home/deforestation1.png')] bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20"
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 sm:p-10 rounded-lg max-w-2xl text-center md:text-left">
        <h1 className="text-3xl lg:text-5xl font-semibold text-green-800 mb-4">
          What is Deforestation?
        </h1>
        <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
          Deforestation is the large-scale removal of forest or tree cover, often to make way for agricultural activities, urban development, or mining. This practice disrupts ecosystems, contributes to climate change, and leads to loss of biodiversity and habitat for countless species.
        </p>
      </div>
    </main>
  );
};
