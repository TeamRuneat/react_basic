import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import LoginModal from '../login/LoginModal';
import logo from '../../../public/images/logo.png';

export default function Navbar(){
  const {user} = useState();
  const [openModal, setOpenModal] = useState(false);

  return(
    <header className='relative'>
      <h1 className='px-10 py-7 text-2xl inline-block'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[80px] h-[30]' />
        </Link>
      </h1>
      <nav className='absolute top-5 right-12 font-semibold'>
        {!user &&  <button onClick={() => setOpenModal(true)} className='p-5'>로그인</button>}
        {openModal && <LoginModal onCloseModal={() => setOpenModal(false)} />}
        {user && <Button text={'로그아웃'}/>}
      </nav>
    </header>
  );
}
