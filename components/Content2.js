// import React from 'react';
// import './Content2.css';

// const Content2 = () => {
//   return (
//     <div className="content2-container">

//       <div className="content2-page">

//         <div className="content2-grid">

//           <div className="content2-content">

//             <div className="content2-description">
//               <h2 className="content2-title">Solutions for businesses of all sizes</h2>
//               <nav>
//                 <ul className="content2-tabs">
//                   <li className="content2-tab1" data-index="0">For individuals/small teams</li>
//                   <li className="content2-tab2" data-index="1">For medium/large companies</li>
//                 </ul>
//               </nav>

//               <div className="content2-card">
//                 <div className="content2-card-item active" data-index="0">
//                   <p className="content2-text">Flexible memberships and turnkey offices that fit all budgets and hybrid strategies. Find space to focus and collaborate at hundreds of locations close to home or around the world.</p>
//                   <p className="content2-learn-more"><a href="/whywework">Learn more</a></p>
//                 </div>

//                 <div className="content2-card-item" data-index="1">
//                   <p className="content2-text">Power your hybrid strategy, enhance employee experience and save on real estate costs by combining private office, coworking, and software solutions.</p>
//                   <p className="content2-learn-more"><a href="/flexibility">Learn more</a></p>
//                 </div>
                
//               </div>
//             </div>
//           </div>
//           <div className="content2-img-container">
//             <img
//               src="https://ctfassets.imgix.net/vh7r69kgcki3/3JmE8nqDzhWqtltmCZxk9s/6f1486080c47f60696fc2ff5bc3b12bf/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_15.jpg?auto=format%20compress&amp;fit=crop&amp;q=50&amp;w=1000&amp;h=1333"
//               alt="Product Image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content2;


import React, { useState } from 'react';
import './Content2.css';

const Content2 = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize the selectedTab state with 0
  const [selectedImageKey, setSelectedImageKey] = useState(0); // Initialize the image key state

  const handleTabClick = (index) => {
    setSelectedTab(index); // Update the selectedTab state when an <li> is clicked
  };

  const handleImageChange = () => {
    // Change the image key to trigger a re-render when the text is clicked
    setSelectedImageKey((prevKey) => prevKey + 1);
  };

  const selectedImage =
    selectedTab === 0
      ? 'https://ctfassets.imgix.net/vh7r69kgcki3/3JmE8nqDzhWqtltmCZxk9s/6f1486080c47f60696fc2ff5bc3b12bf/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_15.jpg?auto=format%20compress&fit=crop&q=50&w=1000&h=1333'
      : 'https://ctfassets.imgix.net/vh7r69kgcki3/26TzoOG2rJL8pR7WngRghr/b8c2ea28d805ab00a2e331e5705f5100/Web_150DPI-Andrea_Calo_609Main_17856__1_.jpg?auto=format%20compress&fit=crop&q=50&w=1350&h=1800';

  return (
    <div className="content2-container">
      <div className="content2-page">
        <div className="content2-grid">
          <div className="content2-content">
            <div className="content2-description">
              <h2 className="content2-title">Solutions for businesses of all sizes</h2>
              <content2nav>
                <ul className="content2-tabs">
                  <li
                    className={`content2-tab1 ${selectedTab === 0 ? 'active-tab' : ''}`}
                    data-index="0"
                    onClick={() => handleTabClick(0)} // Call the click event handler
                  >
                    For individuals/small teams
                  </li>
                  <li
                    className={`content2-tab2 ${selectedTab === 1 ? 'active-tab' : ''}`}
                    data-index="1"
                    onClick={() => handleTabClick(1)} // Call the click event handler
                  >
                    For medium/large companies
                  </li>
                </ul>
              </content2nav>
              <div className="content2-card">
                <div className={`content2-card-item ${selectedTab === 0 ? 'active' : ''}`} data-index="0">
                  <p className="content2-text" onClick={handleImageChange}>
                    Flexible memberships and turnkey offices that fit all budgets and hybrid strategies.
                    Find space to focus and collaborate at hundreds of locations close to home or around the world.
                  </p>
                  <p className="content2-learn-more"><a href="/whywework">Learn more</a></p>
                </div>

                <div className={`content2-card-item ${selectedTab === 1 ? 'active' : ''}`} data-index="1">
                  <p className="content2-text">
                    Power your hybrid strategy, enhance employee experience and save on real estate costs by
                    combining private office, coworking, and software solutions.
                  </p>
                  <p className="content2-learn-more"><a href="/flexibility">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="content2-img-container">
            <img
              src={selectedImage}
              alt="ProductImage"
              className="content2-img"
              key={selectedImageKey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;

