import friendlySvg from '../../assets/images/illustration-friendly.svg';
import passionateSvg from '../../assets/images/illustration-passionate.svg';
import resourcefulSvg from '../../assets/images/illustration-resourceful.svg';
import { HomeFeatureDiv, HomeFeatureSection } from './HomeFeatureStyles';

function HomeFeature() {
    const homeSections = [
        {
            logo: passionateSvg,
            title: 'Passionate',
            content:
                'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
        },
        {
            logo: resourcefulSvg,
            title: 'Resourceful',
            content:
                'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
        },
        {
            logo: friendlySvg,
            title: 'Friendly',
            content:
                'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
        },
    ];
    const renderList = homeSections.map((item, idx) => {
        return (
            <HomeFeatureSection key={idx}>
                <div className="home-feature-img-container">
                    <img src={item.logo} alt={item.title}></img>
                </div>
                <h1> {item.title}</h1>
                <p> {item.content}</p>
            </HomeFeatureSection>
        );
    });
    return (
        <HomeFeatureDiv>
            <div className="inner-container">{renderList}</div>
        </HomeFeatureDiv>
    )
}

export default HomeFeature
