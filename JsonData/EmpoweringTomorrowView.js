import React from 'react'
import { Link } from 'react-router-dom';
import Component5Empowering from '../components/Component5Empowering';

const EmpoweringTomorrowEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const EmpoweringTomorrowView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={EmpoweringTomorrowEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Component5Empowering />
    </>
  )
}

export default EmpoweringTomorrowView
