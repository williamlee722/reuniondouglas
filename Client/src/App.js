import React, {useEffect, useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';

var count = 0;

function App() {
  const [apiData,setApiData] = useState({});

  useEffect(() => {
    fetch("/api").then(
      response => response.json(),
    ).then(
      (data) => {setApiData(data);
      console.log(data);
      console.log(apiData);
      count ++;
      console.log(count);
    }
    )
  },[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <Home onApiData= {apiData}/>
        }/>
        <Route path='/signin' element={<SigninPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
