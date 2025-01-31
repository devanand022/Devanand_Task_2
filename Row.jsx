import React from 'react';
import './Row.css';

const Row = (props) => {
    return(
        <div className='row-container'>
            {props.children}
        </div>
    )
}

export default Row;