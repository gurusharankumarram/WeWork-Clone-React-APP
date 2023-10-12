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
            <Link to='/navbaredit' className="Adminedit-button">Edit</Link>
            <Link to='/navbarview' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Slider</h3>
          <div className="Adminbutton-container">
            <Link to="/slideredit" className="Adminedit-button">Edit</Link>
            <Link to="/sliderview" className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Slider Form</h3>
          <div className="Adminbutton-container">
            <Link to="/sliderformedit" className="Adminedit-button">Edit</Link>
            <Link to="/sliderformview" className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>WorkSpace</h3>
          <div className="Adminbutton-container">
            <Link to='/workspaceedit' className="Adminedit-button">Edit</Link>
            <Link to='/workspaceview' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>special offer</h3>
          <div className="Adminbutton-container">
            <Link to='/specialofferedit' className="Adminedit-button">Edit</Link>
            <Link to='/specialofferview' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Solutions for businesses</h3>
          <div className="Adminbutton-container">
            <Link to="/SolutionsForBusinessesEdit" className="Adminedit-button">Edit</Link>
            <Link to="/SolutionsForBusinessesView" className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Contact Form</h3>
          <div className="Adminbutton-container">
            <Link to="/ContactFormEdit" className="Adminedit-button">Edit</Link>
            <Link to="/ContactFormView" className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Global network</h3>
          <div className="Adminbutton-container">
            <Link to='/GlobalNetworkEdit' className="Adminedit-button">Edit</Link>
            <Link to='/GlobalNetworkView' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Empowering tomorrow’s</h3>
          <div className="Adminbutton-container">
            <Link to='/EmpoweringTomorrowEdit' className="Adminedit-button">Edit</Link>
            <Link to='/EmpoweringTomorrowview' className="Adminview-button">View</Link>
          </div>
        </div>


        <div className="Admincard">
          <h3>Workspace trends</h3>
          <div className="Adminbutton-container">
            <Link to='/WorkspaceTrendsEdit' className="Adminedit-button">Edit</Link>
            <Link to='/WorkspaceTrendsView' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Blog</h3>
          <div className="Adminbutton-container">
            <Link to='/BlogEdit' className="Adminedit-button">Edit</Link>
            <Link to='/BlogView' className="Adminview-button">View</Link>
          </div>
        </div>

        <div className="Admincard">
          <h3>Footer</h3>
          <div className="Adminbutton-container">
            <Link to='/FooterEdit' className="Adminedit-button">Edit</Link>
            <Link to='/FooterView' className="Adminview-button">View</Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Admin
