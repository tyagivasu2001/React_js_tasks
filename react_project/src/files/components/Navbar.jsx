import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const data=useSelector((state)=>
  state
)
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
      <div className="navbar">
         <div className="hamburger-menu"> 
        <NavLink onClick={() => setToggleMenu(!toggleMenu)}>
          <GiHamburgerMenu />
        </NavLink>
        <div id="prop">
          {
            props.name
          }
        </div>
       
      </div>
    <div className= {`${toggleMenu ? "active" : "menu"}`}>
      <NavLink className="list"  to="/home">
        Home
      </NavLink>
      <NavLink className="list"  to="/about">
        About
      </NavLink>
      <NavLink className="list"  to="/contact">
        Contact Us
      </NavLink>
      <div>User:{data.Data.token}</div>
      </div>
     
    </div>
 
  );
};
export default Navbar;
