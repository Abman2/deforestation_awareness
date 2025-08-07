import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router is used

export const LearnTakeAction = () => {
  const actions = [
    {
      title: 'Educate Yourself',
      description:
        'Read credible sources, reports, and documentaries about deforestation, its causes, and its global consequences.',
      img: "https://static.vecteezy.com/system/resources/previews/055/360/022/large_2x/small-plant-growing-from-open-book-in-forest-at-sunset-photo.jpg",
          link: './blog',
    },
    {
      title: 'Support Reforestation Efforts',
      description:
        'Donate to or volunteer with NGOs working to replant trees and restore ecosystems.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlHqlvww4TKOEGjytWNt_PveObBHPb8lsNg&s',
      link: './blog/3',
    },
    {
      title: 'Buy Responsibly',
      description:
        'Choose products certified by FSC or Rainforest Alliance to reduce deforestation-linked demand.',
      img: 'https://alifeofcontradictions.com/wp-content/uploads/2014/05/GreenBag.png',
      link: './blog/3',
    },
    {
      title: 'Raise Awareness',
      description:
        'Use your voice—online and offline—to share facts or push for stronger forest protection policies.',
      img: 'https://i0.wp.com/world-opportunities.com/wp-content/uploads/2024/02/How-to-raise-awareness-and-advocate-for-a-issue.gif?fit=1024%2C576&ssl=1',
      link: './blog/3',
    },
   
  ];

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Learn & Take Action</h2>
        <p className="text-gray-700 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Understanding is powerful, but action is even more impactful. Here's how you can help protect our forests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {actions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm flex-1">{item.description}</p>
              {item.link.startsWith('/') ? (
                <Link
                  to={item.link}
                  className="mt-4 inline-block text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
                >
                  Go to Page →
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
                >
                  Learn More →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quiz CTA */}
      <div className="mt-16 bg-green-700 text-white rounded-xl px-6 py-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to test your knowledge?</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Take our interactive quiz and see how much you’ve learned about deforestation, its causes, and how to protect our forests.
        </p>
        <Link
          to="/quiz"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Take the Quiz
        </Link>
      </div>
    </section>
  );
};
