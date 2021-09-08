import React, { useEffect, useState } from 'react'
import HeaderLg from './HeaderLg/HeaderLg'
import HeaderSm from './HeaderSm/HeaderSm'

function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

    return (
        <>
            {windowWidth >= tabletBreakpoint ? (<HeaderLg />) : (
                <HeaderSm windowWidth={windowWidth} />)}
        </>
    )
}

export default Header
