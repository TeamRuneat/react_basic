import React from 'react';
import { Link } from 'react-router-dom';
import KakaoLoginButton from '../login/KakaoLoginButton';
import runeat from '../../../public/images/run_eat01.png';

export default function LoginModal({onCloseModal}){
  return (
    <div className='fixed grid place-items-center inset-0 z-20'>
      <div onClick={onCloseModal} className='absolute inset-0 bg-[#999999] opacity-70 z-20'></div>
      <section className='pt-20 pb-[93px] flex flex-col items-center rounded-[20px] w-[800px] bg-white border border-[#707070 z-30'>
        <h1 className='mb-4 text-20 leading-[22px]'>직장인들의 즐거운 점심시간</h1>
        <h2 className='mb-12 font-[BMJua] text-[90px] leading-[90px] text-[#009389]'>런잇</h2>
        <img src={runeat} alt='runeat' className='mb-7' />
        <KakaoLoginButton />
        <Link to='/' className='mt-16 text-20 underline underline-offset-2'>회원가입 문의</Link>
      </section>
    </div>
  );
}
