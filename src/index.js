import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app.js';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
