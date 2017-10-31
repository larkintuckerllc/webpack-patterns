import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

window.console.log(process.env.NODE_ENV);
render(
  <App />,
  document.getElementById('root'),
);
