import React from 'react'
import { Link } from 'react-router-dom';
import Component8Footer from '../components/Component8Footer';

const FooterEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const FooterView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={FooterEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Component8Footer />
    </>
  )
}

export default FooterView
