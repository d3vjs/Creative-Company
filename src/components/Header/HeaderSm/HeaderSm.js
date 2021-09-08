import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Bars, Container, HeaderDiv, List, Menu, Nav } from './HeaderSmStyles'

import logoImg from '../../../assets/images/logo-light.png';

import { AnimatePresence } from 'framer-motion';
import HeaderSmItems from './HeaderSmItems';
import shouldToggle from '../shouldToggle';

function HeaderSm({ windowWidth }) {

    const [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ] = shouldToggle();


    useEffect(() => {
        if (windowWidth >= tabletBreakpoint) {
            restoreToDefault();
        }
    }, [windowWidth]);

    return (
        <Container>
            <Link to="/" className="logo-container">
                <img alt="logo" src={logoImg} className="logo" />
            </Link>
            <Nav>
                <Menu
                    aria-label="Menu toggle"
                    aria-expanded={isExpanded}
                    aria-controls="nav-list"
                    onClick={handleToggle}>
                    <Bars isOpen={isOpen} />
                    <AnimatePresence>
                        {isOpen && (
                            <List isOpen={isOpen}
                                id="nav-list"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: 'linear', duration: 0.3 }}
                                exit={{ opacity: 0 }}
                            >
                                <HeaderSmItems restoreToDefault={restoreToDefault} />
                            </List>
                        )}
                    </AnimatePresence>
                </Menu>
            </Nav>
        </Container>
    )
}

export default HeaderSm
