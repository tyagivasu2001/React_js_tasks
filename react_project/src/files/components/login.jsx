import React,{useEffect} from 'react'
import './log-sig.scss'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const  Login = () => {
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");

//  Redirect to the sigup page
 const signup=useNavigate();
 const Signup =()=>{
   signup("/singup")
 }
 
//  After verify a user Navigate to the Home Page 
const home=useNavigate();
const Home =()=>{
  home("/home")
}

const Change = (e) => {
  e.preventDefault();
//    fetch("https://reqres.in/api/login", {
//      method: "POST",
//      headers: {
//             'Content-Type': 'application/json',
//             "Accept":"application/json"
//           },
//      body: JSON.stringify({
//       "email": email,
//       "password": password
//   }),
// })
//   .then((response) => response) 
//   .then((result) => {
//     console.log(" bhai",result.status);
//     if(result.status==200){
//       Home();
//      } else {
//         document.getElementById("display").innerHTML =("Invalid Username or Password");
//      }
//   });

axios.post("https://reqres.in/api/login", { "email": email,"password": password})
      .then(res => {
        if(res){
        console.log(res);
        if(res.status==200){
                Home();
               } 
               console.log(res.status);
          }
        })
        
        .catch(error => {
          console.error(error);
          document.getElementById("display").innerHTML =("Invalid Username or Password");
          
        });
      
                  
                  
               
    

}   
 
  // return part of the login component  
  return (
    <div id="main">
      <form id="form">
        <h1>Welcome</h1>
        
        <p>A Complete Pet Shop</p>
        <input type="email" placeholder="Username" onChange={(e)=>setEmail(e.target.value)} /> <br></br>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <small><div id="display"></div></small>
        <button onClick={(e)=>Change(e)}>Sign In</button>
        <small>
          <a href="#">Forget password ?</a>
        </small>
        <br></br>
        <button onClick={Signup}>Don't Have an Account</button>
      </form>
      <div id="image ">
        <img
          src="https://images.unsplash.com/photo-1582466953633-4c723ac9195c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
      </div>
    </div>
  );
};
export default Login;
