import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Workspace.css';
import axios from 'axios';

const Workspace = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/WorkSpace")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((d, i) => (
        <div key={i}>
          <div className="workspace-header">
            <h3 className="left-text">{d.leftText}</h3>
            <div className="right-text">
              {d.rightText} <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
            </div>
          </div>

          <div className="workspace-container">
            <div className="workspace-card">
              <div className="image-container">
                <img src="image/PrivateOffice.png" alt="Workspace 1" className="workspace-image" />
              </div>
              <div className="workspace-details">
                <h2 className="workspace-title">{d.workspaceTitle1}</h2>
                <p className="workspace-description">{d.workspaceDescription1}</p>
                <div className="workspace-team-size">
                  <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
                  {d.workspaceTeamSize1}
                </div>
              </div>
            </div>

            <div className="workspace-card">
              <div className="image-container">
                <img src="image/DedicatedDesk.png" alt="Workspace 2" className="workspace-image" />
              </div>
              <div className="workspace-details">
                <h2 className="workspace-title">{d.workspaceTitle2}</h2>
                <p className="workspace-description">{d.workspaceDescription2}</p>
                <div className="workspace-team-size">
                  <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
                  {d.workspaceTeamSize2}
                </div>
              </div>
            </div>

            <div className="workspace-card">
              <div className="image-container">
                <img src="image\MeetingRooms.png" alt="Workspace 3" className="workspace-image" />
              </div>
              <div className="workspace-details">
                <h2 className="workspace-title">{d.workspaceTitle3}</h2>
                <p className="workspace-description">{d.workspaceDescription3}</p>
                <div className="workspace-team-size">
                  <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
                  {d.workspaceTeamSize3}
                </div>
              </div>
            </div>

            <div className="workspace-card">
              <div className="image-container">
                <img src="image/AllAccess.png" alt="Workspace 4" className="workspace-image" />
              </div>
              <div className="workspace-details">
                <h2 className="workspace-title">{d.workspaceTitle4}</h2>
                <p className="workspace-description">{d.workspaceDescription4}</p>
                <div className="workspace-team-size">
                  <FontAwesomeIcon icon={faUserTie} style={{ color: "#000000" }} />
                  {d.workspaceTeamSize4}
                </div>
              </div>
            </div>
          </div>
          <div className="right-text-mobile">
          {d.rightText} <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Workspace;
