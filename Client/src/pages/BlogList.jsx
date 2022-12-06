import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';

export default function BlogList({blogs}) {
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
              <tr>
              <td>{blog.title}</td>
              <td>{blog.text.substring(0,30) + "..."}</td>
              <td>{blog.author}</td>
              <td><Link to='/edit'>Edit</Link></td>
              <td><button id="deleteBlog">Delete</button></td>
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
