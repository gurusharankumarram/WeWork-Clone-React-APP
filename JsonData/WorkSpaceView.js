import React from 'react'
import Workspace from '../components/Workspace'
import { Link } from 'react-router-dom';


const WorkSpaceViewEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};


const WorkSpaceView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={WorkSpaceViewEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Workspace />
    </>
  )
}

export default WorkSpaceView
