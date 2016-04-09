import React from 'react';

import Camper from './Camper';
import '../styles/camper-list';

const CamperList = ({ currentList, switchList, list }) => (
  <table>
    <thead>
      {(() => {
        if (currentList === 'recent') {
          console.log('yo');
          return (
            <tr>
              <th></th>
              <th><em>Recent</em> &#9662;</th>
              <th onClick = { switchList }><em>All Time</em></th>
            </tr>
          );
        }

        return (
          <tr>
            <th></th>
            <th onClick = { switchList }><em>Recent</em></th>
            <th><em>All Time</em> &#9662;</th>
          </tr>
        );
      })()}
    </thead>
    <tbody>
      {list.map((camper, index) => (
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
  switchList: React.PropTypes.func,
  currentList: React.PropTypes.string,
};

export default CamperList;
