import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { GlobalStyle } from '../../Theme'
import { StyledMainPageContainer } from './HomeStyles'

import phoneImg from '../../assets/images/image-hero-phone.png'
import DesignView from '../../components/DesignView/DesignView'

function Home() {

    const designViewData = [
        {
            title: 'web design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'web',
        },
        {
            title: 'app design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'app',
        },
        {
            title: 'graphic design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'graphic',
        },
    ];
    const renderList = designViewData.map((item, idx) => {
        return (
            <DesignView
                key={idx}
                title={item.title}
                svgName={item.svgName}
                width={item.width}
                height={item.height}
                home="true"
            />
        );
    });
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
                <div className="desing-view-container">{renderList}</div>
            </main>
        </StyledMainPageContainer>
    )
}

export default Home
