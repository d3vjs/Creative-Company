import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LocationCards from '../../components/LocationCards/LocationCards'
import { GlobalStyle } from '../../Theme'
import { StyledAboutPageContainer } from './AboutUsStyles'

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <StyledAboutPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <div className="about-banner-container ">
                    <div className="hero-img" />
                    <div className="hero-text-container flex-col-vh-center">
                        <div className="hero-text">
                            <h1 className="phone-hero-text">About Us</h1>
                            <p className="phone-hero-subtext">
                                Founded in 2010, we are a creative agency that
                                produces lasting results for our clients. We’ve
                                partnered with many startups, corporations, and
                                nonprofits alike to craft designs that make real
                                impact. We’re always looking forward to creating
                                brands, products, and digital experiences that
                                connect with our clients’ audiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-container">
                    <div className="world-class-img" />
                    <div className="text-container  flex-col-vh-center">
                        <div className="about-text ">
                            <h1 className="phone-hero-text">
                                World-class talent
                            </h1>
                            <p className="phone-hero-subtext">
                                We are a crew of strategists, problem-solvers,
                                and technologists. Every design is thoughtfully
                                crafted from concept to launch, ensuring success
                                in its given market. We are constantly updating
                                our skills in a myriad of platforms.
                            </p>
                            <p className="phone-hero-subtext">
                                Our team is multi-disciplinary and we are not
                                merely interested in form — content and meaning
                                are just as important. We give great importance
                                to craftsmanship, service, and prompt delivery.
                                Clients have always been impressed with our
                                high-quality outcomes that encapsulates their
                                brand’s story and mission.
                            </p>
                        </div>
                    </div>
                </div>
                <LocationCards />
                <div className="about-container">
                    <div className="real-deal-img" />
                    <div className="text-container  flex-col-vh-center">
                        <div className="about-text ">
                            <h1 className="phone-hero-text">The real deal</h1>
                            <p className="phone-hero-subtext">
                                As strategic partners in our clients’
                                businesses, we are ready to take on any
                                challenge as our own. Solving real problems
                                require empathy and collaboration, and we strive
                                to bring a fresh perspective to every
                                opportunity. We make design and technology more
                                accessible and give you tools to measure
                                success.
                            </p>
                            <p className="phone-hero-subtext">
                                We are visual storytellers in appealing and
                                captivating ways. By combining business and
                                marketing strategies, we inspire audiences to
                                take action and drive real results.
                            </p>
                        </div>
                    </div>

                    <span className="circle about-world-talent-circle-one"></span>
                    <span className="circle about-world-talent-circle-two"></span>
                </div>

                <Footer />
            </main>
        </StyledAboutPageContainer>
    )
}

export default AboutUs
