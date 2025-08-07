// BlogPostList.jsx
import React from "react";
import BlogPostCard from "./BlogPostCard";
import blogPosts from "./blogData";

const BlogPostList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-green-800 text-center">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
     
    </div>
  );
};

export default BlogPostList;
