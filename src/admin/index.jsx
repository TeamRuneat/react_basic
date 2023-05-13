import React from 'react';
import { createRoot } from 'react-dom/client';
import AdminPage from './adminPage';

console.log('test');
if (process.env.NODE_ENV === 'development') {
  const {worker} = require('../mocks/browser');
  worker.start();
}

const root = createRoot(document.getElementById('root'));
root.render(<AdminPage />);
