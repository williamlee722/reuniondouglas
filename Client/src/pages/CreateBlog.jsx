import React, {useState} from 'react'
import { UserAuth } from '../firebase/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import errorImg from '../components/images/upload_image.png';

export default function CreateBlog({onAdd=f=>f}) {
  const {logout} = UserAuth();
  const navigate = useNavigate();
    
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [headerImage, setHeaderImage] = useState("");

  const submit=(event)=>{
    event.preventDefault();
    console.log(title,author,headerImage,text);
    onAdd(title,author,headerImage, text);
    setTitle("")
    setAuthor("");
    setHeaderImage("");
    setText("");
    navigate('/blog');
  }

  return (
    <div>
      <div className='createBlogContainer'>
        <div className='createBlogFormWrap'>
          <Link className='createBlogIcon' to='/'>ReunionDouglas</Link>
          <div className='createBlogFormContent'>
            <form className='createBlogForm' onSubmit={submit}>
              <h1 className='createBlogFormH1'>Create New Blog</h1>
              <label className='createBlogFormLabel'>Header Image</label>
              <img className='createBlogImg' srcSet={headerImage} src={errorImg} ></img>
              <FileBase64 multiple={false} onDone={({base64})=>setHeaderImage(base64)}/>
              <label className='createBlogFormLabel' name='title'>Title</label>
              <input type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)} />
              <label className='createBlogFormLabel' name='author'>Author</label>
              <input type='text' name='author' value={author} onChange={(event) => setAuthor(event.target.value)} />
              <label className='createBlogFormLabel' name='text'>Main</label>
              <textarea name='text' rows="10" cols="50" value={text} onChange={(event) => setText(event.target.value)} />
              <button className='createBlogFormButton' type='submit'>Create</button>
              <Link to='/blog' className='createBlogFormButton2'>Cancel</Link>
            </form>
          </div>
        </div>        
      </div>
    </div>
  )
}
