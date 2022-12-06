import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';

export default function BlogList() {
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
            <tr>
            <td>Title</td>
            <td>Details<p>10 strings</p></td>
            <td>Author</td>
            <td><Link to='/edit'>Edit</Link></td>
            <td><button id="deleteBlog">Delete</button></td>
            </tr>
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
