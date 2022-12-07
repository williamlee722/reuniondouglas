import React from 'react';
import {Link, useParams} from 'react-router-dom';
import '../App.css'

export default function BlogModal({setOpenModal, blogs}) {

    const params = useParams(); // This is id in path
    const blogId = params.id
    console.log(params);
    var blog = blogs.find(obj => {
      return obj._id === params.id;
    });

  return (
    <div className="modalBackground">
      <div className="modalContainer">
          <Link className='modalBtn' to='/'>X</Link>
          <div className='modalBodyContainer'>
            <img className='modalImg' src={blog.headerImage} ></img>
            <h1 className="modalTitle">{blog.title}</h1>
          </div>
          <p className="modalP">{blog.text}</p>
      </div>
    </div>    
  )
}
