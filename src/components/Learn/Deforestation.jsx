import React from 'react';

// ✅ Import images as variables
import deforestation1 from '../../assets/Home/deforestation1.png';
import deforestation2 from '../../assets/Home/deforestation2.png';

export const Deforestation = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-justify sm:text-left">
      
      {/* Left Content */}
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800">
          Deforestation
        </h2>
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
          Deforestation is the large-scale removal of trees from forested areas, often resulting in the permanent destruction of ecosystems. It typically occurs when land is cleared for agriculture, logging, mining, or urban development. Forests, especially tropical rainforests, are among the most biodiverse habitats on Earth, and their loss has far-reaching consequences.
        </p>
        <img
          src={deforestation2}
          alt="Cleared forest area"
          className="w-full h-full object-cover aspect-video sm:hidden"
        />
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
          This process not only eliminates trees but also disrupts the complex web of life that depends on forest environments. Indigenous communities, wildlife species, and even global climate systems are affected. Trees play a crucial role in absorbing carbon dioxide, regulating rainfall, and maintaining soil health.
        </p>
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
          When forests are cut down or burned, the carbon stored in trees is released into the atmosphere, contributing to climate change. Deforestation also leads to soil erosion, reduced water quality, and increased risk of natural disasters like floods and landslides.
        </p>
      </div>

      {/* Right Image + Paragraph */}
      <div className="space-y-6 flex flex-col">
        <div className="w-full rounded-lg overflow-hidden shadow-md">
          <img
            src={deforestation1}
            alt="Lush green forest"
            className="w-full h-full object-cover aspect-video"
          />
        </div>
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
          In many cases, the land is never fully restored, leaving behind degraded landscapes. <br />
          Globally, deforestation is accelerating due to rising demand for food, fuel, and raw materials. Understanding what deforestation is—and why it matters—is the first step toward protecting our planet’s forests for future generations.
        </p>
      </div>
    </section>
  );
};
