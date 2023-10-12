import React from 'react';
import './Navbar.css';
import weWorkLogo from './WeWork logo.png'; // Replace with the actual path to your image

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar" data-test-id="nav-section" dir="ltr">
        <div className="nav-container">
          <div className="nav-inner">

            <div className="navFaBar">
              <a href="/" className="nav-link-FaBar">
              <FontAwesomeIcon icon={faBars} size='lg' style={{ color: "#000000" }} />
              </a>
            </div>
            
            <div className="nav-logo">
              <a href="/" className="nav-link">
                <img src={weWorkLogo} alt="WeWork logo" className="nav-logo-image" />
              </a>
            </div>
            <div className="nav-menu-wrapper">
              <div className="nav-menu-items">
                <ul className="nav-menu-list">
                  <li className="nav-menu-item">
                    <a href="/search" className="nav-link" aria-label="Find a Location">Find a Location</a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="/solutions" className="nav-link" aria-label="Solutions">Solutions</a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="/enterprise" className="nav-link" aria-label="Enterprise">Enterprise</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-actions">
              <div className="nav-contact-us">
                <a href="/contact-us" className="nav-link" aria-label="Contact Us">Contact Us</a>
              </div>
              <div className="nav-login">
                <a className="nav-login-cta" href="https://members.wework.com">
                  {/* <span className="nav-login-text">Member Log In</span> */}
                  <Link to='/login' className="nav-login-text">Admin  Log In</Link>
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
