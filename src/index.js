import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = 'dev-hgjvt3nete8ug2zk.us.auth0.com';
const clientId = 'g2MCAR0qOtE0TGOC3phbAKVR0rAHEbzG';

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
            <App/>
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
