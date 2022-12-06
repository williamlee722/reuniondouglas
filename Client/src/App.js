import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';
import { AuthContextProvider } from './AuthContext';
import BlogList from './pages/BlogList';
import ProtectedRoute from './ProtectedRoute';

var flag = 0;

function App() {

  const [apiData,setApiData] = useState({});

  useEffect(() => {
    fetch("/api").then(
      response => response.json(),
    ).then(
      (data) => {setApiData(data);
      console.log(data);
      console.log(apiData);
    }
    )
  },[flag])

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
          <Home onApiData= {apiData}/>
          }/>
          <Route path='/admin' element={<SigninPage />}  />
          <Route path='/blog' element={<ProtectedRoute> <BlogList /> </ProtectedRoute> }  />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
