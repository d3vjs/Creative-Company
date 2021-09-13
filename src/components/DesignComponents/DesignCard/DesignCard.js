import React from 'react'
import { StyledDesignCardContainer } from './DesignCardStyles';

function DesignCard({ design, title, desc, fileName, className }) {
    const curImg = require(`../../../assets/images/${design}/image-${fileName}.jpg`)
        .default;
    return (
        <StyledDesignCardContainer className={className}>
            <img src={curImg} alt="title" className="design-img" />
            <div className="design-card-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </StyledDesignCardContainer>
    )
}

export default DesignCard
