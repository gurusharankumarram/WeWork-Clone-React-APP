import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const SpecialOfferEdit = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        customPageAlertText: '',
        customPageAlertCompanyName: '',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/SpecialOffer")
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
        axios.put('http://localhost:5000/SpecialOffer/6', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };


    return (
        <div className='SpecialOfferEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>Special Offer #Content1 Details</h3>

                <div className='EditContentContainerText'>Content1 Content Image:
                    <input type="text" value={formData.Content1ContentImage} onChange={handleChange} id="Content1ContentImage" />
                </div>

                <div className='SpecialOfferEditContentContainer1'>
                    <div className='EditContentContainerCompanyName'>
                        Content1 Promo Tag:
                        <input type="text" value={formData.Content1PromoTag} onChange={handleChange} id="Content1PromoTag" />
                    </div>
                    <div className='EditContentContainerText'>Content1 Title:
                        <input type="text" value={formData.Content1Title} onChange={handleChange} id="Content1Title" />
                    </div>
                    <div className='EditContentContainerCompanyName'>
                        Content1 Description:
                        <input type="text" value={formData.Content1Description} onChange={handleChange} id="Content1Description" />
                    </div>
                </div>

                <div className='EditContentContainerCompanyName'>
                    Content1 Learn More Link:
                    <input type="text" value={formData.Content1LearnMoreLink} onChange={handleChange} id="Content1LearnMoreLink" />
                </div>

                <div className='EditContentContainerButton'>
                    <Link to='/admin' className='TopAlertEditlink'>Back</Link>
                    <button type='submit' className='TopAlertEditlink'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SpecialOfferEdit
