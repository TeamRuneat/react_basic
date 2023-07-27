import React from 'react';
import KakaoLoginButton from './KakaoLoginButton';
import runeat from '../../../public/icons/runeat_logo.svg';

export default function LoginModal({onCloseModal}){
  return (
    <div className='fixed grid place-items-center inset-0 z-20'>
      <div onClick={onCloseModal} className='absolute inset-0 bg-dim opacity-70 z-20'></div>
      <section className='py-[70px] flex flex-col items-center rounded-[20px] w-[600px] bg-white border border-[#707070 z-30'>
        <h1 className='mb-4 text-20 leading-[22px]'>직장인들의 즐거운 점심시간</h1>
        <h2 className='font-[BMJua] text-[90px] leading-[90px] text-[#009389]'>런잇</h2>
        <span className='pr-[230px] pl-[153px] pt-14 pb-[150px]'><img src={runeat} alt='runeat'/></span>
        <KakaoLoginButton />
      </section>
    </div>
  );
}
