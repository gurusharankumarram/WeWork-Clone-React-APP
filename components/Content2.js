import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Content2.css';

const Content2 = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImageKey, setSelectedImageKey] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleImageChange = () => {
    setSelectedImageKey((prevKey) => prevKey + 1);
  };

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/SolutionsForBusinesses")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getSelectedImageUrl = () => {
    if (selectedTab === 0) {
      return data.length > 0 ? data[0].selectedTab0Image : '';
    } else {
      return data.length > 0 ? data[0].selectedTab1Image : '';
    }
  };
  const selectedImage = getSelectedImageUrl();

  return (
    <>
      <div className="content2-container">
        <div className="content2-page">
          {data.map((d, i) => (
            <div className="content2-grid" key={i}>
              <div className="content2-content">
                <div className="content2-description">
                  <h2 className="content2-title">{d.content2Title}</h2>
                  <content2nav>
                    <ul className="content2-tabs">
                      <li className={`content2-tab1 ${selectedTab === 0 ? 'active-tab' : ''}`} data-index="0" onClick={() => handleTabClick(0)}>
                        {d.content2Tab1}
                      </li>
                      <li className={`content2-tab2 ${selectedTab === 1 ? 'active-tab' : ''}`} data-index="1" onClick={() => handleTabClick(1)} >
                        {d.content2Tab2}
                      </li>
                    </ul>
                  </content2nav>
                  <div className="content2-card">
                    <div className={`content2-card-item ${selectedTab === 0 ? 'active' : ''}`} data-index="0">
                      <p className="content2-text" onClick={handleImageChange}>{d.content2Tab1Text1}</p>
                      <p className="content2-learn-more"><a href="/whywework">{d.content2LearnMore}</a></p>
                    </div>

                    <div className={`content2-card-item ${selectedTab === 1 ? 'active' : ''}`} data-index="1">
                      <p className="content2-text">{d.content2Tab1Ttext2}</p>
                      <p className="content2-learn-more"><a href="/flexibility">{d.content2LearnMore}</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content2-img-container">
                <img src={selectedImage} alt="ProductImage" className="content2-img" key={selectedImageKey} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content2;

