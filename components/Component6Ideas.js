import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Component6Ideas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Component6Ideas = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/WorkspaceTrends")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <>
            {data.map((d, i) => (
                <div className="Component6Container" key={i}>

                    <div className="Component6ContainerText">
                        <div className="Component6ContainerText1">
                            <p className="Component6ContainerText1P">{d.Component6ContainerText1P}</p>
                            <h1 className="Component6ContainerText1H1">{d.Component6ContainerText1H1}</h1>
                        </div>
                        <div className="Component6ContainerTextViewMore">
                            {d.Component6ContainerTextViewMore} <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>

                    <div className="Component6ContainerText2">
                        <div className="Content6-image-container">
                            <img className="Content6-content-image" src={d.Content6ContentImage} alt="Workspace trends and insight" />
                        </div>
                        <div className="Component6ContainerText2Text">
                            <p className="Component6ContainerText2-p1">{d.Component6ContainerText2P1}</p>
                            <h2 className="Component6ContainerText2-h2">{d.Component6ContainerText2H2}</h2>
                            <p className="Component6ContainerText2-p2">{d.Component6ContainerText2P2}</p>
                        </div>
                    </div>

                    <div className="Component6ContainerTextViewMoreMobile">
                        {d.Component6ContainerTextViewMore} <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className='Component6BottomBorder'></div>

                </div>
            ))}
        </>
    )
}

export default Component6Ideas
