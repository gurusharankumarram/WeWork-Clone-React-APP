import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SliderForm.css';


const SliderForm = () => {
  const [selectedLocation, setSelectedLocation] = useState('Delhi');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Location:', selectedLocation);
  };

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/SliderForm")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      {data.map((d, i) => (
        <div className="slider-form-container" key={i}>
          <h1 className="slider-form-title" id='sliderformtitle'>{d.SliderFormTitle}</h1>
          <p className="slider-form-description">{d.SliderFormDescription}</p>
          <form className="slider-form" onSubmit={handleSubmit}>
            <div className="form-item">
              <label className="location-label" htmlFor="locations-dropdown">{d.LocationLabel}</label>
              <div className="select-container">
                <span className="select-icon">
                  <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                    <title>pin</title>
                    <path d="M6 16S0 9.312 0 6a6 6 0 0 1 12 0c0 3.313-6 10-6 10zM6 1a5 5 0 0 0-5 5c0 2.761 5 8.499 5 8.499S11 8.761 11 6a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z">
                    </path>
                  </svg>
                </span>
                <select id="locations-dropdown" value={selectedLocation} onChange={handleLocationChange}>
                  <option value="Delhi">{d.LocationsDropdownOption1}</option>
                  <option value="Gurgaon">{d.LocationsDropdownOption2}</option>
                  <option value="Patna">{d.LocationsDropdownOption3}</option>
                  <option value="Noida">{d.LocationsDropdownOption4}</option>
                </select>
              </div>
            </div>


            <div className="form-item">
              <button type="submit" className="submit-button">
                Start
              </button>
            </div>
          </form>
        </div>
      ))}
    </>
  );
};

export default SliderForm;
