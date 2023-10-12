import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const SolutionsForBusinessesEdit = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        selectedTab0Image: '',
        selectedTab1Image: '',
        content2Title: '',
        content2Tab1: '',
        content2Tab2: '',

        content2Tab1Text1: '',
        content2Tab1Ttext2: '',
        content2LearnMore: '',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/SolutionsForBusinesses")
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
        axios.put('http://localhost:5000/SolutionsForBusinesses/7', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };

    return (
        <div className='SolutionsForBusinessesEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>Solutions For Businesses #Content2 Details</h3>

                <div className='SolutionsForBusinessesEditContentContainer1'>
                    <div className='EditContentContainerText'>selected Tab0 Image:
                        <input type="text" value={formData.selectedTab0Image} onChange={handleChange} id="selectedTab0Image" />
                    </div>
                    <div className='EditContentContainerCompanyName'>
                        selected Tab1 Image:
                        <input type="text" value={formData.selectedTab1Image} onChange={handleChange} id="selectedTab1Image" />
                    </div>
                </div>

                <div className='SolutionsForBusinessesEditContentContainer2'>
                    <div className='EditContentContainerText'>content 2 Title:
                        <input type="text" value={formData.content2Title} onChange={handleChange} id="content2Title" />
                    </div>
                    <div className='EditContentContainerCompanyName'>
                        content2 Tab1:
                        <input type="text" value={formData.content2Tab1} onChange={handleChange} id="content2Tab1" />
                    </div>
                    <div className='EditContentContainerCompanyName'>
                        content2 Tab2:
                        <input type="text" value={formData.content2Tab2} onChange={handleChange} id="content2Tab2" />
                    </div>
                </div>

                <div className='SolutionsForBusinessesEditContentContainer3'>
                    <div className='EditContentContainerCompanyName'>
                        content2 Tab1 Text1:
                        <input type="text" value={formData.content2Tab1Text1} onChange={handleChange} id="content2Tab1Text1" />
                    </div>
                    <div className='EditContentContainerCompanyName'>
                        content2 Tab1 Ttext2:
                        <input type="text" value={formData.content2Tab1Ttext2} onChange={handleChange} id="content2Tab1Ttext2" />
                    </div>
                    <div className='EditContentContainerCompanyName'>
                        content2 Learn More:
                        <input type="text" value={formData.content2LearnMore} onChange={handleChange} id="content2LearnMore" />
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


export default SolutionsForBusinessesEdit
