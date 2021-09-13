import React, { useEffect } from 'react'
import DesignBanner from '../../components/DesignComponents/DesignBanner/DesignBanner';
import DesignCard from '../../components/DesignComponents/DesignCard/DesignCard';
import DesignView from '../../components/DesignComponents/DesignView/DesignView';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { GlobalStyle } from '../../Theme';
import { StyledAppDesignPageContainer } from './AppDesignStyles';

function AppDesign() {
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
            title: 'graphic design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'graphic',
        },
    ];
    const designCardData = [
        {
            design: 'app-design',
            title: 'airfilter',
            desc:
                'Solving the problem of poor indoor air quality by filtering the air',
            fileName: 'airfilter',
        },
        {
            design: 'app-design',
            title: 'eyecam',
            desc:
                'Product that lets you edit your favorite photos and videos at any time',
            fileName: 'eyecam',
        },
        {
            design: 'app-design',
            title: 'faceit',
            desc:
                'Get to meet your favorite internet superstar with the faceit app',
            fileName: 'faceit',
        },
        {
            design: 'app-design',
            title: 'todo',
            desc:
                'A todo app that features cloud sync with light and dark mode',
            fileName: 'todo',
        },
        {
            design: 'app-design',
            title: 'loopstudios',
            desc: 'A VR experience app made for Loopstudios',
            fileName: 'loopstudios',
        },
    ];

    const renderDesignCards = designCardData.map((item, index) => {
        return (
            <DesignCard
                design={item.design}
                title={item.title}
                desc={item.desc}
                fileName={item.fileName}
                key={index}
                className={`design-card design-card${index}`}
            />
        )
    });

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
    return (
        <StyledAppDesignPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <DesignBanner title="App Design" content="We build applications that can do amazing things"
                    bgName="app-design" />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="design-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledAppDesignPageContainer>
    )   
}

export default AppDesign
