import React, {useState} from 'react'
import {useParams} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../firebase/AuthContext';
import FileBase64 from 'react-file-base64';
import errorImg from '../components/images/upload_image.png';

export default function EditBlog({blogs, onUpdate=f=>f}) {
  const {logout} = UserAuth();
  const navigate = useNavigate();

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
    console.log(title,author,headerImage,text);
    onUpdate(blogId, title,author,headerImage, text);
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
          <Link className='createBlogIcon' to='/' onClick={logout}>ReunionDouglas</Link>
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
              <button className='createBlogFormButton' type='submit'>Update</button>
              <Link to='/blog' className='createBlogFormButton2'>Cancel</Link>
            </form>
          </div>
        </div>        
      </div>
    </div>
  )
}

