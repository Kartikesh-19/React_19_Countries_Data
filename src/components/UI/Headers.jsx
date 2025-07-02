import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  
  return (
    <header>

    <div className="container">
      <div className="grid navbar-grid">
        <div className="Logo">
          <NavLink to={"/"} style={{textDecoration:'none'}}>
            <h1>Explore X</h1>
          </NavLink>
        </div>
        <nav >
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
      </div>
    </div>
    </header>
  );
};

export default Headers;
