import React from 'react'
import Content2 from '../components/Content2'
import { Link } from 'react-router-dom';

const Content2EditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};


const SolutionsForBusinessesView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={Content2EditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Content2 />
    </>
  )
}

export default SolutionsForBusinessesView
