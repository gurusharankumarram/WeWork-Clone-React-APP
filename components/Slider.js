// import React, { useState } from "react";
// import './Slider.css';
// // Import Font Awesome CSS in your component or a global CSS file
// import 'font-awesome/css/font-awesome.min.css';

// function Slider() {
//   const [counter, setCounter] = useState(0);
//   const pictures = [
//     "1.1",
//     "1.2",
//     "1.3",
//     "1.4",
//   ];

//   const handleNextClick = () => {
//     setCounter((prevCounter) => {
//       if (prevCounter >= pictures.length - 1) {
//         return 0;
//       } else {
//         return prevCounter + 1;
//       }
//     });
//   };

//   return (
//     <div className="img-container">
//       <div className="img-box">
//         <img src={`./image/${pictures[counter]}.jpg`} alt={pictures[counter]} />
//       </div>
//       <button className="btn btn-right" onClick={handleNextClick}>
//         <i className="fas fa-caret-right"></i>
//       </button>
//     </div>

//   );
// }

// export default Slider;

import React, { useState } from "react";
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  const [counter, setCounter] = useState(0);
  const pictures = [
    "1.1",
    "1.2",
    "1.3",
    "1.4",
  ];

  const handleNextClick = () => {
    setCounter((prevCounter) => {
      if (prevCounter >= pictures.length - 1) {
        return 0;
      } else {
        return prevCounter + 1;
      }
    });
  };

  return (
    <>
      <div className="slider-form-container-h1">
        <h1 className="slider-form-title-h1">For all the ways you work, we're here</h1>
      </div>

      <div className="img-container">
        <div className="img-box">
          <img src={`./image/${pictures[counter]}.jpg`} alt={pictures[counter]} />
        </div>
        <button className="btn btn-right" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} className="custom-fa-icon" />
        </button>
      </div>
    </>
  );
}

export default Slider;
