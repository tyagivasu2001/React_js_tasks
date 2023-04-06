import React from 'react'
import './Contact.scss'
import Navbar from '../components/Navbar'
  const Contact=()=>{
 return(
   <div className="main-div">
    <Navbar name="Contact"/>
    <h1>Thank you For Choosing Us </h1><br />
    <p>We will Connect with You Soon</p><br />
    <form id="contact-form">
      <label htmlFor="fname">Enter Your First Name:</label><br />
      <input type="text" id="fname"/><br />
      <label htmlFor="lname">Enter Your Last Name:</label><br />
      <input type="text" id="lname"/><br />
      <label htmlFor="number">Enter Your Mobile Number:</label><br />
      <input type="number" id="number"/><br />
      <label htmlFor="Email">Enter Your Email:</label><br />
      <input type="email" id="Email"/><br />
      <button>Submit</button>
    </form><br />
    <p>
      Thanks for your Valuable time
    </p>
    <p>For help write <a href="#">xyz@gmail.com</a></p>
    <p>Phone 09:00 Am - 09:00 Pm</p>
    <p>1234567890</p>
   </div>
 );
}
export default Contact;