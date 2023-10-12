import React from 'react';
import './Content1.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Content1 = () => {
  return (
    <div className="Content1-content-container">
      <div className="Content1-image-container">
        <img
          className="Content1-content-image"
          src="https://ctfassets.imgix.net/vh7r69kgcki3/4loHLz4ATsoKXI92LVLzml/a8adcbd1de700f7545875713176474ce/Web_150DPI-2023_04_15_ATL_Lifestyle_Hot_Desk_01855.jpg?auto=format%20compress&fit=crop&q=50&w=500px"
          alt="Content1-contentImage"
        />
      </div>
      <div className="Content1-text-container">
        <span className="Content1-promo-tag">INTRODUCTORY PRICING</span>
        <h2 className="Content1-title">Get 15% off WeWork All Access with this special offer</h2>
        <p className="Content1-description">Unlock workspace near you with 15% off WeWork All Access monthly membership fees for 6 months. Terms apply.</p>
        {/* <a href="/solutions/wework-all-access" className="Content1-learn-more-link" aria-label="Learn more"> Learn more</a> */}
        <a href="/solutions/wework-all-access" className="Content1-learn-more-link" aria-label="Learn more"> Learn more
          <FontAwesomeIcon icon={["fas", "arrow-right"]} style={{ color: "#0000ff" }} />
        </a>
      </div>
    </div>
  );
};

export default Content1;
