import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className='footer-container'>
            {props.children}
        </div>
    )
}

export default Footer;