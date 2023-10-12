import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const SliderEdit = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        SliderImage1: '',
        SliderImage2: '',
        SliderImage3: '',
        SliderImage4: '',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/Slider")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            setFormData(data[0]);
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/Slider/3', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };


    return (
        <div className='SliderEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>Slider Image Details</h3>

                <div className='EditContentContainerText'>Slider Image 1:
                    <input type="text" value={formData.SliderImage1} onChange={handleChange} id="SliderImage1" />
                </div>

                <div className='EditContentContainerText'>Slider Image 1:
                    <input type="text" value={formData.SliderImage2} onChange={handleChange} id="SliderImage2" />
                </div>

                <div className='EditContentContainerText'>SliderImage 3:
                    <input type="text" value={formData.SliderImage3} onChange={handleChange} id="Solutions" />
                </div>

                <div className='EditContentContainerButton'>
                    <Link to='/admin' className='TopAlertEditlink'>Back</Link>
                    <button type='submit' className='TopAlertEditlink'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SliderEdit
