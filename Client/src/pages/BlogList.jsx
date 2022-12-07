import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../firebase/AuthContext';

export default function BlogList({blogs, onDelete = f=>f}) {
    const {logout} = UserAuth();
  return (
    <div className='blogListContainer'>
      <div className='blogListTableWrap'>
        <Link className='createBlogIcon' to='/'>ReunionDouglas</Link>
        <div className='blogListTableContent'>
          <div className='blogListTableContainer'>
            <h1 className='blogListTableH1'>Blogs</h1>
            <p className='blogListTableText'>Becareful not to edit or delete other's blogs!</p>
            <div className='blogListFixHead'>
              <table className='blogListTable'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Details</th>
                    <th>Author</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>{blog.text.substring(0,70) + "..."}</td>
                    <td>{blog.author}</td>
                    <td><Link className='blogListeditButton' to={`/edit/${blog._id}`}>Edit</Link></td>
                    <td><button className='blogListdelButton' onClick={()=>onDelete(blog)}>Delete</button></td>
                  </tr>
                ))}
              </table>
            </div>
            <Link to='/create' className='blogListButton2'>Create New</Link>
          </div>
        </div>
      </div>
      
        <button onClick={logout}>Logout</button><br/>
    </div>
  )
}
