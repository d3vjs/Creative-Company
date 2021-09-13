import styled from 'styled-components';

export const StyledDesignBannerContainer = styled.div`
    width: 100%;
    height: 32rem;
    background-color: var(--peach-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10.5rem 2.4rem 8rem 2.4rem;
    text-align: center;
    margin-bottom: 9.6rem;
    background-image: url(${(prop) => prop.bgPattern});
    background-repeat: no-repeat;
    background-position: right top;
    .design-banner-text {
        color: white;
    }
    .design-banner-text h1 {
        margin-bottom: 2.4rem;
    }
    @media screen and (min-width: 768px) {
        margin-bottom: 12rem;
        width: 68.9rem;
        height: 25.2rem;
        border-radius: 1.5rem;
        padding: 0;
        background-position: 0 -20rem;
        .design-banner-text {
            width: 40rem;
            height: 12.4rem;
        }
        .design-banner-text h1 {
            font-size: 4.8rem;
            line-height: 4.8rem;
        }
        .design-banner-text p {
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
    }
    @media screen and (min-width: 1444px) {
        margin-bottom: 16rem;
        width: 111.1rem;
        background-position: left center;
    }
`;