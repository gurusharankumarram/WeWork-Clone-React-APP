import React from 'react'
import TopAlert from '../components/TopAlert';
import { Link } from 'react-router-dom';
import './EditContent.css';

const TopAlertEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const TopAlertView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={TopAlertEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <TopAlert />
    </>
  )
}

export default TopAlertView
