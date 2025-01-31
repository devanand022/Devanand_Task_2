import React from 'react';
import './Body.css';

const Body = ({ chlidren }) => {
    return(
        <div className="body-container">
            {chlidren}
        </div>
    )
}

export default Body;