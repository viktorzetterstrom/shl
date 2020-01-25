import React, { useEffect, useState } from 'react';
import shlService from '../../shl-service';
import TeamLogo from '../TeamLogo';
import TableContainer from '../TableContainer';
import Spinner from '../Spinner';

const PlayersTableHead = () => (
    <thead>
      <tr>
        <th></th>
        <th>Nr</th>
        <th>Name</th>
        <th>GP</th>
        <th>+/-</th>
        <th>A</th>
        <th>G</th>
        <th>TP</th>
      </tr>
    </thead>
);

const PlayersTableRow = ({ player }) => (
  <tr>
    <td><TeamLogo src={player.info.team.logo} name={player.info.team.name} /></td>
    <td>{player.info.number}</td>
    <td>{`${player.info.first_name} ${player.info.last_name}`}</td>
    <td>{player.gp}</td>
    <td>{player.plus_minus}</td>
    <td>{player.a}</td>
    <td>{player.g}</td>
    <td>{player.tp}</td>
  </tr>
);

const PlayersTable = ({ players, theme }) => (
  <TableContainer {...theme}>
    <PlayersTableHead />
    <tbody>
      {
        players.map((player, i) => <PlayersTableRow key={i} player={player} theme={theme} />)
      }
    </tbody>
  </TableContainer>
);

export default ({ theme }) => {
  const [players, setPlayers] = useState({ loading: true });
  useEffect(() => {
    shlService.players()
      .then(res => setPlayers(res.data))
      .catch(err => console.error(`Error fetching games: ${err}`));
  }, []);

  return !players.loading
    ? <PlayersTable players={ players } theme={ theme } />
    : <Spinner theme={ theme }/>
}