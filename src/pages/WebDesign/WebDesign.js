import React, { useEffect } from 'react'
import { StyledWebDesignPageContainer } from './WebDesignStyles';

import DesignBanner from '../../components/DesignComponents/DesignBanner/DesignBanner';
import DesignCard from '../../components/DesignComponents/DesignCard/DesignCard';
import DesignView from '../../components/DesignComponents/DesignView/DesignView';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { GlobalStyle } from '../../Theme';

function WebDesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const designViewData = [
        {
            title: 'app design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'app',
        },
        {
            title: 'graphic design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'graphic',
        },
    ];
    const designCardData = [
        {
            design: 'web-design',
            title: 'express',
            desc: 'A multi-carrier shipping website for ecommerce businesses',
            fileName: 'express',
        },
        {
            design: 'web-design',
            title: 'transfer',
            desc:
                'Site for low-cost money transfers and sending money within seconds',
            fileName: 'transfer',
        },
        {
            design: 'web-design',
            title: 'photon',
            desc:
                'A state-of-the-art music player with high-resolution audio and DSP effects',
            fileName: 'photon',
        },
        {
            design: 'web-design',
            title: 'builder',
            desc:
                'Connects users with local contractors based on their location',
            fileName: 'builder',
        },
        {
            design: 'web-design',
            title: 'blogr',
            desc:
                'Blogr is a platform for creating an online blog or publication',
            fileName: 'blogr',
        },
        {
            design: 'web-design',
            title: 'camp',
            desc:
                'Get expert training in coding, data, design, and digital marketing',
            fileName: 'camp',
        },
    ];
    const renderList = designViewData.map((item, idx) => {
        return (
            <DesignView
                key={idx}
                title={item.title}
                svgName={item.svgName}
                width={item.width}
                height={item.height}
                home="false"
            />
        );
    });
    const renderDesignCards = designCardData.map((item, idx) => {
        return (
            <DesignCard
                design={item.design}
                title={item.title}
                desc={item.desc}
                fileName={item.fileName}
                key={idx}
            />
        );
    });
    return (
        <StyledWebDesignPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <DesignBanner title="Web Design"
                    content="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
                    bgName="web-design" />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="design-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledWebDesignPageContainer>
    )
}

export default WebDesign
