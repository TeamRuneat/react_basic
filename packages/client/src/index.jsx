import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NewShop from './pages/shop/new';
import MyPage from './pages/mypage';
import ProtectedRoute from './pages/ProtectedRoute';
import SearchPage from './pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/mypage', element: (
        <ProtectedRoute>
          <MyPage />
        </ProtectedRoute>
      )},
      { path: '/new', element: (
        <ProtectedRoute>
          <NewShop />
        </ProtectedRoute>
      )},
      { 
        path: '/search',
        element: <SearchPage />,
      }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
