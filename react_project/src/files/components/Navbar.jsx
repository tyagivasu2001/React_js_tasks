import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = (props) => {
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
      <NavLink className="list" exact to="/home">
        Home
      </NavLink>
      <NavLink className="list" exact to="/about">
        About
      </NavLink>
      <NavLink className="list" exact to="/contact">
        Contact Us
      </NavLink>
      </div>
     
    </div>
 
  );
};
export default Navbar;
