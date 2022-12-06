import { async } from '@firebase/util';
import React, {useState} from 'react'
import { UserAuth } from '../AuthContext';

export default function CreateBlog({onAdd=f=>f}) {
    const {logout} = UserAuth();
    
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [headerImage, setHeaderImage] = useState("");

  const submit=(event)=>{
    event.preventDefault();
    console.log(title,author,headerImage,text,);
    onAdd(title,author,headerImage, text);
    setTitle("")
    setAuthor("");
    setHeaderImage("");
    setText("");
  }

  return (
    <div>
        <img src={'header img'}></img>
        <form onSubmit={submit}>
            <button type="upload">Upload</button>
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
        CreateBlog
        <button onClick={logout}>Logout</button><br/>
    </div>
  )
}
