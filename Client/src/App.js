/* 
Title : CSIS 3380 - 001 Final Project
App Name : Reunion Douglas Group Website
Author : Berke Ozten, William Lee

PLEASE CHECK THE README.md FILE FOR INSTRUCTIONS TO USE THE APP!
*/

import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';
import { AuthContextProvider } from './AuthContext';
import BlogList from './pages/BlogList';
import ProtectedRoute from './ProtectedRoute';
import axios from "axios";
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';

function App() {

  const [apiData,setApiData] = useState({});

  useEffect(() => {
    fetch("/api").then(
      response => response.json(),
    ).then(
      (data) => {setApiData(data);
    }
    )
  },[])

  // MongoDB
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/api/bloginfo";
    axios
      .get(url)
      .then((res) => {
        console.log(res, res.data);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, []);

  //Delete the blogs from the database
  const handleDelete = async (blog) => {
    console.log("delete handled");
    const url = `http://localhost:5000/api/bloginfo/${blog._id}`;
    const { data } = await axios.delete(url);
    console.log(data);
    const newBlogs = blogs.filter((b) => b._id !== blog._id);
    setBlogs(newBlogs);
  };

  //Adding the new blog
  const handleAdd = async (title, author, headerImage, text) => {
    console.log("Add blog handled");
    console.log(title, author, headerImage, text)
    const url = `http://localhost:5000/api/bloginfo`;
    const data = {
      "title": title, 
      "author": author, 
      "headerImage": headerImage, 
      "text": text
    };

    const addBlog = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log(addBlog);
    if (typeof data == "object") {
      const newBlogs = [...blogs, data];
      setBlogs(newBlogs);
    } else {
      console.log("Add couldn't be completed.");
    }
  };

  const handleUpdate=async (id, title, author, headerImage, text) => {
    console.log("Update blog handled");
    console.log(id, title, author, headerImage, text);
    const url = `http://localhost:5000/api/bloginfo/${id}`;
    const data = {
      "id": id,
      "title": title, 
      "author": author, 
      "headerImage": headerImage, 
      "text": text
    };

    const updateBlog = await axios.put(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    await axios
      .get("http://localhost:5000/api/bloginfo")
      .then((res) => {
        console.log(res, res.data);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
          <Home onApiData= {apiData} blogs={blogs}/>
          }/>
          <Route path='/admin' element={<SigninPage />}  />
          <Route path='/blog' element={<ProtectedRoute> <BlogList onDelete={handleDelete} blogs={blogs}/> </ProtectedRoute> }  />
          <Route path='/create' element={<ProtectedRoute> <CreateBlog onAdd={handleAdd}/> </ProtectedRoute> }  />
          <Route path='/edit/:id' element={<ProtectedRoute> <EditBlog onUpdate={handleUpdate} blogs={blogs}/> </ProtectedRoute> }  />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
