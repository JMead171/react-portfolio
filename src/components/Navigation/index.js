import React from 'react';

const Nav = (props) => {

    return (
        <nav className='mynav-bar'>
            <ul className='nav-row'>
                <li className={`nav-bar ${ props.currentScreen === 'about me' ? 'navActive' : ''}`}>
                    <span onClick={() => props.handleClick('about me')}>About me</span>
                </li>
                <li className={`nav-bar ${ props.currentScreen === 'portfolio' ? 'navActive' : ''}`}>
                    <span onClick={() => props.handleClick('portfolio')}>Portfolio</span>
                </li>
                <li className={`nav-bar ${  props.currentScreen === 'contact' ? 'navActive' : ''}`}>
                    <span onClick={() => props.handleClick('contact')}>Contact</span>
                </li>
                <li className={`nav-bar ${  props.currentScreen === 'resume' ? 'navActive' : ''}`}>
                    <span onClick={() => props.handleClick('resume')}>Resume</span>
                </li>
            </ul>            
        </nav>
    );
}

export default Nav;