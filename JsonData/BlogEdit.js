import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const BlogEdit = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Component7ContainerBlogTextP1: '',
    Component7ContainerBlogTextH2: '',
    Component7ContainerBlogTextP2: '',
    Component7ContainerBlogTextI1: '',
    Component7ContainerBlogTextP12: '',
    Component7ContainerBlogTextH22: '',
    Component7ContainerBlogTextP22: '',
    Component7ContainerBlogTextI2: '',
    Component7ContainerBlogTextP13: '',
    Component7ContainerBlogTextH23: '',
    Component7ContainerBlogTextP23: '',
    Component7ContainerBlogTextI3: '',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/Blog")
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
    axios.put('http://localhost:5000/Blog/12', formData)
      .then(res => {
        alert('data updated successfully....')
        navigate('/admin')
      })
  };

  return (
    <div className='BlogEditContentContainer'>
      <form onSubmit={handleSubmit}>

        <h3 className='EditContentContainerHeading'>Blog Details #component7 </h3>

        <div className='BlogEditContentContainer1'>
          <div className='EditContentContainerCompanyName'>
            Component7Container BlogText Image1:
            <input type="text" value={formData.Component7ContainerBlogTextI1} onChange={handleChange} id="Component7ContainerBlogTextI1" />
          </div>
          <div className='EditContentContainerText'>Component7Container Blog TextP1:
            <input type="text" value={formData.Component7ContainerBlogTextP1} onChange={handleChange} id="Component7ContainerBlogTextP1" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextH2:
            <input type="text" value={formData.Component7ContainerBlogTextH2} onChange={handleChange} id="Component7ContainerBlogTextH2" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextP2:
            <input type="text" value={formData.Component7ContainerBlogTextP2} onChange={handleChange} id="Component7ContainerBlogTextP2" />
          </div>
        </div>


        <div className='BlogEditContentContainer2'>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog Text Image2:
            <input type="text" value={formData.Component7ContainerBlogTextI2} onChange={handleChange} id="Component7ContainerBlogTextI2" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextP12:
            <input type="text" value={formData.Component7ContainerBlogTextP12} onChange={handleChange} id="Component7ContainerBlogTextP12" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextH22:
            <input type="text" value={formData.Component7ContainerBlogTextH22} onChange={handleChange} id="Component7ContainerBlogTextH22" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextP22:
            <input type="text" value={formData.Component7ContainerBlogTextP22} onChange={handleChange} id="Component7ContainerBlogTextP22" />
          </div>
        </div>

        <div className='BlogEditContentContainer3'>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog Text Image3:
            <input type="text" value={formData.Component7ContainerBlogTextI3} onChange={handleChange} id="Component7ContainerBlogTextI3" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextP13:
            <input type="text" value={formData.Component7ContainerBlogTextP13} onChange={handleChange} id="Component7ContainerBlogTextP13" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextH23:
            <input type="text" value={formData.Component7ContainerBlogTextH23} onChange={handleChange} id="Component7ContainerBlogTextH23" />
          </div>
          <div className='EditContentContainerCompanyName'>
            Component7Container Blog TextP23:
            <input type="text" value={formData.Component7ContainerBlogTextP23} onChange={handleChange} id="Component7ContainerBlogTextP23" />
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

export default BlogEdit
