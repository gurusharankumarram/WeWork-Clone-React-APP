import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/Navbar")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <nav className="navbar" data-test-id="nav-section" dir="ltr">
        <div className="nav-container">

          {data.map((d, i) => (
            <div className="nav-inner" key={i}>

              <div className="navFaBar">
                <a href="/" className="nav-link-FaBar">
                  <FontAwesomeIcon icon={faBars} size='lg' style={{ color: "#000000" }} />
                </a>
              </div>

              <div className="nav-logo">
                <a href="/" className="nav-link">
                  <img src={d.navLogo} alt="WeWork logo" className="nav-logo-image" />
                </a>
              </div>
              <div className="nav-menu-wrapper">
                <div className="nav-menu-items">
                  <ul className="nav-menu-list">
                    <li className="nav-menu-item">
                      <a href="/search" className="nav-link" aria-label="Find a Location">{d.FindALocation}</a>
                    </li>
                    <li className="nav-menu-item">
                      <a href="/solutions" className="nav-link" aria-label="Solutions">{d.Solutions}</a>
                    </li>
                    <li className="nav-menu-item">
                      <a href="/enterprise" className="nav-link" aria-label="Enterprise">{d.Enterprise}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-actions">
                <div className="nav-contact-us">
                  <a href="/contact-us" className="nav-link" aria-label="Contact Us">{d.ContactUs}</a>
                </div>
                <div className="nav-login">
                  <a className="nav-login-cta" href="https://members.wework.com">
                    <Link to='/login' className="nav-login-text">{d.AdminLogIn}</Link>
                  </a>
                </div>
              </div>

            </div>
          ))}

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
