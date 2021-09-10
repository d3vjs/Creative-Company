import styled from 'styled-components';

import heroDesktopImg from '../../assets/images/desktop/image-about-hero.jpg';
import heroTabletImg from '../../assets/images/tablet/image-about-hero.jpg';
import heroMobileImg from '../../assets/images/mobile/image-about-hero.jpg';

import worldClassTalentDesktoImg from '../../assets/images/desktop/image-world-class-talent.jpg';
import worldClassTalentTabletImg from '../../assets/images/tablet/image-world-class-talent.jpg';
import worldClassTalentMobileImg from '../../assets/images/mobile/image-world-class-talent.jpg';

import realDealDesktopImg from '../../assets/images/desktop/image-real-deal.jpg';
import realDealTabletImg from '../../assets/images/tablet/image-real-deal.jpg';
import realDealMobileImg from '../../assets/images/mobile/image-real-deal.jpg';

import bgPattern from '../../assets/images/bg-pattern-leaf.svg';


export const StyledAboutPageContainer = styled.div`
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .about-banner-container {
        width: 100%;
        height: 71.5rem;
        background-color: var(--peach-color);
    }
    .hero-img {
        width: 100%;
        height: 32rem;
        background-image: url(${heroMobileImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .hero-text-container {
        height: 39.5rem;
    }
    .hero-text {
        width: 32.7rem;
        height: 23.5rem;
        color: white;
        text-align: center;
    }
    .hero-text h1 {
        margin-bottom: 2.4rem;
    }
    .world-class-img {
        width: 100%;
        height: 32rem;
        background-image: url(${worldClassTalentMobileImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .text-container {
        width: 100%;
        height: 54.5rem;
        background-color: var(--extra-light-peach-color);
    }
    .about-container {
        width: 100%;
    }
    .about-text {
        width: 32.7rem;
        height: 38.5rem;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: space-between;
    }
    .about-text h1 {
        color: var(--peach-color);
    }
    .about-text p {
        color: var(--dark-grey-color);
    }
    .real-deal-img {
        width: 100%;
        height: 32rem;
        background-image: url(${realDealMobileImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .about-container:nth-last-child(2) {
        margin-bottom: 31rem;
    }
    @media screen and (min-width: 768px) {
        .about-banner-container {
            width: 68.9rem;
            height: 63.2rem;
            margin-bottom: 12rem;
            border-radius: 1.5rem;
        }
        .hero-img {
            background-image: url(${heroTabletImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
        .hero-text-container {
            justify-content: flex-start;
            margin-top: 6.4rem;
        }
        .hero-text {
            width: 57.3rem;
            height: 18.4rem;
        }
        .hero-text h1,
        .about-text h1 {
            font-size: 4.8rem;
            line-height: 4.8rem;
        }
        .hero-text p,
        .about-text p {
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
        .about-container {
            width: 68.9rem;
            height: 73.6rem;
        }
        .text-container {
            height: 41.6rem;
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
        .world-class-img {
            background-image: url(${worldClassTalentTabletImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
        .real-deal-img {
            background-image: url(${realDealTabletImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
        .about-text {
            width: 57.2rem;
            height: 28rem;
        }
        .about-container:nth-last-child(2) {
            margin-bottom: 38.4rem;
        }
    }
    @media screen and (min-width: 1444px) {
        main {
            background-image: url(${bgPattern}), url(${bgPattern});
            background-repeat: no-repeat;
            background-position: 0 47.5rem, 83rem 177.7rem;
        }
        .about-banner-container {
            display: flex;
            width: 111.1rem;
            height: 48rem;
            margin-bottom: 12rem;
            border-radius: 1.5rem;
        }
        .hero-img {
            width: 47.6rem;
            height: 48rem;
            background-image: url(${heroDesktopImg});
            border-top-left-radius: 0;
            border-top-right-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
        .hero-text-container {
            width: 63.5rem;
            order: -1;
            margin-top: 13.5rem;
        }
        .hero-text {
            width: 54rem;
            text-align: left;
        }
        .about-container {
            display: flex;
            width: 111.1rem;
            height: 64rem;
        }
        .world-class-img {
            width: 47.6rem;
            height: 64rem;
            background-image: url(${worldClassTalentDesktoImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 1.5rem;
        }
        .text-container {
            width: 63.5rem;
            height: 64rem;
        }
        .about-text {
            width: 44.5rem;
            height: 33.2rem;
            text-align: left;
        }
        .about-container:nth-last-child(2) {
        }
        .real-deal-img {
            order: 1;
            width: 47.6rem;
            height: 64rem;
            background-image: url(${realDealDesktopImg});
            border-top-left-radius: 0;
            border-top-right-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
    }
`;