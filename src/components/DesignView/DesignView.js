import React from 'react'
import { Link } from 'react-router-dom';
import { DesignViewDiv } from './DesignViewStyles';

function DesignView({ title, svgName, width, height, home }) {

    const mobilLogo = require(`../../assets/images/mobile/image-${svgName}-design.jpg`)
        .default;
    const tabletLogo = require(`../../assets/images/tablet/image-${svgName}-design.jpg`)
        .default;
    let desktopLogo;
    const urlName = svgName;
    if (svgName !== 'web')
        desktopLogo = require(`../../assets/images/desktop/image-${svgName}-design.jpg`)
            .default;
    else {
        svgName = home === 'true' ? 'web-design-large' : 'web-design-small';

        desktopLogo = require(`../../assets/images/desktop/image-${svgName}.jpg`)
            .default;
    }

    return (
        <Link to={`/${urlName}`}>
            <DesignViewDiv
                mobilLogo={mobilLogo}
                tabletLogo={tabletLogo}
                desktopLogo={desktopLogo}
                width={width}
                height={height}
                svgName={svgName}>
                <h1>{title}</h1>
                <h3>View Projects</h3>
            </DesignViewDiv>
        </Link>
    )
}

export default DesignView
