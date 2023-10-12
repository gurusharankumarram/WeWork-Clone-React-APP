import React from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom';

const SliderEditlinkbackButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '-2rem',
};


const SliderView = () => {
    return (
        <>
            <div className='TopAlertEditlinkView'>
                <Link to='/admin' style={SliderEditlinkbackButtonStyle}>
                    Back
                </Link>
            </div>
            <Slider />
        </>
    )
}

export default SliderView
