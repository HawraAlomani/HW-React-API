import React from 'react';
import { useRef, useState, useEffect} from 'react';
const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');

  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }
  ,[])
  useEffect(()=>{
    setErrMsg('');
  }
  ,[user, pwd])

  return (
    <div className='Login'>
      Log in
      <p ref={errRef} aria-live="assertive">{errMsg}</p>
      <h5>Username:  <input placeholder='username'></input></h5>
      <h5>Password: <input placeholder='password' type='password'></input> </h5>
      <button className='loginBtn'>Log in </button>
    </div>
  )
}

export default Login