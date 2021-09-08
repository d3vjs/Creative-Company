import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderDiv } from './HeaderLgStyles'

import logoImg from '../../../assets/images/logo-light.png';

function HeaderLg() {
    return (
        <HeaderDiv>
            <div className="header-container">
                <Link to="/" className="logo-container">
                    <img alt="logo" src={logoImg} className="logo" />
                </Link>
                <div className="link-container">
                    <ul className="links">
                        <li className="link">
                            <Link to="/about">Our Company</Link>
                        </li>
                        <li className="link">
                            <Link to="/locations">Locations</Link>
                        </li>
                        <li className="link">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-backdrop"></div>
        </HeaderDiv>
    )
}

export default HeaderLg
