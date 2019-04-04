import React from 'react';
import TableRowHeading from './TableRowHeading';
import TableRowData from './TableRowData';
import PropTypes from 'prop-types';

const PlayerTable = ( {tableHeading, rowHeadings, players} ) => {
    let playerArray = Object.keys(players).map( id => players[id] );
    return (
        <div className="table-responsive">
            <header>
                <h4>{tableHeading}</h4>
            </header>
            <table className="table table-striped">
                <thead className="thead-light">
                    <TableRowHeading
                        rowHeadings={rowHeadings}
                    />
                </thead>
                <tbody>
                    <TableRowData
                        players={playerArray}
                    />
                </tbody>
            </table>
        </div>
    );
}

PlayerTable.propTypes = {
    players: PropTypes.object.isRequired,
    tableHeading: PropTypes.string.isRequired,
    rowHeadings: PropTypes.array.isRequired
}

export default PlayerTable;