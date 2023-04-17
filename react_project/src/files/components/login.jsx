import React from "react";
import "./log-sig.scss";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {CallAPi} from "../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  //  Redirect to the sigup page
  const signup = useNavigate();
  const Signup = () => {
    signup("/singup");
  };

  //  After verify a user Navigate to the Home Page
  const home = useNavigate();
  const Home = () => {
    home("/home");
  };
  // api fetching using axios
  const Change = async(e) => {
    e.preventDefault();
     const result= await CallAPi("/login","POST",{ "email": email, "password": password })
     if(result.status>=200 && result.status<=209){
        Home();
    }
    else{
      document.getElementById("display").innerHTML =
      "Invalid Username or Password";
      
    }
    
  };

  // return part of the login component
  return (
    <div id="main">
      <form id="form">
        <h1>Welcome</h1>
        <p>A Complete Pet Shop</p>
        <input
          type="email"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <small>
          <div id="display"></div>
        </small>
        <button onClick={(e) => Change(e)}>Sign In</button>
        <small>
          <a href="#">Forget password ?</a>
        </small>
        <br></br>
        <button onClick={Signup}>Don't Have an Account</button>
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
export default Login;
