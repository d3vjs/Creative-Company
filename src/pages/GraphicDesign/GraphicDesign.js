import React, { useEffect } from 'react'
import DesignBanner from '../../components/DesignComponents/DesignBanner/DesignBanner';
import DesignCard from '../../components/DesignComponents/DesignCard/DesignCard';
import { StyledGraphicDesignPageContainer } from './GraphicDesignStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { GlobalStyle } from '../../Theme';
import DesignView from '../../components/DesignComponents/DesignView/DesignView';

function GraphicDesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const designViewData = [
        {
            title: 'web design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'web',
        },
        {
            title: 'app design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'app',
        },
    ];
    const designCardData = [
        {
            design: 'graphic-design',
            title: 'tim brown',
            desc: 'A book cover designed for Tim Brown’s new release, ‘Change’',
            fileName: 'change',
        },
        {
            design: 'graphic-design',
            title: 'boxed water',
            desc: 'A simple packaging concept made for Boxed Water',
            fileName: 'boxed-water',
        },
        {
            design: 'graphic-design',
            title: 'science',
            desc: 'A poster made in collaboration with the Federal Art Project',
            fileName: 'science',
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
        <StyledGraphicDesignPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <DesignBanner
                    title="Graphic Design"
                    content="We deliver eye-catching branding materials that are tailored to meet your business objectives."
                    bgName="graphic-design"
                />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="design-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledGraphicDesignPageContainer>
    )
}

export default GraphicDesign
