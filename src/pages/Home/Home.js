import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { GlobalStyle } from '../../Theme'
import { StyledMainPageContainer } from './HomeStyles'

import phoneImg from '../../assets/images/image-hero-phone.png'

function Home() {
    return (
        <StyledMainPageContainer>
            <GlobalStyle />
            <Header />
            <main>
                <div className="hero-container">
                    <div className="hero-text">
                        <h1 className="award-main-text phone-hero-text">
                            Award-winning custom designs and digital branding
                            solutions
                        </h1>

                        <h3 className="phone-hero-subtext">
                            With over 10 years in the industry, we are
                            experienced in creating fully responsive websites,
                            app design, and engaging brand experiences. Find out
                            more about our services.
                        </h3>
                        <Link to="/about" className="learn-more-btn  link-btn">
                            Learn more
                        </Link>
                    </div>
                    <div className="phone-img-container">
                        <img src={phoneImg} alt="hero phone" />
                    </div>
                </div>
            </main>
        </StyledMainPageContainer>
    )
}

export default Home
