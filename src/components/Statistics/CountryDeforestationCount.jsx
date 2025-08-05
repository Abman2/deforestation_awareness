import React from 'react';

export const CountryCount = () => {
  return (
    <div className="mx-auto px-4 bg-green-50 py-5">
      {/* Section Heading */}
      <div className="mt-5 md:mt-20 max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Which countries are gaining, and which are losing forests?
        </h3>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6 text-justify">
          Before we look specifically at trends in deforestation across the world, it's useful to understand the net change
          in forest cover. The net change in forest cover measures any gains in forest cover — either through natural forest
          expansion or afforestation through tree planting — minus deforestation.
          <br /><br />
          This map shows the net change in forest cover across the world. Countries with a positive change (shown in green)
          are gaining forests faster than they're losing them. Countries with a negative change (shown in red) are losing
          more than they're able to restore.
        </p>

        {/* Responsive iframe */}
        <div className="relative pt-[56.25%] w-full mb-6 h-[510px] md:h-fit"> 
          <iframe
            src="https://ourworldindata.org/grapher/annual-change-forest-area?tab=map"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="web-share; clipboard-write"
            title="Net Change in Forest Area Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
