import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LocationCards from '../../components/LocationCards/LocationCards'
import { GlobalStyle } from '../../Theme'
import { StyledContactPageContainer } from './ContactStyles'

function Contact() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [inputField, setinputField] = useState({
        name: '',
        email: '',
        phone: '',
        msg: '',
    });

    const handleChange = (e) => {
        const target = e.target.name;
        const newObj = { ...inputField };
        newObj[target] = e.target.value;
        setinputField(newObj);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = document.getElementsByClassName('error-container');
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let i = 0;
        let flag = [false, false, false, false];
        for (let field in inputField) {
            if (inputField[field] === '') {
                error[i].classList.add('flag');
                flag[i] = true;
            }
            if (i === 1 && !re.test(inputField[field])) {
                error[i].classList.add('flag');
                flag[i] = true;
            }
            i++;
        }
        for (let i in flag) {
            if (flag[i] === false) {
                error[i].classList.remove('flag');
            }
        }
    };

    return (
        <StyledContactPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <div className="contact-us-container  flex-col-vh-center">
                    <div className="hero-container ">
                        <div className="hero-text">
                            <h1 className="phone-hero-text">Contact Us</h1>
                            <p className="phone-hero-subtext">
                                Ready to take it to the next level? Let’s talk
                                about your project or idea and find out how we
                                can help your business grow. If you are looking
                                for unique digital experiences that’s relatable
                                to your users, drop us a line.
                            </p>
                        </div>

                        <form id="contact-form">
                            <div className="input-container">
                                <input
                                    aria-label="Name"
                                    type="text"
                                    name="name"
                                    id="Name"
                                    placeholder="Name"
                                    className="input-field"
                                    value={inputField.name}
                                    onChange={handleChange}
                                />
                                <div className="error-container">
                                    <span className="error-message">
                                        Can't be empty
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>

                            <div className="input-container">
                                <input
                                    aria-label="email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input-field"
                                    placeholder="Email Adress"
                                    value={inputField.email}
                                    onChange={handleChange}
                                />
                                <div className="error-container">
                                    <span className="error-message">
                                        Email invalid
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>

                            <div className="input-container">
                                <input
                                    aria-label="Phone"
                                    type="text"
                                    name="phone"
                                    className="input-field"
                                    id="phone-number"
                                    placeholder="Phone"
                                    value={inputField.phone}
                                    onChange={handleChange}
                                />
                                <div className="error-container">
                                    <span className="error-message">
                                        Can't be empty
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>
                            <div className="input-container">
                                <textarea
                                    placeholder="Your Message"
                                    name="msg"
                                    id="msg"
                                    className="input-field last-field"
                                    cols="3"
                                    rows="3"
                                    value={inputField.msg}
                                    onChange={handleChange}
                                    ></textarea>

                                <div className="error-container">
                                    <span className="error-message">
                                        Can't be empty
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>

                            <button
                                id="submit"
                                type="submit"
                                form="contact-form"
                                className="submit-btn link-btn"
                                onClick={handleSubmit}
                                >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <LocationCards />

                <Footer />
            </main>
        </StyledContactPageContainer>
    )
}

export default Contact
