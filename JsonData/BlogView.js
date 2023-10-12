import React from 'react'
import { Link } from 'react-router-dom';
import Component7Blog from '../components/Component7Blog';

const BlogEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};

const BlogView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={BlogEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Component7Blog />
    </>
  )
}

export default BlogView
