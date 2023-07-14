import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';
import LoginModal from '../login/LoginModal';
import useGetUser from '../../hooks/useGetUser';

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const { data: user } = useGetUser();
  
  return (
    <header className='flex justify-between'>
      <h1 className='px-10 py-7 text-2xl inline-block'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[80px] h-[30]' />
        </Link>
      </h1>
      <nav className='mx-12 flex items-center font-semibold'>
        {user ? (
          <div className='mr-3'>
            <Link to='/mypage' state={user} className='flex items-center'>
              <div className='md:block mr-4'>{user?.properties?.nickname}</div>
              <div className='w-16 h-16'>
                <img
                  src={user?.properties?.thumbnail_image}
                  alt='프로필'
                  className='w-full h-full rounded-full'
                />
             </div>
            </Link>
          </div>
        ) : (
          <button onClick={() => setOpenModal(true)} className='p-5'>로그인</button>
        )}
        {openModal && <LoginModal onCloseModal={() => setOpenModal(false)} />}
      </nav>
    </header>
  );
}
