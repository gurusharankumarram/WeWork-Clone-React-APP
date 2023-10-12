import React, { useEffect, useState } from 'react';
import './TopAlert.css';
import axios from 'axios';

const TopAlert = () => {
    const [data, setData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:5000/TopAlert")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
    return (
        <div className="custom-alert-container">
            <a href="https://wework.co.in/" className="custom-page-alert">
                <div className="custom-page-container">
                {data.map((d, i) => (
                    <div className="custom-page-alert-text" key={i}>
                        {d.customPageAlertText}
                        <span className="custom-page-alert-CompanyName"><u>{d.customPageAlertCompanyName}</u></span>
                    </div>
                    ))}
                </div>
            </a>
        </div>
    );
}

export default TopAlert;
