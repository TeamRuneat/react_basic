import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../login/LoginModal';
import UserProfile from '../user/UserProfile';
import { useUser } from '../../hooks/auth/useUser';

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const { data: user } = useUser();
  
  return (
    <header className='mt-20 mb-10 mx-[300px] flex justify-between items-center'>
      <h1>
        <Link to='/' className='text-[60px] leading-[66px] font-BMJua text-main'>
          런잇
        </Link>
      </h1>
      <nav className='text-20 flex items-center'>
        {user ? (
          <div className='flex items-center'>
            <Link to='/mypage' className='flex items-center'>
              <UserProfile />
            </Link>
            <Link to='/new' className='ml-8'>
              등록하기
            </Link>
          </div>
        ) : (
          <button onClick={() => setOpenModal(true)} >
            로그인
          </button>
        )}
        {openModal && <LoginModal onCloseModal={() => setOpenModal(false)} />}
      </nav>
    </header>
  );
}
