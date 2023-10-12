import React from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom';
import SliderForm from '../components/SliderForm';

const SliderEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};


const SliderFormView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={SliderEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <SliderForm />
    </>
  )
}

export default SliderFormView
