import React, { useState } from "react";
import ProfilePic from "../assets/img/profile-img.jpg"; 
import Menu from "./Menu";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className={isMenu ? "mobile-nav-active" : ""}>
      <Menu isMenu={isMenu} setIsMenu={setIsMenu}/>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={ProfilePic} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Muhammad Ahsan</a>
            </h1>
            <div className="social-links mt-2 text-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bi bi-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
