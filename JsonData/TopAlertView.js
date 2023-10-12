import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './TopAlertView.css';

const TopAlertView = () => {

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:5000/TopAlert")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>

      {data.map((d, i) => (
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded' key={i}>
          <h3 className='text-center mb-4'>Top Alert Details</h3>

          <div className='mb-2'>
            Top Alert Text: <strong>{d.customPageAlertText}</strong>
          </div>

          <div className='mb-2'>
            Top Alert Company Name: <strong>{d.customPageAlertCompanyName}</strong>
          </div>
          <div className='TopAlertEditlink-container'>
            <Link to='/topalertedit' className='TopAlertEditlink'>Edit</Link>
            <Link to='/admin' className='TopAlertEditlink'>Back</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopAlertView
