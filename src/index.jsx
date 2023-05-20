import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import User from './pages/User';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/oauth/kakao/callback', element: <Auth /> },
      { path: '/users', element: <User /> }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
