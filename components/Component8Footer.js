// Footer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Component8Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Component8Footer = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/Footer")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);



    return (
        <>
            {data.map((d, i) => (
                <div className="FooterContainer" key={i}>
                    <footer className="Footer">
                        <div className="FooterMenus">

                            <div className="FooterMenu">
                                <div className="FooterMenuHeading">{d.FooterMenuHeading1}</div>
                                <ul className="FooterMenuList">
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option1}</a></li>
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option2}</a></li>
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option3}</a></li>
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option4}</a></li>
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option5}</a></li>
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option6}</a></li>
                                    <li><a href="/locations" className="FooterLink" target="_self">{d.FooterMenuList1Option7}</a></li>
                                </ul>
                            </div>

                            <div className="FooterMenu">
                                <div className="FooterMenuHeading">{d.FooterMenuHeading2}</div>
                                <ul className="FooterMenuList">
                                    <li><a href="/brokers" className="FooterLink" target="_blank">{d.FooterMenuList2Option1}</a></li>
                                    <li><a href="/brokers" className="FooterLink" target="_blank">{d.FooterMenuList2Option2}</a></li>
                                    <li><a href="/brokers" className="FooterLink" target="_blank">{d.FooterMenuList2Option3}</a></li>
                                    <li><a href="/brokers" className="FooterLink" target="_blank">{d.FooterMenuList2Option4}</a></li>
                                </ul>
                            </div>

                            <div className="FooterMenu">
                                <div className="FooterMenuHeading">{d.FooterMenuHeading3}</div>
                                <ul className="FooterMenuList">
                                    <li><a href="/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">{d.FooterMenuList3Option1}</a></li>
                                    <li><a href="/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">{d.FooterMenuList3Option2}</a></li>
                                    <li><a href="/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">{d.FooterMenuList3Option3}</a></li>
                                    <li><a href="/contact-us" className="FooterLink" target="_blank" rel="noopener noreferrer">{d.FooterMenuList3Option4}</a></li>
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
                                    {d.FooterLanguageLabel}
                                </label>
                                <div className="FooterLanguageOptions">
                                    <select id="FooterLanguageList" value={selectedLanguage} onChange={handleLanguageChange}>
                                        <option value="English">{d.FooterLanguageListOption1}</option>
                                        <option value="Spanish">{d.FooterLanguageListOption2}</option>
                                        <option value="French">{d.FooterLanguageListOption3}</option>
                                        <option value="Japanese">{d.FooterLanguageListOption4}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <div className="FooterLanguageMobile">
                        <label className="FooterLanguage-labelMobile" htmlFor="language-dropdownMobile">
                            {d.FooterLanguageLabel}
                        </label>
                        <div className="FooterLanguageOptionsMobile">
                            <select id="FooterLanguageListMobile" value={selectedLanguage} onChange={handleLanguageChange}>
                                <option value="English">{d.FooterLanguageListOption1}</option>
                                <option value="Spanish">{d.FooterLanguageListOption2}</option>
                                <option value="French">{d.FooterLanguageListOption3}</option>
                                <option value="Japanese">{d.FooterLanguageListOption4}</option>
                            </select>
                        </div>
                    </div>

                    <div className="FooterMenusAllLocation">
                        <a href="/" className="FooterMenusAllLocation">
                            {d.FooterMenusAllLocation} <FontAwesomeIcon icon={faCaretDown} size="lg" style={{ color: '#0000ff' }} />
                        </a>
                    </div>


                    <div className="FooterMenusBottom">
                        <div className="FooterContact">
                            <a href={d.FooterContact} className="FooterPhoneNumber">{d.FooterContact}</a>
                            <address className="FooterAddress">
                                <p>{d.FooterAddressP1}</p>
                                <p>{d.FooterAddressP2}</p>
                                <p>{d.FooterAddressP3}</p>
                                <p>{d.FooterAddressP4}</p>
                            </address>
                        </div>

                        <div className="FooterLegal">
                            <ul className="FooterLegalMenu">
                                <li className="FooterLegalMenuItem"><a href="/legal/privacy" className="FooterLegalLink">{d.FooterLegalMenuOption1}</a></li>
                                <li className="FooterLegalMenuItem"><a href="/legal/terms-of-service" className="FooterLegalLink">{d.FooterLegalMenuOption2}</a></li>
                                <li className="FooterLegalMenuItem"><a href="/legal/cookie-policy" className="FooterLegalLink">{d.FooterLegalMenuOption3}</a></li>
                                <li className="FooterLegalMenuItem"><a href="/legal/cookie-settings" className="FooterLegalLink">{d.FooterLegalMenuOption4}</a></li>
                                <li className="FooterLegalMenuItem"><a href="/legal/accessibility" className="FooterLegalLink">{d.FooterLegalMenuOption5}</a></li>
                                <li className="FooterLegalMenuItem"><a href="/sitemap" className="FooterLegalLink">{d.FooterLegalMenuOption6}</a></li>
                            </ul>
                            <div className="FooterCopyright">{d.FooterCopyright}</div>
                        </div>


                        <div className="FooterLogo">
                            <img src={d.FooterLogo} alt="WeWork Logo" />
                        </div>

                    </div>
                </div>
            ))};
        </>
    );
};

export default Component8Footer;
