import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const SliderFormEdit = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    SliderFormTitle: '',
    SliderFormDescription: '',
    LocationLabel: '',
    LocationsDropdownOption1: '',
    LocationsDropdownOption2: '',
    LocationsDropdownOption3: '',
    LocationsDropdownOption4: '',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/SliderForm")
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
    axios.put('http://localhost:5000/SliderForm/4', formData)
      .then(res => {
        alert('data updated successfully....')
        navigate('/admin')
      })
  };

  return (
    <div className='SliderFormEditContentContainer'>
      <form onSubmit={handleSubmit}>

        <h3 className='EditContentContainerHeading'>Slider Form Details</h3>

        <div className='EditContentContainerText'>Slider Form Title:
          <input type="text" value={formData.SliderFormTitle} onChange={handleChange} id="SliderFormTitle" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Slider Form Description:
          <input type="text" value={formData.SliderFormDescription} onChange={handleChange} id="SliderFormDescription" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Location Label:
          <input type="text" value={formData.LocationLabel} onChange={handleChange} id="LocationLabel" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Locations Dropdown Option1:
          <input type="text" value={formData.LocationsDropdownOption1} onChange={handleChange} id="LocationsDropdownOption1" />
        </div>
        <div className='EditContentContainerCompanyName'>
          Locations Dropdown Option2:
          <input type="text" value={formData.LocationsDropdownOption2} onChange={handleChange} id="LocationsDropdownOption2" />
        </div>
        <div className='EditContentContainerCompanyName'>
          Locations Dropdown Option3:
          <input type="text" value={formData.LocationsDropdownOption3} onChange={handleChange} id="LocationsDropdownOption3" />
        </div>
        <div className='EditContentContainerCompanyName'>
          Locations Dropdown Option4:
          <input type="text" value={formData.LocationsDropdownOption4} onChange={handleChange} id="LocationsDropdownOption4" />
        </div>

        <div className='EditContentContainerButton'>
          <Link to='/admin' className='TopAlertEditlink'>Back</Link>
          <button type='submit' className='TopAlertEditlink'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SliderFormEdit
