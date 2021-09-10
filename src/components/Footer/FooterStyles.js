import styled from 'styled-components';
import bgPattern from '../../assets/images/bg-pattern-call-to-action.svg';


export const FooterContainer = styled.footer`
    width: 100%;
    height: 81.5rem;
    background-color: var(--black-color);
    display: flex;
    justify-content: center;
    position: relative;
    .inner-div {
        margin-top: 25.3rem;
        width: 100%;
        height: 49.8rem;
        padding: 0 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        width: auto;
        height: 6rem;
        margin-bottom: 2.8rem;
    }
    .links {
        padding-top: 3.2rem;
        height: 13.9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .link {
        list-style: none;
        transition: border 0.3s ease;
    }
    .link:hover {
        border-bottom: 1px solid white;
    }
    .link a {
        font-size: 1.4rem;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 2px;
    }
    .footer-detail-info {
        color: white;
        opacity: 0.5;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        text-align: center;
        margin-bottom: 4rem;
    }
    .footer-detail-info p:first-of-type {
        font-weight: 700;
    }
    .social-icon {
        cursor: pointer;
    }
    .social-icon-container {
        display: flex;
        justify-content: space-between;
    }
    @media screen and (min-width: 768px) {
        height: 42.3rem;
        .inner-div {
            width: 69rem;
            margin-top: 16.6rem;
            height: 17.7rem;
        }
        .logo {
            margin: 0;
        }
        .footer-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 6.7rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .links {
            width: 37rem;
            height: auto;
            flex-direction: row;
            align-items: flex-start;
            padding: 0;
            border: none;
        }
        .footer-detail {
            width: 100%;
            margin-top: 3.1rem;
            height: 7.8rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .social-icon-container {
            width: 18.4rem;
            height: 2.4rem;
            align-self: flex-end;
        }
    }
    @media screen and (min-width: 1440px) {
        .inner-div {
            width: 111.1rem;
            margin-top: 14.4rem;
        }
    }
`;
export const TalkAboutContainer = styled.div`
    position: absolute;
    width: 32.7rem;
    height: 37.9rem;
    background-color: var(--peach-color);
    border-radius: 1.5rem;
    top: -18.9rem;
    padding: 6.4rem 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgPattern});
    background-position: center right;
    background-repeat: no-repeat;
    .talk-about-text {
        color: white;
        text-align: center;
        z-index: 2;
        margin-bottom: 3.2rem;
    }
    .talk-about-text h1 {
        height: 8.2rem;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 3.6rem;
        margin-bottom: 0.6rem;
    }
    .talk-about-text p {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.5rem;
    }
    .touch-btn {
        background-color: white;
        color: var(--dark-grey-color);
        z-index: 2;
    }
    @media screen and (min-width: 768px) {
        top: -27.5rem;
        width: 69rem;
        height: 35rem;
        padding: 5.7rem 5.85rem;
        .talk-about-text {
            height: 14.8rem;
        }
        .talk-about-text h1 {
            width: 33.5rem;
            height: 9.8rem;
            font-size: 4rem;
            line-height: 4rem;
            margin: 0 auto;
        }
        .talk-about-text p {
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
    }
    @media screen and (min-width: 1440px) {
        top: -22rem;
        width: 111.1rem;
        height: 29.2rem;
        padding-left: 9.5rem;
        flex-direction: row;
        justify-content: space-between;
        .talk-about-text {
            width: 45.9rem;
            justify-self: flex-start;
            text-align: left;
            margin: 0;
        }
        .talk-about-text h1 {
            width: 26.8rem;
            margin: 0;
        }
        .talk-about-text p {
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
    }
`;