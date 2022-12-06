import React from 'react';
import '../App.css';
import blogImg from './images/Hero_GroupPhoto.JPG';

const Blog = ({blogs}) => {
  console.log(blogs);
  console.log(blogs[0])

  return (
    <div className='blogContainer' id='blog'>
      <h1 className='blogH1'>Our Works</h1>
      <div className='blogWrapper'>
      {blogs.map((blog, index) => (
          <div className='blogCard'>
          <img className='blogPhoto' src={blogImg} />
          <h2 className='blogH2'>{blog.title}</h2>
          <p className='blogP'>
            {blog.author}
          </p>
          <p className='blogP'>
            {blog.text}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
