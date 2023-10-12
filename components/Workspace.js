// import React from 'react';
// import './Workspace.css';

// const Workspace = () => {
//   return (
//     <div className="workspace-container">
//       <div className="workspace-card">
//         <img src="image1.jpg" alt="Workspace 1" className="workspace-image" />
//         <h2 className="workspace-title">Private Office</h2>
//         <p className="workspace-description">Move-in ready offices for teams of all sizes</p>
//         <div className="workspace-team-size">Team Size: 1-100+</div>
//       </div>
//       <div className="workspace-card">
//         <img src="image2.jpg" alt="Workspace 2" className="workspace-image" />
//         <h2 className="workspace-title">Dedicated Desk</h2>
//         <p className="workspace-description">Your own desk in a shared office</p>
//         <div className="workspace-team-size">Team Size: 1-4</div>
//       </div>
//       <div className="workspace-card">
//         <img src="image3.jpg" alt="Workspace 3" className="workspace-image" />
//         <h2 className="workspace-title">Meeting Room</h2>
//         <p className="workspace-description">Private rooms bookable by the hour</p>
//         <div className="workspace-team-size">Team Size: 1-20</div>
//       </div>
//       <div className="workspace-card">
//         <img src="image4.jpg" alt="Workspace 4" className="workspace-image" />
//         <h2 className="workspace-title">Coworking Membership</h2>
//         <p className="workspace-description">Hot desks, lounges, phone booths & more</p>
//         <div className="workspace-team-size">Team Size: 1+</div>
//       </div>
//     </div>
//   );
// };

// export default Workspace;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserTie } from '@fortawesome/free-solid-svg-icons';
// import './Workspace.css';

// const Workspace = () => {
//   return (
//     <div className="workspace-container">
//       <div className="workspace-card">
//         <img src="image1.jpg" alt="Workspace 1" className="workspace-image" />
//         <h2 className="workspace-title">Private Office</h2>
//         <p className="workspace-description">Move-in ready offices for teams of all sizes</p>
//         <div className="workspace-team-size">
//           <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
//           Team Size: 1-100+
//         </div>
//       </div>
//       <div className="workspace-card">
//         <img src="image2.jpg" alt="Workspace 2" className="workspace-image" />
//         <h2 className="workspace-title">Dedicated Desk</h2>
//         <p className="workspace-description">Your own desk in a shared office</p>
//         <div className="workspace-team-size">
//           <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
//           Team Size: 1-4
//         </div>
//       </div>
//       <div className="workspace-card">
//         <img src=".\MeetingRooms.png" alt="Workspace 3" className="workspace-image" />
//         <h2 className="workspace-title">Meeting Room</h2>
//         <p className="workspace-description">Private rooms bookable by the hour</p>
//         <div className="workspace-team-size">
//           <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
//           Team Size: 1-20
//         </div>
//       </div>
//       <div className="workspace-card">
//         <img src="image4.jpg" alt="Workspace 4" className="workspace-image" />
//         <h2 className="workspace-title">Coworking Membership</h2>
//         <p className="workspace-description">Hot desks, lounges, phone booths & more</p>
//         <div className="workspace-team-size">
//           <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
//           Team Size: 1+
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workspace;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Workspace.css';

const Workspace = () => {
  return (
    <div>

      <div className="workspace-header">
        <h3 className="left-text">What are you looking for?</h3>

        <div className="right-text">
          View all solutions <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
        </div>

      </div>

      <div className="workspace-container">
        <div className="workspace-card">
          <div className="image-container">
            <img src="image/PrivateOffice.png" alt="Workspace 1" className="workspace-image" />
          </div>
          <div className="workspace-details">
            <h2 className="workspace-title">Private Office</h2>
            <p className="workspace-description">Move-in ready offices for teams of all sizes</p>
            <div className="workspace-team-size">
              <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
              : 1-100+
            </div>
          </div>
        </div>

        <div className="workspace-card">
          <div className="image-container">
            <img src="image/DedicatedDesk.png" alt="Workspace 2" className="workspace-image" />
          </div>
          <div className="workspace-details">
            <h2 className="workspace-title">Dedicated Desk</h2>
            <p className="workspace-description">Your own desk in a shared office</p>
            <div className="workspace-team-size">
              <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
              : 1-4
            </div>
          </div>
        </div>

        <div className="workspace-card">
          <div className="image-container">
            <img src="image\MeetingRooms.png" alt="Workspace 3" className="workspace-image" />
          </div>
          <div className="workspace-details">
            <h2 className="workspace-title">Meeting Room</h2>
            <p className="workspace-description">Private rooms bookable by the hour</p>
            <div className="workspace-team-size">
              <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
              : 1-20
            </div>
          </div>
        </div>

        <div className="workspace-card">
          <div className="image-container">
            <img src="image/AllAccess.png" alt="Workspace 4" className="workspace-image" />
          </div>
          <div className="workspace-details">
            <h2 className="workspace-title">Coworking Membership</h2>
            <p className="workspace-description">Hot desks, lounges, phone booths & more</p>
            <div className="workspace-team-size">
              <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
              : 1+
            </div>
          </div>
        </div>
      </div>
      <div className="right-text-mobile">
        View all solutions <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
      </div>
    </div>
  );
};

export default Workspace;
