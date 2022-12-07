import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../firebase/AuthContext';

export default function BlogList({blogs, onDelete = f=>f}) {
    const {logout} = UserAuth();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Details</td>
            <td>Author</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.text.substring(0,30) + "..."}</td>
                <td>{blog.author}</td>
                <td><Link to={`/edit/${blog._id}`}>Edit</Link></td>
                <td><button onClick={()=>onDelete(blog)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
      </table>
        <br/><br/><br/>
        <Link to='/create'>Create New</Link>
        <br/><br/><br/>
        BlogList
        <button onClick={logout}>Logout</button><br/>
    </div>
  )
}
