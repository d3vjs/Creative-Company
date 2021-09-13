import styled from 'styled-components';
import bgPattern from '../../assets/images/bg-pattern-leaf.svg';

export const StyledGraphicDesignPageContainer = styled.div`
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.desing-view-container {
    height: 52.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31.1rem;
}
.design-cards {
    height: 151.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9.6rem;
}
@media screen and (min-width: 768px) {
    .desing-view-container {
        width: 68.9rem;
        height: 42.4rem;
        margin-bottom: 38.4rem;
    }
    .design-cards {
        height: 100.4rem;
    }
}
@media screen and (min-width: 1444px) {
    main {
        background-image: url(${bgPattern});
        background-repeat: no-repeat;
        background-position: 0 47.5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .design-cards {
        width: 111.1rem;
        height: 47.8rem;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .desing-view-container {
        width: 111.1rem;
        height: 30.8rem;
        flex-direction: row;
        margin-bottom: 31.1rem;
    }
}
`;