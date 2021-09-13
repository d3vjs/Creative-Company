import styled from 'styled-components';
import bgCircle from '../../assets/images/bg-pattern-two-circles.svg';

export const StyledLocationsPageContainer = styled.div`
width: 100%;
.leaflet-map-container {
    height: 25rem;
}
.locations {
    margin-bottom: 31rem;
}
.location {
    height: 71.4rem;
    margin-bottom: 4rem;
}
.location-map {
    width: 100%;
    height: 32rem;
}
.location-desc-container {
    height: 39.4rem;
    background-color: var(--extra-light-peach-color);
}
.location-desc-inner-container {
    width: 32.7rem;
    height: 23.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.location-desc-inner-container h2 {
    color: var(--peach-color);
    margin-bottom: 2.4rem;
}
.location-address {
    margin-bottom: 2.4rem;
}
.bold {
    font-weight: 700;
}
@media screen and (min-width: 768px) {
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .locations {
        width: 68.9rem;
    }
    .location {
        height: auto;
        margin-bottom: 12rem;
    }
    .location-map {
        height: 32.6rem;
        margin-bottom: 2.4rem;
    }
    .location-desc-container {
        border-radius: 1.5rem;
        height: 32.6rem;
        background-image: url(${bgCircle});
        background-repeat: no-repeat;
        background-position: left bottom;
    }
    .location-desc-inner-container {
        align-items: flex-start;
        text-align: left;
        width: 54rem;
        height: 15rem;
    }
    .location-address,
    .location-contact {
        width: 28.5rem;
    }
    .location-desc-detail {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .location-desc-inner-container h2 {
        font-size: 4rem;
        line-height: 4.8rem;
    }
    .location-address,
    .location-contact {
        font-size: 1.6rem;
        line-height: 2.6rem;
    }
}
@media screen and (min-width: 1440px) {
    .locations {
        width: 111rem;
    }
    .location {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 3.2rem;
    }
    .location-map {
        width: 35rem;
        height: 32.6rem;
    }
    .location-desc-container {
        width: 73rem;
        height: 32.6rem;
        order: -1;
    }
}
`;
