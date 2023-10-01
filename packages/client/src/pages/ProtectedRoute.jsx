import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckLogin } from '../hooks/auth/useUser';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { data: isLoggedIn } = useCheckLogin();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { state: { redirect: true } });
    }
  }, []);

  return children;
}
