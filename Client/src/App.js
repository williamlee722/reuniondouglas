import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';
import { AuthContextProvider } from './AuthContext';
import BlogList from './pages/BlogList';
import ProtectedRoute from './ProtectedRoute';
import axios from "axios";

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
    const { data } = await axios.post(url, {
      title, 
      author, 
      headerImage, 
      text
    });
    console.log(data);
    if (typeof data == "object") {
      const newBlogs = [...blogs, data];
      setBlogs(newBlogs);
    } else {
      console.log("Add couldn't be completed.");
    }
  };

  const handleUpdate=()=>{
    console.log("update")
  }

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
          <Home onApiData= {apiData} blogs={blogs}/>
          }/>
          <Route path='/admin' element={<SigninPage />}  />
          <Route path='/blog' element={<ProtectedRoute> <BlogList onAdd={handleAdd} onDelete={handleDelete} onUpdate={handleUpdate} blogs={blogs}/> </ProtectedRoute> }  />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
