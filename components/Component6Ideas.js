import React from 'react'
import './Component6Ideas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Component6Ideas = () => {
    return (
        <div className="Component6Container">

            <div className="Component6ContainerText">
                <div className="Component6ContainerText1">
                    <p className="Component6ContainerText1P">IDEAS BY WEWORK</p>
                    <h1 className="Component6ContainerText1H1">Workspace trends and insights</h1>
                </div>
                <div className="Component6ContainerTextViewMore">
                    Read on <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>

            <div className="Component6ContainerText2">
                <div className="Content6-image-container">
                    <img
                        className="Content6-content-image"
                        src="https://ctfassets.imgix.net/vh7r69kgcki3/5UOT0oT5krYm9t37ixk9zy/548775ae2e1430481ca24cf38204cfaa/Web_72DPI-20200313_WeWork_Salesforce-Tower-Atrium-San-Francisco_001.jpg?auto=compress&fit=crop&q=50&fm=jpeg&w=750&h=422"
                        alt="Workspace trends and insight"
                    />
                </div>
                <div className="Component6ContainerText2Text">
                    <p className="Component6ContainerText2-p1">RESEARCH STUDIES</p>
                    <h2 className="Component6ContainerText2-h2">The importance of flexible office spaces</h2>
                    <p className="Component6ContainerText2-p2">A Cushman & Wakefield survey finds flexible offices are an important component of the global work ecosystem.</p>
                </div>

            </div>
            <div className="Component6ContainerTextViewMoreMobile">
                Read on <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className='Component6BottomBorder'></div>

        </div>
    )
}

export default Component6Ideas
