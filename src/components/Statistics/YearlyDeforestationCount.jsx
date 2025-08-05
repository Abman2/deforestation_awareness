import React from 'react';

export const DeforestationCount = () => {
  return (
    <div className="mx-auto px-4 py-5 bg-white">
      <div className="mt-5 md:mt-20 max-w-7xl mx-auto">
        {/* Section Heading */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          How much deforestation occurs each year?
        </h3>

        {/* Paragraph Content */}
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6 text-justify">
          Between <b>2010 and 2025</b>, the world experienced <b>an average net forest loss of 4.7 million hectares per year</b>. This
          figure accounts for both deforestation and forest regrowth, offering a more balanced view of global forest change.
          However, the rate of deforestation alone was significantly higher, with an estimated <b>10 million hectares of forest
          cleared annually</b>, mostly in tropical regions.
          <br /><br />
          In <b>2024 the planet saw a sharp spike in forest destruction, losing 6.7 million hectares of primary rainforest</b>,
          <b>largely due to wildfires</b>. These fires released an estimated 3.1 gigatonnes of carbon dioxide, surpassing the annual
          fossil fuel emissions of India. Such events highlight the growing impact of climate change and land-use pressures
          on forest ecosystems.
        </p>

        {/* Responsive Iframe Container */}
        <div className="relative pt-[56.25%] w-full mb-6 h-[510px] md:h-fit">
          <iframe
            src="https://ourworldindata.org/grapher/annual-deforestation?stackMode=absolute&region&tab=map"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="web-share; clipboard-write"
            title="Annual Deforestation Map"
          ></iframe>
        </div>

        {/* More Paragraph Content */}
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
          Regionally, <b>Africa recorded the highest net forest loss, averaging 3.9 million hectares per year</b>, followed by <b> South
          America with 2.6 million hectares annually</b>. On a more hopeful note, countries like Indonesia and Malaysia showed
          signs of improvement in 2024, with reduced rates of primary forest loss compared to previous years.
          <br /><br />
          Despite ongoing challenges, some nations are making progress through reforestation and sustainable land management.
          Yet, the overall trend remains concerning: forest gains are not keeping pace with deforestation. Continued
          monitoring and global cooperation are essential to reverse this trajectory and protect the planet’s remaining
          forests.
        </p>
      </div>
    </div>
  );
};
