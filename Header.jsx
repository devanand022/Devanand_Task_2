import React from 'react';
import './Header.css';

const Header = ({ children }) => {
    return(
        <div className='header-container'>
            {children}
        </div>
    )
}

export default Header;