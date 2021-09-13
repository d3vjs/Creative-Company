import styled from 'styled-components';

export const HeaderDiv = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    .active-opacity {
        opacity: 1;
    }
    .header-container {
        margin-top: 2.7rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .logo {
        width: auto;
        height: 6rem;
    }
    .active {
        transform: translateY(0);
    }
    .links {
        list-style: none;
        width: 32.7rem;
        height: 13.9rem;
        margin: 4.8rem 0 0 2.4rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .link a {
        font-size: 2.4rem;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 400;
        line-height: 2.5rem;
        letter-spacing: 0.2rem;
    }
    .link:hover {
        border-bottom: 1px solid white;
    }
    height: 2.7rem;
    margin: 6.4rem auto;
    .link {
        height: 1.4rem;
        transition: border 3s ease;
    }
    .link :hover {
        border-color: var(--dark-grey-color);
    }
    .header-backdrop {
        display: none;
    }
    .header-container {
        width: 68.9rem;
        height: 2.7rem;
        margin: 0;
        padding: 0;
    }
    .logo-container {
        margin: 0;
    }
    .link-container {
        position: relative;
        transform: translateY(0);
        top: 0;
        width: 37.1rem;
        height: 1.4rem;
        background-color: white;
    }
    .links {
        width: 100%;
        height: 1.4rem;
        flex-direction: row;
        margin: 0;
    }
    .link a {
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: var(--dark-grey-color);
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 5.2rem;
        .header-container {
            width: 111rem;
        }
    }
`;