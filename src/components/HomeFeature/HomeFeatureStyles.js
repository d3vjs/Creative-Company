import styled from 'styled-components';
export const HomeFeatureDiv = styled.div`
    width: 100%;
    height: 139.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .inner-container {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        width: 32.7rem;
    }
    margin-bottom: 31.1rem;
    @media screen and (min-width: 768px) {
        height: 67rem;
        .inner-container {
            width: 69rem;
            height: 100%;
        }
    }
    @media screen and (min-width: 1440px) {
        height: 41.2rem;
        .inner-container {
            width: 111rem;
            height: 100%;
            flex-direction: row;
        }
    }
`;

export const HomeFeatureSection = styled.div`
    width: 32.7rem;
    height: 41.2rem;
    color: var(--dark-grey-color);
    text-align: center;
    .home-feature-img-container {
        width: 20.2rem;
        height: 20.2rem;
        margin: 0 auto;
        position: relative;
    }
    .home-feature-img-container::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.2;
        border-radius: 50%;
        background: linear-gradient(
            90deg,
            rgba(93, 2, 2, 0.5),
            rgba(93, 2, 2, 0.0001)
        );
    }
    &:nth-child(2) .home-feature-img-container::before {
        transform: rotate(-90deg);
    }
    &:nth-child(3) .home-feature-img-container::before {
        transform: rotate(90deg);
    }
    img {
        width: 18.8rem;
        height: 16.2rem;
        margin-bottom: 6.8rem;
        z-index: 2;
    }
    h1 {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        margin-top: 4.8rem;
        letter-spacing: 5px;
        margin-bottom: 3.2rem;
        text-transform: uppercase;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
    @media screen and (min-width: 768px) {
        height: 20.2rem;
        display: flex;
        flex-direction: column;
        width: 69rem;
        align-items: center;
        flex-wrap: wrap;
        .home-feature-img-container {
            margin: 0 4.8rem 0 0;
        }
        h1 {
            margin-top: 4.1rem;
        }
        h1,
        p {
            width: 43.9rem;
            text-align: left;
        }
    }
    @media screen and (min-width: 1444px) {
        width: 35rem;
        height: 41.2rem;
        h1 {
            margin-top: 4.8rem;
        }
        h1,
        p {
            width: 100%;
            text-align: center;
        }
    }
`;
