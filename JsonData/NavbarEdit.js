import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const NavbarEdit = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        navLogo:'',
        FindALocation:'',
        Solutions:'',
        Enterprise:'',
        ContactUs:'',
        AdminLogIn:'',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/Navbar")
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
        axios.put('http://localhost:5000/Navbar/2', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };

    return (
        <div className='NavbarEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>Navbar Details</h3>

                <div className='EditContentContainerText'>NAV Logo:
                    <input type="text" value={formData.navLogo} onChange={handleChange} id="navLogo" />
                </div>

                <div className='EditContentContainerText'>Find A Location:
                    <input type="text" value={formData.FindALocation} onChange={handleChange} id="FindALocation" />
                </div>

                <div className='EditContentContainerText'>Solutions:
                    <input type="text" value={formData.Solutions} onChange={handleChange} id="Solutions" />
                </div>

                <div className='EditContentContainerText'>Enterprise:
                    <input type="text" value={formData.Enterprise} onChange={handleChange} id="Enterprise" />
                </div>

                <div className='EditContentContainerText'>Contact Us:
                    <input type="text" value={formData.ContactUs} onChange={handleChange} id="ContactUs" />
                </div>
                <div className='EditContentContainerText'>AdminLogIn:
                    <input type="text" value={formData.AdminLogIn} onChange={handleChange} id="AdminLogIn" />
                </div>


                <div className='EditContentContainerButton'>
                    <Link to='/admin' className='TopAlertEditlink'>Back</Link>
                    <button type='submit' className='TopAlertEditlink'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NavbarEdit;
