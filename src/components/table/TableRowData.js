import React, {Fragment} from 'react';
import Flag from 'react-world-flags';
import PropTypes from 'prop-types';

const TableRowData = ( {players} ) => {
    return (
        <Fragment>
            {players.sort( (a, b) => b.winnings - a.winnings ).map( (player, idx) =>
                <tr className="player-row" key={player.id}>
                    <th scope="row">{idx + 1}</th>
                    <td>
                        <img src={player.avatar} style={{width: "40px", height: "40px", marginRight: "0.5em"}} alt="Player Avatar" />
                        <span>{player.name}</span>
                    </td>
                    <td>
                        <strong>
                            {"$" + player.winnings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </strong>
                    </td>
                    <td>
                        <Flag style={{marginRight: "0.5em"}} code={player.country} height={20}/>
                        {player.country}
                    </td>
                </tr>
            )}
        </Fragment>
    )
}

TableRowData.propTypes = {
    players: PropTypes.array.isRequired
}

export default TableRowData;