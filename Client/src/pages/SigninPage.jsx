import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../firebase/AuthContext';

const SigninPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signin } = UserAuth();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('')
    try{
      await signin(email, password)
      console.log("success")
      navigate('/blog')
    } catch (e) {
      setError(e.message)
      alert(e.message)
    }
  }

  return (
    <div className='signinContainer'>
      <div className='signinFormWrap'>
        <Link className='signinIcon' to='/'>ReunionDouglas</Link>
        <div className='signinFormContent'>
          <form className='signinForm' onSubmit={handleSubmit}>
            <h1 className='signinFormH1'>Sign in to your account</h1>
            <label className='signinFormLabel' htmlFor='for'>Email</label>
            <input className='signinFormInput' type={"email"} required onChange={(e) => setEmail(e.target.value)}/><br/>
            <label className='signinFormLabel' htmlFor='for'>Password</label>
            <input className='signinFormInput' type={"password"} required onChange={(e) => setPassword(e.target.value)}/><br/>
            <button className='signinFormButton'>Login</button><br/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
