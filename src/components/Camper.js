import React from 'react';

const Camper = props => (
  <tr>
    <td><img src={props.avatar} /></td>
    <td>{props.username}</td>
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
