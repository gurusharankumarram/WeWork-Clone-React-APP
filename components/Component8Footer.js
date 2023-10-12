// Footer.js
import React, { useState } from 'react';
import './Component8Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Component8Footer = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('English');

    // Handle language selection
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };


    return (
        <div className="FooterContainer">
            <footer className="Footer">

                <div className="FooterMenus">

                    <div className="FooterMenu">
                        <div className="FooterMenuHeading">Company</div>
                        <ul className="FooterMenuList">
                            <li><a href="/locations" className="FooterLink" target="_self">Global Locations</a></li>
                            <li><a href="/locations" className="FooterLink" target="_self">Mission</a></li>
                            <li><a href="/locations" className="FooterLink" target="_self">Inclusion & Diversity</a></li>
                            <li><a href="/locations" className="FooterLink" target="_self">Careers</a></li>
                            <li><a href="/locations" className="FooterLink" target="_self">Investors</a></li>
                            <li><a href="/locations" className="FooterLink" target="_self">Newsroom</a></li>
                            <li><a href="/locations" className="FooterLink" target="_self">Blog</a></li>
                        </ul>
                    </div>

                    <div className="FooterMenu">
                        <div className="FooterMenuHeading">Partnerships</div>
                        <ul className="FooterMenuList">
                            <li><a href="/brokers" className="FooterLink" target="_blank">Brokers</a></li>
                            <li><a href="/brokers" className="FooterLink" target="_blank">Landlords</a></li>
                            <li><a href="/brokers" className="FooterLink" target="_blank">Refer a Friend</a></li>
                            <li><a href="/brokers" className="FooterLink" target="_blank">Event Planners</a></li>
                        </ul>
                    </div>

                    <div className="FooterMenu">
                        <div className="FooterMenuHeading">Support</div>
                        <ul className="FooterMenuList">
                            <li><a href="https://www.wework.com/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                            <li><a href="https://www.wework.com/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">Member Login</a></li>
                            <li><a href="https://www.wework.com/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">Help Center</a></li>
                            {/* <li><a href="https://www.wework.com/contact-us" className="FooterLink" target="_blank">COVID Response</a></li> */}
                            <li><a href="https://www.wework.com/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">COVID Response</a></li>
                        </ul>
                    </div>
                </div>


                <div className="FooterMenusRight">
                    <div className="FooterSocial">
                        <ul className="FooterSocialMenu">
                            <li><a href="https://facebook.com/wework" rel="noopener noreferrer"><span className="FooterIcon fa fa-facebook"></span></a></li>
                            <li><a href="https://instagram.com/wework" rel="noopener noreferrer"><span className="FooterIcon fa fa-instagram"></span></a></li>
                            <li><a href="https://twitter.com/wework" rel="noopener noreferrer"><span className="FooterIcon fa fa-twitter"></span></a></li>
                            <li><a href="https://www.linkedin.com/company/wework" rel="noopener noreferrer"><span className="FooterIcon fa fa-linkedin"></span></a></li>
                        </ul>
                    </div>

                    <div className="FooterLanguage">
                        <label className="FooterLanguage-label" htmlFor="language-dropdown">
                            Language
                        </label>
                        <div className="FooterLanguageOptions">
                            <select id="FooterLanguageList" value={selectedLanguage} onChange={handleLanguageChange}>
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="Japanese">Japanese</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="FooterLanguageMobile">
                <label className="FooterLanguage-labelMobile" htmlFor="language-dropdownMobile">
                    Language
                </label>
                <div className="FooterLanguageOptionsMobile">
                    <select id="FooterLanguageListMobile" value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Japanese">Japanese</option>
                    </select>
                </div>
            </div>

            <div className="FooterMenusAllLocation">
                <a href="/" className="FooterMenusAllLocation">
                    All locations <FontAwesomeIcon icon={faCaretDown} size="lg" style={{ color: '#0000ff' }} />
                </a>
            </div>


            <div className="FooterMenusBottom">
                <div className="FooterContact">
                    <a href="tel:1800123999000" className="FooterPhoneNumber">1800123999000</a>
                    <address className="FooterAddress">
                        <p>WeWork Companies LLC</p>
                        <p>12 East 49th Street</p>
                        <p>Floor 3</p>
                        <p>New York, NY 10017</p>
                    </address>
                </div>

                <div className="FooterLegal">
                    <ul className="FooterLegalMenu">
                        <li className="FooterLegalMenuItem"><a href="/legal/privacy" className="FooterLegalLink">Privacy</a></li>
                        <li className="FooterLegalMenuItem"><a href="/legal/terms-of-service" className="FooterLegalLink">Terms</a></li>
                        <li className="FooterLegalMenuItem"><a href="/legal/cookie-policy" className="FooterLegalLink">Cookie Policy</a></li>
                        <li className="FooterLegalMenuItem"><a href="/legal/cookie-settings" className="FooterLegalLink">Cookies Settings</a></li>
                        <li className="FooterLegalMenuItem"><a href="/legal/accessibility" className="FooterLegalLink">Accessibility</a></li>
                        <li className="FooterLegalMenuItem"><a href="/sitemap" className="FooterLegalLink">Sitemap</a></li>
                    </ul>
                    <div className="FooterCopyright">Copyright © 2023 WeWork. All rights reserved.</div>
                </div>


                <div className="FooterLogo">
                    <img src="https://www.wework.com/vanilla-assets/images/we_logo.d25b3dd4f56ad4661c0a3fe77bd65845.svg" alt="WeWork Logo" />
                </div>

            </div>
        </div>
    );
};

export default Component8Footer;
