import React,{useState}from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase';

export default function Login() {
  const navigate = useNavigate();
const [email,setEmail]=useState(" ");
const [password,setPassword]=useState("");

const signIn=(e) =>{
e.preventDefault();
// some firebase login shit
auth.signInWithEmailAndPassword(email,password).then(auth=>{
  navigate("/");
})
.catch(error => alert(error.message));
};
const registerfunc =(e)=>{
  e.preventDefault();
// some firebase register shit
auth.createUserWithEmailAndPassword(email,password)
.then((auth)=>{
  console.log(auth);
  if (auth) {
   navigate("/");
  }
})
.catch(error => alert(error.message));
};
  return (
    <div className="login">
        <Link to="/">
        <img className="loginpage_logo"src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-HD.png" alt=""/>
        </Link>
    
    <div className="login_container">
      <h1> Sign-In </h1>
       <form> 
        <h5> E-mail </h5>
       <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
       <h5> Password </h5>
       <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
      <button className="signIn_btn" type="submit" onClick={signIn}> Sign In </button>
       </form>
      <p> By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. 
        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. </p>
       
        <button className="createAccount_btn" onClick={registerfunc}> Create your Amazon account </button>
       </div>
    
    
    </div>

  )
}



