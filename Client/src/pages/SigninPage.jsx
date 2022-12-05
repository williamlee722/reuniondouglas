import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';

const SigninPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {

  })

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("logged in");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  const logout = async () =>{
    await signOut(auth);
    alert('logged out');
  }

  return (
    <div className='signinContainer'>
      <div className='signinFormWrap'>
        <Link className='signinIcon' to='/'>ReunionDouglas</Link>
        <div className='signinFormContent'>
          <form className='signinForm' action='/admin'>
            <h1 className='signinFormH1'>Sign in to your account</h1>
            <label className='signinFormLabel' htmlFor='for'>Email</label>
            <input className='signinFormInput' type={"email"} required onChange={(event) => setEmail(event.target.value)}/><br/>
            <label className='signinFormLabel' htmlFor='for'>Password</label>
            <input className='signinFormInput' type={"password"} required onChange={(event) => setPassword(event.target.value)}/><br/>
            <button className='signinFormButton' onClick={login}>Login</button><br/>
            <button className='signinFormButton' onClick={logout}>LogOut</button><br/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
