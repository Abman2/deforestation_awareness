import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Hidden Cost of Deforestation",
    description:
      "Explore how deforestation impacts biodiversity and contributes to climate change.",
    image: "https://via.placeholder.com/600x300?text=Blog+Image+1",
    date: "August 5, 2025",
  },
  {
    id: 2,
    title: "10 Countries Making a Difference in Reforestation",
    description:
      "These countries are leading the charge in reversing forest loss. Find out how.",
    image: "https://via.placeholder.com/600x300?text=Blog+Image+2",
    date: "August 3, 2025",
  },
  {
    id: 3,
    title: "What You Can Do to Fight Deforestation",
    description:
      "Small actions add up. Learn how your daily habits can support forest conservation.",
    image: "https://via.placeholder.com/600x300?text=Blog+Image+3",
    date: "July 30, 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-green-800 text-center">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{post.date}</p>
              <p className="text-gray-700">{post.description}</p>
              <button className="mt-4 text-green-700 hover:underline font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
