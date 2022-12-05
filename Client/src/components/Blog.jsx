import React from 'react';
import '../App.css';
import blogImg from './images/Hero_GroupPhoto.JPG';

const Blog = () => {
  return (
    <div className='blogContainer' id='blog'>
      <h1 className='blogH1'>Our Works</h1>
      <div className='blogWrapper'>
        <div className='blogCard'>
          <img className='blogPhoto' src={blogImg} />
          <h2 className='blogH2'>CSIS 3380</h2>
          <p className='blogP'>
                This is where we write the blog
          </p>
        </div>
        <div className='blogCard'>
            <img className='blogPhoto' src={blogImg} />
            <h2 className='blogH2'>CSIS 3380</h2>
            <p className='blogP'>
                This is where we write the blog
            </p>
        </div>
        <div className='blogCard'>
            <img className='blogPhoto' src={blogImg} />
            <h2 className='blogH2'>CSIS 3380</h2>
            <p className='blogP'>
                This is where we write the blog
            </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
