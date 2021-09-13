import styled from 'styled-components';

import bgHeroImg from '../../assets/images/bg-pattern-hero-home.svg';
import bgPattern from '../../assets/images/bg-pattern-leaf.svg';

export const StyledMainPageContainer = styled.div`
    .hero-container {
        width: 100%;
        height: 84.3rem;
        background-color: var(--peach-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 12rem;
        background-image: url(${bgHeroImg});
        background-position: left center;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    .hero-text {
        width: 32.7rem;
        height: 31.2rem;
        margin-top: 8rem;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .award-main-text {
        margin-bottom: 1.4rem;
    }
    .learn-more-btn {
        z-index: 1;
        margin-top: 1.9rem;
        color: var(--black-color);
        background-color: white;
    }
    .phone-img-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
    }
    .phone-img-container img {
        margin-top: -11rem;
        height: 91.3rem;
    }
    .design-view-container {
        height: 79.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 11.9rem;
    }
    @media screen and (min-width: 768px) {
        width: 100%;
        .hero-container {
            width: 68.9rem;
            height: 84.3rem;
            margin: 0 auto 12rem auto;
            border-radius: 1.5rem;
            background-position: 17rem center;
        }
        .hero-text {
            width: 57.3rem;
            height: 32.6rem;
            margin-top: 6rem;
        }
        .award-main-text {
            font-size: 4.8rem;
            line-height: 4.8rem;
            margin-bottom: 0.8rem;
        }
        .hero-text h3 {
            width: 44.5rem;
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
        .design-view-container {
            height: 64.9rem;
        }
    }
    @media screen and (min-width: 1440px) {
        main {
            background-image: url(${bgPattern});
            background-repeat: no-repeat;
            background-position: 0 47.5rem;
        }
        .hero-container {
            width: 111rem;
            height: 64.3rem;
            background-position: right center;
            flex-direction: row;
        }
        .hero-text {
            align-items: flex-start;
            text-align: left;
            margin: 0 0 0 9.2rem;
            width: 54rem;
            height: 35rem;
        }
        .phone-img-container {
            width: 47.9rem;
            height: 64rem;
            margin-top: 1.5rem;
        }
        .design-view-container {
            height: 64rem;
            width: 111.2rem;
            flex-wrap: wrap;
            align-items: flex-start;
            align-content: space-between;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;