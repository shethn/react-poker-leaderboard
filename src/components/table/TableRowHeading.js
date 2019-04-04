import React from 'react';
import PropTypes from 'prop-types';

const TableRowHeading = ( {rowHeadings} ) => {
    return (
        <tr>
            {rowHeadings.map( (heading, idx) =>
                <th scope="col" key={idx}>{heading}</th>
            )}
        </tr>
    )
}

TableRowHeading.propTypes = {
    rowHeadings: PropTypes.array.isRequired
}

export default TableRowHeading;