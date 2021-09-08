import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import {Link} from 'react-router-dom'
// import reactDom from "react-dom";

function Header(props) {


  return (
    <div className ="app">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
             
                
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          
        
        <div className="switch form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick = {props.darkMode}
           
          />
          <label
            className={`form-check-label text-${props.mode === 'light'?'dark':'light'} `}
            htmlFor="flexSwitchCheckDefault"
          >
            {props.darkText}
          </label>
          </div>
          </ul>
        
        </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

export default Header;
