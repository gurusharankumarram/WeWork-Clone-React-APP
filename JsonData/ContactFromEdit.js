import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const ContactFromEdit = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Component3Title: '',
        Component3Description: '',
        Component3SelectOption1: '',
        Component3SelectOption2: '',
        Component3SelectOption3: '',
        Component3Agreement: '',
        Component3AgreementTnC: '',
        Component3AgreementPolicy: '',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/ContactForm")
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
        axios.put('http://localhost:5000/ContactForm/8', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };

    return (
        <div className='ContactFormEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>Contact Form Details #component3 </h3>

                <div className='EditContentContainerText'>Component3 Title:
                    <input type="text" value={formData.Component3Title} onChange={handleChange} id="Component3Title" />
                </div>

                <div className='EditContentContainerCompanyName'>
                    Component3 Description:
                    <input type="text" value={formData.Component3Description} onChange={handleChange} id="Component3Description" />
                </div>

                <div className='ContactFormEditContentContainer1'>
                <div className='EditContentContainerCompanyName'>
                    Component3 Select Option1:
                    <input type="text" value={formData.Component3SelectOption1} onChange={handleChange} id="Component3SelectOption1" />
                </div>
                <div className='EditContentContainerCompanyName'>
                    Component3 Select Option2:
                    <input type="text" value={formData.Component3SelectOption2} onChange={handleChange} id="Component3SelectOption2" />
                </div>
                <div className='EditContentContainerCompanyName'>
                    Component3 Select Option3:
                    <input type="text" value={formData.Component3SelectOption3} onChange={handleChange} id="Component3SelectOption3" />
                </div>
                </div>

                <div className='ContactFormEditContentContainer2'>
                <div className='EditContentContainerCompanyName'>
                    Component3 Agreement:
                    <input type="text" value={formData.Component3Agreement} onChange={handleChange} id="Component3Agreement" />
                </div>
                <div className='EditContentContainerCompanyName'>
                    Component3 Agreement T&C:
                    <input type="text" value={formData.Component3AgreementTnC} onChange={handleChange} id="Component3AgreementTnC" />
                </div>
                <div className='EditContentContainerCompanyName'>
                    Component3 Agreement Policy:
                    <input type="text" value={formData.Component3AgreementPolicy} onChange={handleChange} id="Component3AgreementPolicy" />
                </div>
                </div>

                <div className='EditContentContainerButton'>
                    <Link to='/admin' className='TopAlertEditlink'>Back</Link>
                    <button type='submit' className='TopAlertEditlink'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactFromEdit
