import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const WorkspaceTrendsEdit = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Component6ContainerText1P: '',
    Component6ContainerText1H1: '',
    Component6ContainerTextViewMore: '',
    Content6ContentImage: '',
    Component6ContainerText2P1: '',
    Component6ContainerText2H2: '',
    Component6ContainerText2P2: '',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/WorkspaceTrends")
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
    axios.put('http://localhost:5000/WorkspaceTrends/11', formData)
      .then(res => {
        alert('data updated successfully....')
        navigate('/admin')
      })
  };

  return (
    <div className='WorkspaceTrendsEditContentContainer'>
      <form onSubmit={handleSubmit}>

        <h3 className='EditContentContainerHeading'>Workspace Trends Details #component6 </h3>

        <div className='EditContentContainerText'>Component6 Container Text1 P:
          <input type="text" value={formData.Component6ContainerText1P} onChange={handleChange} id="Component6ContainerText1P" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Component6 Container Text1 H1:
          <input type="text" value={formData.Component6ContainerText1H1} onChange={handleChange} id="Component6ContainerText1H1" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Component6 Container Text ViewMore:
          <input type="text" value={formData.Component6ContainerTextViewMore} onChange={handleChange} id="Component6ContainerTextViewMore" />
        </div>

        <div className='EditContentContainerCompanyName'>
          Content6 Content Image:
          <input type="text" value={formData.Content6ContentImage} onChange={handleChange} id="Content6ContentImage" />
        </div>

        <div className='WorkspaceTrendsEditContentContainer1'>
          <div className='EditContentContainerCompanyName'>
            Component6 Container Text2 P1:
            <input type="text" value={formData.Component6ContainerText2P1} onChange={handleChange} id="Component6ContainerText2P1" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component6 Container Text2 H2:
            <input type="text" value={formData.Component6ContainerText2H2} onChange={handleChange} id="Component6ContainerText2H2" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component6 Container Text2 P2:
            <input type="text" value={formData.Component6ContainerText2P2} onChange={handleChange} id="Component6ContainerText2P2" />
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

export default WorkspaceTrendsEdit
