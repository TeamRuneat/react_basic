import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ShopList from './shop';
import LoginModal from '../components/login/LoginModal';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { redirect, logout } = location.state || {};

  useEffect(() => {
    if (redirect && !logout) {
      setOpenModal(!openModal);
      navigate('/', { replace: true }); 
    } 
  }, [redirect, logout]);

  return (
    <>
      {openModal && <LoginModal onCloseModal={() => setOpenModal(false)} />}
      <ShopList />
    </>
  );
}