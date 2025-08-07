import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="relative group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-gradient-to-r from-black/40 to-transparent w-full h-full opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-5">
        <Link to={`/blog/${post.id}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-green-700 transition duration-200">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-500 mb-3 italic">{post.date}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{post.description}</p>

        <Link to={`/blog/${post.id}`}>
          <button className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-200 shadow-md hover:shadow-lg">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
