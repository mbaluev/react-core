import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import {App} from './core/app';
import './core/less/index.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
