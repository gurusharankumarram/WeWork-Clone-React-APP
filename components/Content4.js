import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Content4.css';

const Content4 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/GlobalNetwork")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {data.map((d, i) => (
                <div className="Content4-content-container" key={i}>
                    <div className="Content4-text-container">
                        <div className="Content4-header">{d.Content4Header}</div>
                        <div className="Content4-title">{d.Content4Title}</div>
                        <div className="Content4-discription">{d.Content4Discription}</div>
                        <a href="/locations" id="Content4-location" className="Content4-location" data-conditions-to-show="" aria-label="Explore locations">{d.Component4ExploreLocations}
                            <FontAwesomeIcon icon={faArrowRight} className='Content4-location-icon' />
                        </a>
                    </div>
                    <div className="Content4-image-container">
                        <img src={d.Content4Image} alt="Content4 Image"/>
                    </div>
                </div>
            ))}
        </>
    );
};
export default Content4;