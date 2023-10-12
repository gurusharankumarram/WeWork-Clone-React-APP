import React from 'react'
import { Link } from 'react-router-dom';
import Content4 from '../components/Content4';

const GlobalNetworkEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const GlobalNetworkView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={GlobalNetworkEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Content4 />
    </>
  )
}

export default GlobalNetworkView
