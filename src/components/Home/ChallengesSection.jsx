import React from 'react';
import { CheckCircle2 } from "lucide-react";

// ✅ Import images as variables
import kidsProtest from '../../assets/Home/kids_protest.png';
import citySmog from '../../assets/Home/city_smog.png';
import deforestedTree from '../../assets/Home/deforested_tree.png';

export const ChallengesSection = () => {
  return (
    <section className="bg-green-50">
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-full order-1 lg:order-none">
          {/* First Column */}
          <div className="flex flex-col gap-4 max-h-[540px]">
            <img
              src={kidsProtest}
              alt="Kids protesting deforestation"
              className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={citySmog}
              alt="City smog"
              className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Second Column */}
          <img
            src={deforestedTree}
            alt="Single tree left"
            className="rounded-lg object-cover w-full h-full max-h-[540px] shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right - Text Content */}
        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Challenges
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-800">
            The Challenges We Face.
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Deforestation and its consequences are accelerating climate change and harming ecosystems.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <span>
                <strong>Deforestation:</strong> Accelerating climate change and the loss of vital ecosystems.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <span>
                <strong>Soil Degradation:</strong> Removing tree cover leads to erosion and loss of soil fertility.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <span>
                <strong>Displacement of Wildlife:</strong> Habitat destruction forces species to relocate or face extinction.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <span>
                <strong>Water Cycle Disruption:</strong> Fewer trees mean less rainfall and drier climates in affected areas.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <span>
                <strong>Urgent Action Needed:</strong> Restoring forests is critical for the planet's health and sustainability.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
