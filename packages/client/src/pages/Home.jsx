import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ShopList from './shop';
import LoginModal from '../components/login/LoginModal';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { redirect } = location.state || {};

  useEffect(() => {
    if (redirect) {
      setOpenModal(true);
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <>
      {openModal && <LoginModal onCloseModal={() => setOpenModal(false)} />}
      <ShopList />
    </>
  );
}
