import React from 'react';

export const DeforestationSolutions = () => {
  const solutions = [
    {
      title: 'Reforestation & Afforestation',
      description:
        'Planting trees in deforested areas or expanding forests in non-forested regions helps restore ecosystems and absorb carbon emissions.',
      img: 'https://www.researchgate.net/publication/361342131/figure/fig2/AS:11431281238365966@1713905328266/Image-to-differentiate-reforestation-from-afforestation-Source-Geoengineering.tif',
    },
    {
      title: 'Sustainable Agriculture',
      description:
        'Encouraging agroforestry, crop rotation, and sustainable land use practices reduces the need to clear new forest land for farming.',
      img: 'https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/custom_course503/1677059463/custom_course_503id0.jpg',
    },
    {
      title: 'Forest Conservation Policies',
      description:
        'Governments can implement strict laws, monitoring systems, and enforcement to protect critical forest zones from exploitation.',
      img: 'https://st.adda247.com/https://www.adda247.com/jobs/wp-content/uploads/sites/4/2022/07/30114515/Forest-Conservation-Rules-2022-01.png',
    },
    {
      title: 'Community Empowerment',
      description:
        'Engaging local and indigenous communities in forest management ensures forests are preserved while sustaining local livelihoods.',
      img: 'https://pbs.twimg.com/profile_images/1016324707078066177/e_34EFhl_400x400.jpg',
    },
    {
      title: 'Sustainable Logging Practices',
      description:
        'Using certified sustainable timber, selective logging, and reduced-impact methods can minimize damage while meeting economic needs.',
      img: 'https://forum-cdn.pakira.com/original/2X/8/8192f6adb15e2cc19bffc7a0fdef6e464794913b.jpeg',
    },
    {
      title: 'Eco-Friendly Consumer Choices',
      description:
        'Consumers can reduce deforestation by avoiding unsustainable products like palm oil, paper, and beef linked to forest loss.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3vh3wTS9gu2UtA-8Hv-e2G_kShiY05o81A&s',
    },
    {
      title: 'Education & Awareness',
      description:
        'Promoting environmental education raises awareness about deforestation’s effects and inspires collective responsibility.',
      img: 'https://ziflp.org.zm/cfm/wp-content/uploads/2020/11/ZAMBIA02-clrd.jpg',
    },
    {
      title: 'Technological Monitoring',
      description:
        'Using satellite monitoring, drones, and AI can help track illegal deforestation and guide conservation strategies in real time.',
      img: 'https://eos.com/wp-content/uploads/2021/07/forest-detection-tool.jpg.webp',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Solutions & Prevention</h2>
        <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Deforestation is not inevitable. With the right actions, we can slow, stop, and even reverse forest loss. Explore practical solutions below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
          >
            <img
              src={solution.img}
              alt={solution.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-green-700 mb-2">{solution.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
