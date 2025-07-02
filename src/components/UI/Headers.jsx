import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const [show, setShow] = useState(false)
  const handleButtonToggle=()=>{
setShow(!show)
  }
  
  return (
    <header>

    <div className="container">
      <div className="grid navbar-grid">
        <div className="Logo">
          <NavLink to={"/"} style={{textDecoration:'none'}}>
            <h1>Explore X</h1>
          </NavLink>
        </div>
        <nav className={show?"menu-mobile":"menu-web"} >
          <ul >
            <li>
              <NavLink to="/"  className={({isActive})=>isActive?"active_tab":"tab"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"  className={({isActive})=>isActive?"active_tab":"tab"}>About</NavLink>
            </li>
            <li>
              <NavLink to="/country"  className={({isActive})=>isActive?"active_tab":"tab"} >Country</NavLink>
            </li>
            <li>
              <NavLink to="/contact"  className={({isActive})=>isActive?"active_tab":"tab"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="ham-menu">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu/>

          </button>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Headers;
