// import React, { useState } from 'react';
// import './SliderForm.css'; // Create a CSS file for styling
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const SliderForm = () => {
//   // Define state variables for selected location and capacity
//   const [selectedLocation, setSelectedLocation] = useState('Delhi'); // Set Delhi as the default location

//   // Handle location selection
//   const handleLocationChange = (e) => {
//     setSelectedLocation(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any actions here, like making an API call or navigating to a new page
//     console.log('Selected Location:', selectedLocation);
//   };

//   return (
//     <div className="slider-form-container">
//       <h1 className="slider-form-title">For all the ways you work, we're here</h1>
//       <p className="slider-form-description">
//         Find a location near you. Explore memberships and move-in ready offices for individuals or companies of all sizes.
//       </p>
//       <form className="slider-form" onSubmit={handleSubmit}>
//         <div className="form-item">
//           <label htmlFor="locations-dropdown">
//             <FontAwesomeIcon icon={faMapMarkerAlt} /> Find Workspace In
//           </label>
//           <select
//             id="locations-dropdown"
//             value={selectedLocation}
//             onChange={handleLocationChange}
//           >
//             {/* Add your location options here */}
//             <option value="Delhi">Delhi</option>
//             <option value="Gurgaon">Gurgaon</option>
//             <option value="Patna">Patna</option>
//             <option value="Noida">Noida</option>
//           </select>
//         </div>
//         <div className="form-item">
//           <button type="submit" className="submit-button">
//             Start
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SliderForm;

// import React, { useState } from 'react';
// import './SliderForm.css'; // Import the CSS file for styling
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const SliderForm = () => {
//   // Define state variables for selected location and capacity
//   const [selectedLocation, setSelectedLocation] = useState('Delhi'); // Set Delhi as the default location

//   // Handle location selection
//   const handleLocationChange = (e) => {
//     setSelectedLocation(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any actions here, like making an API call or navigating to a new page
//     console.log('Selected Location:', selectedLocation);
//   };

//   return (
//     <div className="slider-form-container">
//       <h1 className="slider-form-title">For all the ways you work, we're here</h1>
//       <p className="slider-form-description">
//         Find a location near you. Explore memberships and move-in ready offices for individuals or companies of all sizes.
//       </p>
//       <form className="slider-form" onSubmit={handleSubmit}>

//         <div className="form-item">
//           <label htmlFor="locations-dropdown">
//             <span className="select-icon">
//               <FontAwesomeIcon icon={faMapMarkerAlt} />
//             </span>
//             Find Workspace In
//           </label>
//           <select id="locations-dropdown" value={selectedLocation} onChange={handleLocationChange}>
//             {/* Add your location options here */}
//             <option value="Delhi">Delhi</option>
//             <option value="Gurgaon">Gurgaon</option>
//             <option value="Patna">Patna</option>
//             <option value="Noida">Noida</option>
//           </select>
//         </div>

//         <div className="form-item">
//           <button type="submit" className="submit-button">
//             Start
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SliderForm;



import React, { useState } from 'react';
import './SliderForm.css'; // Import the CSS file for styling
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SliderForm = () => {
  // Define state variables for selected location and capacity
  const [selectedLocation, setSelectedLocation] = useState('Delhi'); // Set Delhi as the default location

  // Handle location selection
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions here, like making an API call or navigating to a new page
    console.log('Selected Location:', selectedLocation);
  };

  return (
    <div className="slider-form-container">
      <h1 className="slider-form-title">For all the ways you work, we're here</h1>
      <p className="slider-form-description">
        Find a location near you. Explore memberships and move-in ready offices for individuals or companies of all sizes.
      </p>
      <form className="slider-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label className="location-label" htmlFor="locations-dropdown">
            Find Workspace In
          </label>
          <div className="select-container">
            <span className="select-icon">
              {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
              <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                        <title>pin</title>
                        <path d="M6 16S0 9.312 0 6a6 6 0 0 1 12 0c0 3.313-6 10-6 10zM6 1a5 5 0 0 0-5 5c0 2.761 5 8.499 5 8.499S11 8.761 11 6a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z">
                        </path>
                      </svg>
            </span>
            <select id="locations-dropdown" value={selectedLocation} onChange={handleLocationChange}>
              {/* Add your location options here */}
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Patna">Patna</option>
              <option value="Noida">Noida</option>
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
  );
};

export default SliderForm;
