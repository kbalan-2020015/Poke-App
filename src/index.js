import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Pokemon} from './components/datos/Pokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pokemon />
  </React.StrictMode>
);