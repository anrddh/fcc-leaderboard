import React from 'react';
import Camper from './Camper';

const CamperList = props => (
  <table>
    <thead>
      <tr>
        <th>Avatar</th>
        <th>Username</th>
        <th>Recent</th>
        <th>All Time</th>
      </tr>
    </thead>
    <tbody>
      {props.list.map((camper, index) => (
        <Camper
          username = { camper.username }
          alltime = { camper.alltime }
          recent = { camper.recent }
          avatar = { camper.img }
          key = {index}
        />
      ))}
    </tbody>
  </table>
);

CamperList.propTypes = {
  list: React.PropTypes.array,
};

export default CamperList;
