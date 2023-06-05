import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logo from '../../public/images/logo.png';

export default function Navbar(){
  const {user, setUser} = useState();
  const location = useLocation();

  if(location.pathname === '/login'){
    return null;
  }

  return(
    <header className='relative'>
       <h1 className='px-10 py-7 text-2xl'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[80px] h-[30]' />
        </Link>
      </h1>
      <nav className='absolute top-10 right-12 font-semibold'>
        {!user && <Link to='/login'>로그인</Link>}
        {user && <Button text={'로그아웃'}/>}
      </nav>
    </header>
  )
}
