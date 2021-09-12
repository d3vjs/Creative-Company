import styled from 'styled-components';

import bgPattern from '../../assets/images/bg-pattern-leaf.svg';
import errorIcon from '../../assets/images/icon-error.svg';
import bgCircle from '../../assets/images/bg-pattern-hero-desktop.svg';

export const StyledContactPageContainer = styled.div`
    .contact-us-container {
        width: 100%;
        height: 76.4rem;
        background-color: var(--peach-color);
    }
    .hero-container {
        width: 32.7rem;
        display: flex;
        flex-direction: column;
    }
    .hero-text {
        width: 100%;
        height: 18.5rem;
        color: white;
        text-align: center;
        margin-bottom: 4.8rem;
    }
    .hero-text h1 {
        margin-bottom: 2.4rem;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: none;
    }
    .input-field::placeholder {
        font-family: 'Jost', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.6rem;
        opacity: 0.5;
        color: white;
    }
    .input-field {
        width: 100%;
        height: 5.5rem;
        padding-left: 1.4rem;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.6rem;
        font-family: 'Jost', sans-serif;
        border-bottom: 0.1rem solid white;
    }
    .last-field {
        height: 12.6rem;
        padding-top: 2.5rem;
    }
    .input-field:focus {
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.6rem;
        font-family: 'Jost', sans-serif;
        border-bottom: 0.3rem solid white;
    }
    .submit-btn {
        margin-top: 4rem;
        font-family: 'Jost', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
        align-self: center;
    }
    .input-container {
        position: relative;
    }
    .error-container {
        width: 10.4rem;
        position: absolute;
        line-height: 2.6rem;
        font-style: italic;
        font-size: 1.2rem;
        color: white;
        top: 1.6rem;
        right: 0;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        transition: 0.2s opacity ease-in-out;
    }
    .error-icon {
        width: 2rem;
        height: 2rem;
        background-image: url(${errorIcon});
    }
    .flag {
        opacity: 1;
    }
    & footer .talk-about-card {
        display: none;
    }
    footer {
        height: 62.6rem;
    }
    footer .inner-div {
        margin-top: 6.4rem;
    }
    @media screen and (min-width: 768px) {
        main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contact-us-container {
            width: 68.9rem;
            height: 71.1rem;
            border-radius: 1.5rem;
            background-image: url(${bgCircle});
            background-repeat: no-repeat;
            background-position: -8rem -9rem;
        }
        .hero-container {
            width: 57.3rem;
        }
        .hero-text {
            width: 100%;
            height: 15.8rem;
            text-align: left;
            margin-bottom: 4rem;
        }
        .hero-text h1 {
            margin-bottom: 3.2rem;
            font-size: 4rem;
            line-height: 4.8rem;
        }
        .hero-text p {
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
        .submit-btn {
            align-self: flex-end;
        }
        footer {
            height: 32.1rem;
        }
        footer .inner-div {
            margin-top: 8rem;
        }
    }
    @media screen and (min-width: 1440px) {
        main {
            background-image: url(${bgPattern});
            background-repeat: no-repeat;
            background-position: right 80rem;
        }
        .contact-us-container {
            width: 111.1rem;
            height: 48rem;
        }
        .hero-container {
            width: 92rem;
            flex-direction: row;
            align-items: center;
        }
        .hero-text {
            width: 54rem;
            height: 18.4rem;
            margin-bottom: 0;
        }
        .hero-text p {
            width: 44.5rem;
            height: 10.4rem;
        }
        form {
            width: 38rem;
        }
        footer .inner-div {
            margin-top: 7.2rem;
        }
    }
`;