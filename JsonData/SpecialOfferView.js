import React from 'react';
import { Link } from 'react-router-dom';
import Content1 from '../components/Content1';


const SpecialOfferViewEditlinkbackButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '-2rem',
};


const SpecialOfferView = () => {
  return (
    <>
      <div className='TopAlertEditlinkView'>
        <Link to='/admin' style={SpecialOfferViewEditlinkbackButtonStyle}>
          Back
        </Link>
      </div>
      <Content1 />
    </>
  )
}

export default SpecialOfferView

