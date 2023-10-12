import React from 'react';
import { Link } from 'react-router-dom';
import './EditContent.css';
import Content3 from '../components/Content3';

const ContactFormEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const ContactFormView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={ContactFormEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Content3 />
    </>
  );
};

export default ContactFormView;
