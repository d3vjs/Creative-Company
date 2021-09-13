import styled from 'styled-components'; 
import bgPattern from '../../assets/images/bg-pattern-leaf.svg';


export const StyledAppDesignPageContainer = styled.div`
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.design-view-container {
    height: 52.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31.1rem;
}
.design-cards {
    height: 255rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9.6rem;
}
@media screen and (min-width: 768px) {
    .design-view-container {
        width: 68.9rem;
        height: 42.4rem;
        margin-bottom: 38.4rem;
    }
    .design-cards {
        height: 168.8rem;
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
        height: 98.8rem;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
    }
    .design-card {
        margin-right: 3.05rem;
    }
    .design-card2 {
        margin-right: 0;
    }
    .design-view-container {
        width: 111.1rem;
        height: 30.8rem;
        flex-direction: row;
        margin-bottom: 31.1rem;
    }
}
`;