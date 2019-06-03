import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Streamer
      </NavLink>
      <div className="right menu">
        <NavLink to="/" className="item">
          All streams
        </NavLink>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
