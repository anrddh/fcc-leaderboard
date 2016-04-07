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

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

// Render app once both the APIs have responded
fetch('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
  .then(checkStatus)
  .then(parseJSON)
  .then(topRecent => {
    fetch('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(checkStatus)
      .then(parseJSON)
      .then(topAllTime => {
        render(<App alltime={topAllTime} recent={topRecent} />,
                document.getElementById('app'));
      });
  });
