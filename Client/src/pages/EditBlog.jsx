import React, {useState} from 'react'
import {useParams} from 'react-router-dom';
import { UserAuth } from '../AuthContext';

export default function EditBlog({blogs, onUpdate=f=>f}) {
  const {logout} = UserAuth();

  const params = useParams(); // This is id in path
  const blogId = params.id
  console.log(params);
  var blog = blogs.find(obj => {
    return obj._id === params.id;
  });

  const [title, setTitle] = useState(blog.title);
  const [author, setAuthor] = useState(blog.author);
  const [text, setText] = useState(blog.text);
  const [headerImage, setHeaderImage] = useState(blog.headerImage);

  const submit=(event)=>{
    event.preventDefault();
    console.log(title,author,headerImage,text,);
    onUpdate(blogId, title,author,headerImage, text);
    setTitle("")
    setAuthor("");
    setHeaderImage("");
    setText("");
  }
  
  return (
    <div>
        <img src={'header img'}></img>
        <form onSubmit={submit}>
            <label name='title'>Title</label>
            <input type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)} />
            <label name='author'>Author</label>
            <input type='text' name='author' value={author} onChange={(event) => setAuthor(event.target.value)} />
            <label name='text'>Main</label>
            <textarea name='text' rows="10" cols="50" value={text} onChange={(event) => setText(event.target.value)} />
            <button type='submit'>submit</button>
        </form>

        <br/><br/><br/>
        <br/><br/><br/>
        EditBlog
        <button onClick={logout}>Logout</button><br/>
    </div>
  )
}

