import React,{useState} from "react";
import './log-sig.scss'
import { useNavigate } from "react-router-dom";
import {CallAPi} from "../axios"
const Signup = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[pass,setPass]=useState("");
  const[warn,setWarn]=useState("");
  const home=useNavigate();
const Home =()=>{
  home("/home")
}
// After Sign up button  click this function execute .....
const Change =async (e) => {
  e.preventDefault();
const result= await CallAPi("/register","POST",{ "email": email, "password": pass})
    if(result.status>=200 && result.status<=209){
      Home();
    }
    else{
      setWarn("Invalid Data Format");
    }     

}
// return part of the Signup Component ....... 
  return (
    <div id="main">
      <form id="form">
        <h1>Create Account</h1>
        <input type="text" placeholder="Enter Your name" required/> <br></br>
        <input type="email" placeholder="Enter Your Email " required onChange={(e)=>setEmail(e.target.value)}/> <br></br>
        <input type="number" placeholder="Enter Your Number" required/><br></br>
        <input type="password" placeholder="Create Password" required onChange={(e)=>setPass(e.target.value)}/><br></br>
        <input type="password" placeholder="Confirm Password" required onChange={(e)=>{if(e.target.value!=pass){
          setWarn("Password Don't Match")} else{setWarn("")}
        }}/><br></br>
        <small><text id="display">{warn}</text></small><br />
        <button onClick={(e)=>Change(e)}>Sign In</button>
        
      </form>
      <div id="image ">
        <img className="remove"
          src="https://images.unsplash.com/photo-1582466953633-4c723ac9195c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
      </div>
    </div>
  );
};
// export the Component
export default Signup;
