import React, { useEffect, useState } from 'react';
import './Content3.css';
import axios from 'axios';

const Content3 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/ContactForm")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {data.map((d, i) => (
                <div className="Component3" key={i}>
                    <form className="Component3-form" style={{ height: '570px' }}>
                        <h2 className="Component3-title">{d.Component3Title}</h2>
                        <p className="Component3-description">{d.Component3Description}</p>

                        <div className="Component3-form-field1">
                            <div className="Component3-field">
                                <label className="Component3-label" htmlFor="contact_name">Full name</label>
                                <input type="text" id="contact_name" placeholder="Your full name" name="contact_name" required maxLength="120" className="Component3-input" />
                                <div className="Component3-error">Please provide your full name</div>
                            </div>
                            <div className="Component3-field">
                                <label className="Component3-label" htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder="Your email address" name="email" required maxLength="80" className="Component3-input" />
                                <div className="Component3-error">Please provide your email address</div>
                            </div>
                        </div>

                        <div className="Component3-form-field1">
                            <div className="Component3-field">
                                <label className="Component3-label" htmlFor="company_name">Company name</label>
                                <input type="text" id="company_name" placeholder="Company name" name="company_name" required className="Component3-input" />
                                <div className="Component3-error">Who do you work for?</div>
                            </div>
                            <div className="Component3-field">
                                <label className="Component3-label" htmlFor="phone">Phone number</label>
                                <input type="number" id="phone" placeholder="Your phone number" name="phone" required maxLength="10" className="Component3-input" />
                                <div className="Component3-error">Please give us a way to get in contact</div>
                            </div>
                        </div>

                        <div className="Component3-form-field1">
                            <div className="Component3-field">
                                <label className="Component3-label" htmlFor="market-select">Location</label>
                                <select id="market-select" name="market" className="Component3-select">
                                    <option value="" selected>{d.Component3SelectOption1}</option>
                                    <option value="" >{d.Component3SelectOption2}</option>
                                    <option value="" >{d.Component3SelectOption3}</option>
                                </select>

                            </div>
                            <div className="Component3-field">
                                <label className="Component3-label" htmlFor="team_size">How many people need workspace?</label>
                                <input type="text" id="team_size" placeholder="How many people need workspace?" name="company_size" required maxLength="7" className="Component3-input" />
                                <div className="Component3-error">How many people need workspace?</div>
                            </div>
                        </div>

                        <p className="Component3-agreement"> {d.Component3Agreement}{' '}
                            <a href="/legal/terms-of-service" className="Component3-link" target="_blank" rel="noopener noreferrer">{d.Component3AgreementTnC} </a>{' '} and acknowledge our{' '}
                            <a href="/legal/privacy" className="Component3-link" target="_blank" rel="noopener noreferrer">{d.Component3AgreementPolicy}</a>.
                        </p>


                        <div className="Component3-button">
                            <button type="submit" className="Component3-submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            ))};
        </>
    );
};

export default Content3;