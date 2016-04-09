// Vendor Dependencies
import React from 'react';
import { render } from 'react-dom';
import Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

// Import App
import App from './components/App';
import LoadingScreen from './components/LoadingScreen';

// CSS
import './styles/loading-screen';
import './styles/main';

// Init App
Promise.polyfill();

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

// Render loading screen and then the app once both the APIs have responded

render(<LoadingScreen />, document.getElementById('app'));

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
