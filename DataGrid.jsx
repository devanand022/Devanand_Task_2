import React from 'react';
import './DataGrid.css';

const DataGrid = ({children}) => {
    return (
        <div className='data-grid-container'>
            {children}
        </div>
    )
}

export default DataGrid;