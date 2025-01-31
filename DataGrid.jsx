import React from 'react';
import './DataGrid.css';

const DataGrid = ({ children, data }) => {
    return (
        <div className='data-grid-container'>
            {children}
        </div>
    )
}

export default DataGrid;