import React from 'react';
import logo1 from './nf.png';
import logo2 from './logo.png';
import './Nav.css';
import { useState, useEffect } from 'react';

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div>
            <div className={`nav ${show && "nav__black"}`}>
                <img className="nav__logo" src={logo1} alt="NetFlix-logo" />
                <img className="nav__avtar" src={logo2} alt="netflix-logo" />
            </div>
        </div>
    )
}

export default Nav
