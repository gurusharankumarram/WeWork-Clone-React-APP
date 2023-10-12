import './Content1.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content1 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/SpecialOffer")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      {data.map((d, i) => (
        <div className="Content1-content-container" key={i}>
          <div className="Content1-image-container">
            <img
              className="Content1-content-image"
              src={d.Content1ContentImage}
              alt="Content1-contentImage"
            />
          </div>
          <div className="Content1-text-container">
            <span className="Content1-promo-tag">{d.Content1PromoTag}</span>
            <h2 className="Content1-title">{d.Content1Title}</h2>
            <p className="Content1-description">{d.Content1Description}</p>
            <a href="/solutions/wework-all-access" className="Content1-learn-more-link" aria-label="Learn more"> {d.Content1LearnMoreLink}
              <FontAwesomeIcon icon={["fas", "arrow-right"]} style={{ color: "#0000ff" }} />
            </a>
          </div>
        </div>
      ))};
    </>
  );
};

export default Content1;
