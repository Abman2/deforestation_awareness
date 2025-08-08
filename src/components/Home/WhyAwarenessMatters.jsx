import { CheckCircle2 } from "lucide-react"; 
import forestImg from "../../assets/Home/why_matters.png";

export const WhyAwarenessMatters = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          Why It Matters
        </span>

        <p className="text-gray-600 text-lg mt-4 mb-4">
          Climate change, pollution, and deforestation threaten our future. 
          <br className="hidden sm:block" />
          <strong>Together, we can reverse the damage.</strong>
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          The Earth Needs Us Now.
        </h2>

        <ul className="space-y-4 text-gray-700 text-base">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1" />
            <span>
              <strong>Tree planting</strong> mitigates climate change by absorbing CO₂ and reducing global warming.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1" />
            <span>
              <strong>Forest restoration</strong> improves biodiversity, soil health, and the natural water cycle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1" />
            <span>
              <strong>Over 15 billion trees</strong> are cut down each year, contributing heavily to ecosystem collapse.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1" />
            <span>
              <strong>Earth has lost about 30%</strong> of its forest cover in the last century — most of it permanently.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1" />
            <span>
              <strong>Taking action now</strong> helps prevent irreversible environmental and human damage.
            </span>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src={forestImg}
          alt="Lush green forest"
          className="rounded-lg w-full h-auto object-cover max-h-[450px] shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};
