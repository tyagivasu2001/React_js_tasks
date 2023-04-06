import React,{useState} from "react";
import './log-sig.scss'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[pass,setPass]=useState("");
  const home=useNavigate();
const Home =()=>{
  home("/home")
}

const Change = (e) => {
 if(pass!=password){
  document.getElementById("display").innerHTML =("Password Don't Match");
  return;
 }
 else{
  e.preventDefault();
  fetch ("https://reqres.in/api/register", {
     method: "POST",
     headers: {
            'Content-Type': 'application/json',
            "Accept":"application/json"
          },
     body: JSON.stringify({
      "email": email,
      "password": password
  }),
})
  .then((response) => response)
  .then((result) => {
    if(result.status==200){
      Home();
     } else {
        document.getElementById("display").innerHTML =("Invalid Data format");
     }
  });
}
} 
  return (
    <div id="main">
      <form id="form">
        <h1>Create Account</h1>
        <input type="text" placeholder="Enter Your name" required/> <br></br>
        <input type="email" placeholder="Enter Your Email " required onChange={(e)=>setEmail(e.target.value)}/> <br></br>
        <input type="number" placeholder="Enter Your Number" required/><br></br>
        <input type="password" placeholder="Create Password" required onChange={(e)=>setPass(e.target.value)}/><br></br>
        <input type="password" placeholder="Confirm Password" required onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <small><div id="display"></div></small>
        <button onClick={(e)=>Change(e)}>Sign In</button>
        
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
export default Signup;
