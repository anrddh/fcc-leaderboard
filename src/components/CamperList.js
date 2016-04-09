import React from 'react';
import Camper from './Camper';
import '../styles/camper-list';

const CamperList = props => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th><em>Recent</em></th>
        <th><em>All Time</em></th>
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
