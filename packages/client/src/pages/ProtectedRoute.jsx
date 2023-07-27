import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetUser from '../hooks/useGetUser';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { data : user } = useGetUser();

  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  }, [user])

  return children;
}
