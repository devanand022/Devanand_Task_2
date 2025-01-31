import React from 'react';
import './Column.css';

const Column = (props) => {
    const { field, sortable, filter, children } = props;
    
    return(
        <div className='column-container'>
            {children}
        </div>
    )
}

export default Column;