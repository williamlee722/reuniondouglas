import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Blog = ({blogs}) => {
  return (
    <div>
      <div className='blogContainer' id='blog'>
        <h1 className='blogH1'>Our Works</h1>
        <div className='blogWrapper'>
          {blogs.map((blog, index) => (
            <Link to={`/blogModal/${blog._id}`} className='blogCard'>
            <img className='blogPhoto' src={blog.headerImage} />
            <h2 className='blogH2'>{blog.title.substring(0,70)}</h2>
            <p className='blogP'>
              {blog.author}
            </p>
            <p className='blogP'>
              {blog.text.substring(0,70) + "..."}
            </p>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
