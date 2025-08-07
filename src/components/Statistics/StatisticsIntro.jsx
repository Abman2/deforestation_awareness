import React from 'react';


import beforeDeforestation from '../../assets/Statistics/bf_deforestation.jpg';
import afterDeforestation from '../../assets/Statistics/af_deforestation.png';

export const ForestIntro = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col gap-y-16 md:flex-row md:gap-x-12">

        {/* Before Deforestation */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-3">Before Deforestation</h3>
            <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
              About 10,000 years ago, after the last ice age, forests blanketed nearly 57% of Earth’s habitable land — around 6 billion hectares. These dense woodlands were crucial for biodiversity, climate regulation, and indigenous communities.
            </p>
          </div>
          <div>
            <img
              src={beforeDeforestation}
              alt="Before Deforestation"
              className="w-full rounded-lg shadow-lg object-cover aspect-video hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* After Deforestation */}
        <div className="flex-1 flex md:flex-col-reverse flex-col justify-center space-y-6 md:space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-red-700 mb-3 md:mt-5">After Deforestation</h3>
            <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
              Due to agriculture, urban growth, and industry, forest coverage has reduced to just 31% — about 4.06 billion hectares. That’s a third of the world’s forests lost, equivalent to twice the size of the United States.
            </p>
          </div>
          <div>
            <img
              src={afterDeforestation}
              alt="After Deforestation"
              className="w-full rounded-lg shadow-lg object-cover aspect-video hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
