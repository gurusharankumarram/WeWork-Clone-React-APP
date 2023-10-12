// import React from 'react';
// import './Content4.css';

// const Content4 = () => {
//     return (
//         <div className="Content4-content-container">
//             <div className="Content4-text-container">
//                 <div className="Content4-header">Global network</div>
//                 <div className="Content4-title">Workspace where and when you need it</div>
//                 <div className="Content4-discription">With over 700 global locations, teams can do their best work in more places, whether it’s being productive closer to home, having access to multiple workspaces, or collaborating at a central office.</div>
//                 <a href="/locations" id="Content4-location" className="Content4-location" data-conditions-to-show="" aria-label="Explore locations">Explore locations</a>
//             </div>

//             <div className="image-container">
//                 <img
//                     src="https://ctfassets.imgix.net/vh7r69kgcki3/5zgqBvLQ7hx0Pr7Ld6z0Uo/cee7093a699e20d6c39c38c72877e623/Web_150DPI-ww-locations-map_April-2019__1_-01.jpg?auto=format%20compress&fit=crop&q=50&w=1200&h=675"
//                     alt="Image"
//                     // style={{ maxWidth: '40%', height: 'auto' }}
//                 />
//             </div>

//         </div>
//     );
// };

// export default Content4;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Content4.css';

const Content4 = () => {
    return (
        <div className="Content4-content-container">
            <div className="Content4-text-container">
                <div className="Content4-header">Global network</div>
                <div className="Content4-title">Workspace where and when you need it</div>
                <div className="Content4-discription">With over 700 global locations, teams can do their best work in more places, whether it’s being productive closer to home, having access to multiple workspaces, or collaborating at a central office.</div>
                <a href="/locations" id="Content4-location" className="Content4-location" data-conditions-to-show="" aria-label="Explore locations">Explore locations
                    <FontAwesomeIcon icon={faArrowRight} className='Content4-location-icon'/>
                </a>
            </div>
            <div className="Content4-image-container">
                <img
                    src="https://ctfassets.imgix.net/vh7r69kgcki3/5zgqBvLQ7hx0Pr7Ld6z0Uo/cee7093a699e20d6c39c38c72877e623/Web_150DPI-ww-locations-map_April-2019__1_-01.jpg?auto=format%20compress&fit=crop&q=50&w=1200&h=675"
                    alt="Image of location"
                />
            </div>
        </div>
    );
};
export default Content4;