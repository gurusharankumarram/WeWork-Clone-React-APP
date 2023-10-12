import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './TopAlertView.css';

const TopAlertView = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const[formData, setFormData]= useState({
    customPageAlertText:'',
    customPageAlertCompanyName:'',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/TopAlert")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    if(data.length>0){
        setFormData(data[0]);
    }
  },[data]);

  const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.id]:e.target.value,
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.put('http://localhost:5000/TopAlert/1',formData)
    .then(res =>{
        alert('data updated successfully....')
        navigate('/admin')
    })
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <form onSubmit={handleSubmit}>

          <h3 className='text-center mb-4'>Top Alert Details</h3>

          <div className='mb-2'>Top Alert Text: 
          <input type="text" value={formData.customPageAlertText} onChange={handleChange} id="customPageAlertText"/>
          </div>

          <div className='mb-2'>
            Top Alert Company Name:
            <input type="text" value={formData.customPageAlertCompanyName} onChange={handleChange} id="customPageAlertCompanyName"/>
          </div>

          <div className='TopAlertEditlink-container'>
            {/* <Link to={`/topalertedit/${d.id}`} className='link'>Edit</Link> */}
            <Link to='/admin' className='TopAlertEditlink'>Back</Link>
            <button type='submit' className='TopAlertEditlink'>Submit</button>
          </div>
          </form>
        </div>


    </div>
  );
};

export default TopAlertView;
