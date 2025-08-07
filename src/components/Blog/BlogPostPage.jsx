import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from './blogData';
import ReactMarkdown from 'react-markdown';
import { ReadyToTest } from '../static components/ReadyToTest';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  const relatedPosts = blogPosts.filter((p) => p.id !== post?.id).slice(0, 4); // show 4 others

  if (!post) {
    return (
      <div className='text-center py-20 text-gray-600 text-xl font-medium'>
        🚫 Blog post not found.
      </div>
    );
  }

  return (
    <div className='bg-gradient-to-b from-white to-gray-50 lg:min-h-screen'>
      {/* Header Image */}
      <div className='relative max-w-6xl mx-auto h-80'>
        <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black/40' />
        <h1 className='absolute bottom-6 left-6 text-white text-4xl font-bold drop-shadow-lg'>
          {post.title}
        </h1>
      </div>

      {/* Main Content + Sidebar */}
      <div className='max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:bg-green-50'>
        {/* Main Article */}
        <div className='bg-white shadow-xl rounded-xl p-6'>
          <p className='text-sm text-gray-500 mb-4 italic'>📅 {post.date}</p>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className='text-3xl font-bold text-green-800 mb-4' {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className='text-2xl font-semibold text-green-700 mb-3' {...props} />
              ),
               h3: ({ node, ...props }) => (
                <h3 className='text-xl font-semibold text-green-700 mb-3' {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className='text-gray-700 mb-4 leading-relaxed' {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className='list-disc list-inside mb-4' {...props} />
              ),
              li: ({ node, ...props }) => <li className='mb-1' {...props} />,
              strong: ({ node, ...props }) => (
                <strong className='font-semibold text-gray-900' {...props} />
              ),
              em: ({ node, ...props }) => (
                <em className='italic text-gray-600' {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className='w-1/2  rounded-md' {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Sidebar */}
        <aside className='bg-white shadow-md rounded-xl h-fit p-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Related Posts</h3>
          <ul className='space-y-4'>
            {relatedPosts.map((related) => (
              <li key={related.id} className='flex items-center gap-4'>
                <img
                  src={related.image}
                  alt={related.title}
                  className='w-16 h-16 object-cover rounded-md'
                />
                <div>
                  <Link
                    to={`/blog/${related.id}`}
                    className='text-green-700 font-medium hover:underline'
                  >
                    {related.title}
                  </Link>
                  <p className='text-sm text-gray-500'>{related.date}</p>
                </div>
              </li>
            ))}
          </ul>
          <ReadyToTest/>
        </aside>
        
       
      </div>
    </div>
  );
};

export default BlogPostPage;
