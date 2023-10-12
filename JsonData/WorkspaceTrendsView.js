import React from 'react'
import { Link } from 'react-router-dom';
import Component6Ideas from '../components/Component6Ideas';

const WorkspaceTrendsEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};


const WorkspaceTrendsView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={WorkspaceTrendsEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Component6Ideas />
    </>
  )
}


export default WorkspaceTrendsView
