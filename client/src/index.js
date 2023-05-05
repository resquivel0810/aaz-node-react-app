import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import {GoogleOAuthProvider} from '@react-oauth/google';

import './index.css';

// 243955776055-ivvs2fa9mcg2uq4ouqni44dpthq05no3.apps.googleusercontent.com

ReactDOM.render(
  <React.StrictMode>

    <GoogleOAuthProvider clientId="243955776055-ivvs2fa9mcg2uq4ouqni44dpthq05no3.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
      registration.waiting.postMessage({type: 'SKIP_WAITING'});
      window.location.reload();
  }
});