import styled from 'styled-components';
import bgPattern from '../../assets/images/bg-pattern-leaf.svg';


export const StyledWebDesignPageContainer = styled.div`
width: 100%;
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* overflow: hidden; */
.design-view-container {
    height: 52.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31.1rem;
    transition: 0.2s ease-in-out;
}
.design-cards {
    height: 306.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9.6rem;
    transition: 0.2s ease-in-out;
}
@media screen and (min-width: 768px) {
    .design-view-container {
        width: 68.9rem;
        height: 42.4rem;
        margin-bottom: 38.4rem;
    }
    .design-cards {
        width: 68.9rem;
        height: 203rem;
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
        width: 111rem;
        height: 98.8rem;
        flex-wrap: wrap;
    }
    .design-view-container {
        width: 111.1rem;
        height: 30.8rem;
        flex-direction: row;
    }
}
`;