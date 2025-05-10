import React, { useState } from "react";
import "./Dark2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./logo.svg";

const DarkClass = () => {
    const [darkMode, setDarkMode] = useState(false);
 

    const toggleDark = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`} >
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  The Publishers
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">
                        About
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex">
                    <button
                      onClick={toggleDark}
                      className={`btn  m-1 ${darkMode ? "btn-warning" : "btn-dark"}`}
                    >
                      {darkMode ? "Light Mode" : "Dark Mode"}
                      
                    </button>
                   
                  </div>
                </div>
              </div>
            </nav>
            <div id="body" className="row p-5 " style={{ minHeight: 500 }}>
              <div className="col-md-4">
                <img src="image.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem,
                voluptates nam ratione corporis mollitia quia quaerat facere voluptate
                cupiditate ut ex quam magni? Eligendi inventore obcaecati laborum
                atque ducimus!
                <hr />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente
                quae provident, odit animi accusamus voluptates sit nisi, autem eaque
                explicabo? Aut officia sed cum nulla fugiat tempora, corporis quos.
                <br />
                <button className="btn btn-outline-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
 
    )
}
 
export default DarkClass;
 