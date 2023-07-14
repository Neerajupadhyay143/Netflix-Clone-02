import  React, {  useRef} from 'react'
import './Signupscreen.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from './firebase';
  const  SignupScreen=({token ,setToken})=> {

  const emailRef =useRef(null);
  const passwordRef =useRef(null);
  const register =(e)=>{

  e.preventDefault();
  createUserWithEmailAndPassword(

  //   setEmailRef(e.target.value),
  //  (e.target.value)
 auth,
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser)=>{
  
    setToken(authUser.user.accessToken);
  console.log(authUser.user.accessToken)
  })
  .catch((error)=>{
    alert(error.message);
  });

};
  const signIn=(e)=>{
   e.preventDefault(); 
   signInWithEmailAndPassword(
    // setEmailRef(e.target.value),
    // setPasswordRef(e.target.value)
    auth,
     emailRef?.current.value,
    passwordRef.current.value
   ).then((authUser)=>{
   setToken(authUser.user.accessToken)
     console.log(authUser.user.accessToken)
  })
  .catch((error)=>{
    alert(error.message);
  });
  };

  return (
    <div className='SignupScreen'>
<form >
    <h1>Sign In</h1>
    <input ref={emailRef} type='email' placeholder='Email'/>
    <input ref={passwordRef} type='password' placeholder='password'/>
    
    <button type='submit' onClick={signIn} > Sign In </button>
    
</form>
<p>
  <span  className="SignupScreen__gray">New to Netflix?</span>
  <span  className="SignupScreen__link" onClick={register}> Sign up now.</span>
  </p>

  <footer>
    <table>

    </table>
  </footer>
    </div>
  )
}

export default SignupScreen;