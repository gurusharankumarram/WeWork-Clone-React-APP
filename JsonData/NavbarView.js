import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './EditContent.css';

const NavbarEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const NavbarView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={NavbarEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Navbar />
    </>
  );
};

export default NavbarView;
