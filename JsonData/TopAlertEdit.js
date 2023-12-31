import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const TopAlertView = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        customPageAlertText: '',
        customPageAlertCompanyName: '',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/TopAlert")
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
        axios.put('http://localhost:5000/TopAlert/1', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };

    return (
        <div className='TopAlertEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>Top Alert Details</h3>

                <div className='EditContentContainerText'>Top Alert Text:
                    <input type="text" value={formData.customPageAlertText} onChange={handleChange} id="customPageAlertText" />
                </div>

                <div className='EditContentContainerCompanyName'>
                    Top Alert Company Name:
                    <input type="text" value={formData.customPageAlertCompanyName} onChange={handleChange} id="customPageAlertCompanyName" />
                </div>

                <div className='EditContentContainerButton'>
                    <Link to='/admin' className='TopAlertEditlink'>Back</Link>
                    <button type='submit' className='TopAlertEditlink'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TopAlertView;
