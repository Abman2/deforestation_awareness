import React from "react";

const DeforestationStats = () => {
  return (
    <div className="bg-white px-6 py-10 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10 text-gray-800">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Global Deforestation: Can We Bring It to an End?
          </h1>
          <p className="text-lg text-gray-600">
            Over 2 billion hectares of forest have been lost since the last ice age —
            but there’s still hope to reverse this.
          </p>
        </section>

        {/* Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
          Image Placeholder: World Forest Loss
        </div>

        {/* Forest Loss Over Time */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">A History of Forest Loss</h2>
          <p>
            Since the last ice age, the planet has lost nearly one-third of its forests —
            around <strong>2 billion hectares</strong>, twice the size of the U.S.
            Agricultural expansion, livestock grazing, and logging are the major causes.
          </p>
          <p>
            While half of this loss occurred before 1900, the other half happened in the
            last 100 years alone, with <strong>deforestation peaking in the 1980s</strong>.
          </p>
        </section>

        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
          Image Placeholder: Deforestation Timeline
        </div>

        {/* Transition Phase */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Forest Transitions: Signs of Hope</h2>
          <p>
            Some regions — particularly in Europe and North America — have entered a
            <strong> forest transition phase</strong>, where reforestation exceeds
            deforestation through sustainable land practices and policy.
          </p>
          <p>
            But in many tropical regions like South America, Africa, and Southeast Asia,
            deforestation is still a growing concern.
          </p>
        </section>

        {/* Tree Loss vs Deforestation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Deforestation vs. Tree Loss</h2>
          <p>
            It’s important to distinguish between two key terms:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                <strong>Deforestation:</strong> Permanent land-use change (e.g., forest to farmland).
              </li>
              <li>
                <strong>Tree loss:</strong> Includes wildfires, disease, and logging — often temporary.
              </li>
            </ul>
          </p>
        </section>

        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
          Image Placeholder: Tree Loss vs. Deforestation Chart
        </div>

        {/* Ending Deforestation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Can We End Deforestation?</h2>
          <p>
            Yes — but it requires urgent, global action. We must:
          </p>
          <ul className="list-decimal list-inside ml-4 space-y-1">
            <li>Understand where and why forests are being lost</li>
            <li>Support forest-friendly policies and sustainable agriculture</li>
            <li>Invest in reforestation and protect biodiversity</li>
            <li>Educate the public and raise awareness</li>
          </ul>
          <p className="mt-4 font-medium text-gray-700">
            Ending deforestation is possible — and <strong>this generation</strong> can make it happen.
          </p>
        </section>

        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
          Image Placeholder: Global Cooperation Visual
        </div>
      </div>
    </div>
  );
};

export default DeforestationStats;
