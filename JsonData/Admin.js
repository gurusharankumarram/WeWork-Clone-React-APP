import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Admin.css';

const Admin = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('email')) {
      console.log('user verified')
    }
    else {
      navigate('/')
    }
  })

  const handleLogout = () => {
    localStorage.removeItem('email')
    navigate('/')
  }


  return (
    <>
      <h2 className='Adminh2'>Welcome to wework admin</h2>

      <div className='AdminLogoutBtn'>
        <button onClick={handleLogout}>logout</button>
      </div>

      <div className="Admincard-container">

        <div className="Admincard">
          <h3>TopAlert</h3>
          <div className="Adminbutton-container">
            <Link to='/topalertedit' className="Adminedit-button">Edit</Link>
            <Link to='/topalertview' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Navbar</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Slider</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Slider Form</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>WorkSpace</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>special offer</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Solutions for businesses</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Contact Form</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Global network</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Empowering tomorrow’s</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>


        <div className="Admincard">
          <h3>Workspace trends</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Blog</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

        <div className="Admincard">
          <h3>Footer</h3>
          <div className="Adminbutton-container">
            <button className="Adminedit-button">Edit</button>
            <button className="Adminview-button">View</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Admin
