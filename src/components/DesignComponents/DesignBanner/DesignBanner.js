import React from 'react'
import { StyledDesignBannerContainer } from './DesignBannerStyles';

function DesignBanner({ title, content, bgName }) {
    const bgHeroIcon = require(`../../../assets/images/${bgName}/bg-pattern-intro.svg`)
        .default;
    return (
        <StyledDesignBannerContainer bgPattern={bgHeroIcon}>
            <div className="design-banner-text ">
                <h1 className="phone-hero-text">{title}</h1>
                <p className="phone-hero-subtext">{content}</p>
            </div>
        </StyledDesignBannerContainer>
    )
}

export default DesignBanner
