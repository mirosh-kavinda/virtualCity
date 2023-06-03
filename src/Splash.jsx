import {  Link } from "react-router-dom";
import React from "react";
import "./css/styles.css";
const Splash = () => {

  return (
    <>
      <div className="app ">
        <div className="header">
          <h1>Welcome to Trance City</h1>
          <hr />
          <h5>First ever created virtual city in Srilanka.</h5>
        </div>
        <div className="button_group">
          <Link className="button" to="/home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default Splash;
