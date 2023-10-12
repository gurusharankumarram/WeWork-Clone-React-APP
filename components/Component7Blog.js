import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Component7Blog.css';

const Component7Blog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/Blog")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {data.map((d, i) => (
                <div className="Component7Container">
                    <div className="Component7ContainerBlog">
                        <div className="Component7ContainerBlog-ImageContainer">
                            <img className="Component7ContainerBlog-Image" src={d.Component7ContainerBlogTextI1} alt="FLEXIBLE PRODUCTS"/>
                        </div>
                        <div className="Component7ContainerBlogText">
                            <p className="Component7ContainerBlogText-p1">{d.Component7ContainerBlogTextP1}</p>
                            <h2 className="Component7ContainerBlogText-h2">{d.Component7ContainerBlogTextH2}</h2>
                            <p className="Component7ContainerBlogText-p2">{d.Component7ContainerBlogTextP2}</p>
                        </div>
                    </div>


                    <div className="Component7ContainerBlog">
                        <div className="Component7ContainerBlog-ImageContainer">
                            <img className="Component7ContainerBlog-Image" src={d.Component7ContainerBlogTextI2} alt="CASE STUDIES"/>
                        </div>
                        <div className="Component7ContainerBlogText">
                            <p className="Component7ContainerBlogText-p1">{d.Component7ContainerBlogTextP12}</p>
                            <h2 className="Component7ContainerBlogText-h2">{d.Component7ContainerBlogTextH22}</h2>
                            <p className="Component7ContainerBlogText-p2">{d.Component7ContainerBlogTextP22}</p>
                        </div>
                    </div>


                    <div className="Component7ContainerBlog">
                        <div className="Component7ContainerBlog-ImageContainer">
                            <img className="Component7ContainerBlog-Image" src={d.Component7ContainerBlogTextI3} alt="CASE STUDIES 2"/>
                        </div>
                        <div className="Component7ContainerBlogText">
                            <p className="Component7ContainerBlogText-p1">{d.Component7ContainerBlogTextP13}</p>
                            <h2 className="Component7ContainerBlogText-h2">{d.Component7ContainerBlogTextH23}</h2>
                            <p className="Component7ContainerBlogText-p2">{d.Component7ContainerBlogTextP23}</p>
                        </div>
                    </div>

                </div>
            ))};
        </>
    )
}

export default Component7Blog
