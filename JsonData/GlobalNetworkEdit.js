import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';


const GlobalNetworkEdit = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Content4Header: '',
    Content4Title: '',
    Content4Discription: '',
    Component4ExploreLocations: '',
    Content4Image: '',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/GlobalNetwork")
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
    axios.put('http://localhost:5000/GlobalNetwork/9', formData)
      .then(res => {
        alert('data updated successfully....')
        navigate('/admin')
      })
  };

  return (
    <div className='NavbarEditContentContainer'>
      <form onSubmit={handleSubmit}>

        <h3 className='EditContentContainerHeading'>Global Network Details #component4 </h3>

        <div className='EditContentContainerText'>Content4 Header:
          <input type="text" value={formData.Content4Header} onChange={handleChange} id="Content4Header" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Content4 Title:
          <input type="text" value={formData.Content4Title} onChange={handleChange} id="Content4Title" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Content4 Discription:
          <input type="text" value={formData.Content4Discription} onChange={handleChange} id="Content4Discription" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Component4 Explore Locations:
          <input type="text" value={formData.Component4ExploreLocations} onChange={handleChange} id="Component4ExploreLocations" />
        </div>
        <div className='EditContentContainerCompanyName'>
          Content4 Image:
          <input type="text" value={formData.Content4Image} onChange={handleChange} id="Content4Image" />
        </div>

        <div className='EditContentContainerButton'>
          <Link to='/admin' className='TopAlertEditlink'>Back</Link>
          <button type='submit' className='TopAlertEditlink'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default GlobalNetworkEdit
