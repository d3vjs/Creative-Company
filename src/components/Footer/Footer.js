import React from 'react'
import { Link } from 'react-router-dom'
import { FooterContainer, TalkAboutContainer } from './FooterStyles'

// social icons
import icon from '../../assets/images/logo-light.png';
import facebookLogo from '../../assets/images/social/icon-facebook.svg';
import instagramLogo from '../../assets/images/social/icon-instagram.svg';
import pinterestLogo from '../../assets/images/social/icon-pinterest.svg';
import twitterLogo from '../../assets/images/social/icon-twitter.svg';
import youtubeLogo from '../../assets/images/social/icon-youtube.svg';

function Footer() {
    
    let socialLogos = [
        {
            name: facebookLogo,
            alt: 'facebook',
        },
        {
            name: instagramLogo,
            alt: 'instagram',
        },
        {
            name: pinterestLogo,
            alt: 'pinterest',
        },
        {
            name: twitterLogo,
            alt: 'twitter',
        },
        {
            name: youtubeLogo,
            alt: 'youtube',
        },
    ];

    const renderList = socialLogos.map((item, idx) => {
        return (
            <img
                key={idx}
                src={item.name}
                alt={item.alt}
                className="social-icon"
            />
        );
    });

    return (
        <FooterContainer>
            <TalkAboutContainer className="talk-about-card">
                <div className="talk-about-text">
                    <h1>Let’s talk about your project</h1>
                    <p>
                        Ready to take it to the next level? Contact us today and
                        find out how our expertise can help your business grow.
                    </p>
                </div>

                <Link to="/contact" className="touch-btn link-btn">
                    GET IN TOUCH
                </Link>
            </TalkAboutContainer>

            <div className="inner-div">
                <div className="footer-nav">
                    <Link to="/">
                        <img src={icon} alt="logo" className="logo" />
                    </Link>
                    <ul className="links">
                        <li className="link">
                            <Link to="/about">Our Company</Link>
                        </li>
                        <li className="link">
                            <Link to="/locations">Location</Link>
                        </li>
                        <li className="link">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-detail">
                    <div className="footer-detail-info">
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="footer-detail-info">
                        <p>Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                    <div className="social-icon-container">{renderList}</div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer
