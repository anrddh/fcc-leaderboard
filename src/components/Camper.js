import React from 'react';
import '../styles/camper';

const Camper = props => (
  <tr>
    <td className="username"><img src={props.avatar} className="avatar" />{props.username}</td>
    <td>{props.recent}</td>
    <td>{props.alltime}</td>
  </tr>
);

Camper.propTypes = {
  username: React.PropTypes.string,
  alltime: React.PropTypes.number,
  recent: React.PropTypes.number,
  avatar: React.PropTypes.string,
};

export default Camper;
