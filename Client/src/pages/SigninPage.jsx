import React from 'react';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  return (
    <div className='signinContainer'>
      <div className='signinFormWrap'>
        <Link className='signinIcon' to='/'>dolla</Link>
        <div className='signinFormContent'>
          <form className='singinForm' action='#'>
            <h1 className='signinFormH1'>Sign in to your account</h1>
            <label className='signinFormLabel' htmlFor='for'>Email</label>
            <input className='signinFormInput' type='email' required />
            <label className='signinFormLabel' htmlFor='for'>Password</label>
            <input className='signinFormInput' type='password' required />
            <button className='signinFormButton' type='submit'>Continue</button>
            <span className='signinFormText'>Forgot password</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
