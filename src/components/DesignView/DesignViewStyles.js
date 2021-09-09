import styled from 'styled-components';
import arrow from '../../assets/images/icon-right-arrow.svg';

export const DesignViewDiv = styled.div`
    color: white;
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-image: url(${(prop) => prop.mobilLogo});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1.5rem;
        position: absolute;
        transition: 0.2s ease-in-out;
    }
    &:hover::before {
        background: rgba(231, 129, 107, 0.8);
    }
    h1 {
        z-index: 1;
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 3.6rem;
        letter-spacing: 1.4px;
        margin-bottom: 1.013rem;
        text-transform: uppercase;
    }
    h3 {
        width: 197px;
        z-index: 1;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.2rem;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        position: relative;
    }
    h3::after {
        z-index: 1;
        content: '';
        position: absolute;
        background-image: url(${arrow});
        width: 6px;
        height: 10px;
        right: 0px;
        bottom: 6px;
    }
    @media screen and (min-width: 768px) {
        width: 68.9rem;
        height: 20rem;
        background-image: url(${(prop) => prop.tabletLogo});
        h1 {
            font-size: 4rem;
            line-height: 4.8rem;
            letter-spacing: 2px;
            margin-bottom: 2.4rem;
        }
    }
    @media screen and (min-width: 1440px) {
        width: 54.1rem;
        height: ${(prop) =>
        prop.svgName === 'web-design-large' ? '64rem' : '30.8rem'};
        background-image: url(${(prop) => prop.desktopLogo});
        flex-wrap: wrap;
    }
`;
