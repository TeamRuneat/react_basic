import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckLogin } from '../hooks/useUser';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { data : isLoggedIn } = useCheckLogin();

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  
  return children;
}
