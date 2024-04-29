// layout.jsx
import React from 'react';
import logo from './images/logo.png'
import './home.scss'

const Layout = (props) => {
  return (
<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100 custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="My Image" className="navbar-logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse custom-collapse position-relative" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link fs-4" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-4" href="#aboutus">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-4" href="#contactus">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="container-fluid p-0">
  {props.children}
</div>

<footer className="p-3 bg-light">
  <div className="container-fluid">
    <span className="me-3 text-secondary">&copy; J. Torres Tae Kwon Do Academy 2024. All rights reserved.</span>
  </div>
</footer>

</React.Fragment>

  );
}

export default Layout;