import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/Slider")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const images = data.length > 0 ? data[0] : {};

  const pictureKeys = Object.keys(images).filter(key => key.startsWith('SliderImage'));
  const pictureUrls = pictureKeys.map(key => images[key]);

  const handleNextClick = () => {
    setCounter((prevCounter) => {
      if (prevCounter >= pictureUrls.length - 1) {
        return 0;
      } else {
        return prevCounter + 1;
      }
    });
  };

  return (
    <>
      <div className="img-container">
        <div className="img-box">
          <img src={pictureUrls[counter]} alt={`Image ${counter + 1}`} />
        </div>
        <button className="btn btn-right" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} className="custom-fa-icon" />
        </button>
      </div>
    </>
  );
}

export default Slider;
