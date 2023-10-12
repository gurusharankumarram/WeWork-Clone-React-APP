import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const EmpoweringTomorrowEdit = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Component5ContainerText1H2: '',
    Component5ContainerText1P: '',
    Component5ContainerTextViewMore: '',
    Component5ContainerCard1: '',
    Component5ContainerCard2: '',
    Component5ContainerCard3: '',
    Component5ContainerCard4: '',
    Component5ContainerCard5: '',
    Component5ContainerCard6: '',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/EmpoweringTomorrow")
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
    axios.put('http://localhost:5000/EmpoweringTomorrow/10', formData)
      .then(res => {
        alert('data updated successfully....')
        navigate('/admin')
      })
  };


  return (
    <div className='EmpoweringTomorrowEditContentContainer'>
      <form onSubmit={handleSubmit}>

        <h3 className='EditContentContainerHeading'>EmpoweringTomorrow Details #component5 </h3>

        <div className='EditContentContainerText'>Component5 Container Text1 H2:
          <input type="text" value={formData.Component5ContainerText1H2} onChange={handleChange} id="Component5ContainerText1H2" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Component5 Container Text1 P:
          <input type="text" value={formData.Component5ContainerText1P} onChange={handleChange} id="Component5ContainerText1P" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Component5 Container Text ViewMore:
          <input type="text" value={formData.Component5ContainerTextViewMore} onChange={handleChange} id="Component5ContainerTextViewMore" />
        </div>

        <div className='EmpoweringTomorrowEditContentContainer1'>
          <div className='EditContentContainerCompanyName'>
            Component5 Container Card1:
            <input type="text" value={formData.Component5ContainerCard1} onChange={handleChange} id="Component5ContainerCard1" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component5 Container Card2:
            <input type="text" value={formData.Component5ContainerCard2} onChange={handleChange} id="Component5ContainerCard2" />
          </div>

          <div className='EditContentContainerCompanyName'>
            Component5 Container Card3:
            <input type="text" value={formData.Component5ContainerCard3} onChange={handleChange} id="Component5ContainerCard3" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component5 Container Card4:
            <input type="text" value={formData.Component5ContainerCard4} onChange={handleChange} id="Component5ContainerCard4" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component5 Container Card5:
            <input type="text" value={formData.Component5ContainerCard5} onChange={handleChange} id="Component5ContainerCard5" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component5 Container Card6:
            <input type="text" value={formData.Component5ContainerCard6} onChange={handleChange} id="Component5ContainerCard6" />
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

export default EmpoweringTomorrowEdit
