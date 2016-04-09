import React from 'react';
import '../styles/camper';

const Camper = ({ avatar, username, recent, alltime }) => (
  <tr>
    <td className="username">
      <img src={avatar} className="avatar" />
      <a href={`https:/freecodecamp.com/${username}`}>
        {username}
      </a>
    </td>
    <td>{recent}</td>
    <td>{alltime}</td>
  </tr>
);

Camper.propTypes = {
  username: React.PropTypes.string,
  alltime: React.PropTypes.number,
  recent: React.PropTypes.number,
  avatar: React.PropTypes.string,
};

export default Camper;
