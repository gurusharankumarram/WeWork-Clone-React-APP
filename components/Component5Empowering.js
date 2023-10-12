import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Component5Empowering.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Component5Empowering = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/EmpoweringTomorrow")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((d, i) => (
        <div className="Component5Container">

          <div className="Component5ContainerText">
            <div className="Component5ContainerText1">
              <h2>{d.Component5ContainerText1H2}</h2>
              <p>{d.Component5ContainerText1P}</p>
            </div>
            <div className="Component5ContainerTextViewMore">
              {d.Component5ContainerTextViewMore} <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="Component5ContainerCards">
            <div className="Component5ContainerCard">
              <img src={d.Component5ContainerCard1} alt="Microsofr" />
            </div>
            <div className="Component5ContainerCard">
              <img src={d.Component5ContainerCard2} alt="Pfizer" />
            </div>
            <div className="Component5ContainerCard">
              <img src={d.Component5ContainerCard3} alt="Samsung" />
            </div>
            <div className="Component5ContainerCard">
              <img src={d.Component5ContainerCard4} alt="Salesforce" />
            </div>
            <div className="Component5ContainerCard">
              <img src={d.Component5ContainerCard5} alt="VISA" />
            </div>
            <div className="Component5ContainerCard">
              <img src={d.Component5ContainerCard6} alt="ZOOM" />
            </div>
          </div>

          <div className="Component5ContainerCardsMobile">
            <div className="Component5ContainerCardsMobiles">
              <div className="Component5ContainerCardMobile">
                <img src={d.Component5ContainerCard1} alt="Microsofr" />
              </div>
              <div className="Component5ContainerCardMobile">
                <img src={d.Component5ContainerCard2} alt="Pfizer" />
              </div>
            </div>
            <div className="Component5ContainerCardsMobiles">
              <div className="Component5ContainerCardMobile">
                <img src={d.Component5ContainerCard3} alt="Samsung" />
              </div>
              <div className="Component5ContainerCardMobile">
                <img src={d.Component5ContainerCard4} alt="Salesforce" />
              </div>
            </div>
            <div className="Component5ContainerCardsMobiles">
              <div className="Component5ContainerCardMobile">
                <img src={d.Component5ContainerCard5} alt="VISA" />
              </div>
              <div className="Component5ContainerCardMobile">
                <img src={d.Component5ContainerCard6} alt="ZOOM" />
              </div>
            </div>
          </div>

          <div className="Component5ContainerTextViewMoreMobile">
            View more <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Component5Empowering;
