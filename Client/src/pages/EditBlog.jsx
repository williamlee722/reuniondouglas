import React from 'react'
import { UserAuth } from '../AuthContext';

export default function EditBlog() {
  const {logout} = UserAuth();
  return (
    <div>
        <img src={'header img'}></img>
        <form>
            <button type="upload">Upload</button>
            <label name='blogTitle'>Title</label>
            <input type='text' name='blogTitle' value={'from the db'}></input>
            <label name='blogAuthor'>Author</label>
            <input type='text' name='blogAuthor'></input>
            <label name='blogText'>Main</label>
            <textarea name='blogText' rows="10" cols="50"></textarea>
            <button>submit</button>
        </form>

        <br/><br/><br/>
        <br/><br/><br/>
        EditBlog
        <button onClick={logout}>Logout</button><br/>
    </div>
  )
}

