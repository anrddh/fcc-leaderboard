// Vendor Dependencies
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

// Import App
import App from './components/App';

// Init App
Promise.polyfill();
injectTapEventPlugin();

// Render app once both the APIs have responded
fetch('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
  .then(response => response.json())
  .then(topRecent => {
    fetch('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => response.json())
      .then(topAllTime => {
        render(<App topAllTime={topAllTime} topRecent={topRecent} />,
                document.getElementById('app'));
      });
  });
