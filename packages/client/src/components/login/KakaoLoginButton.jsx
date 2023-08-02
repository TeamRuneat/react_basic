import React from 'react';
import kakao from '../../../public/icons/kakao_logo.svg';
import kakaoTooltip from '../../../public/icons/kakao_tooltip.svg';

const KAKAO_AUTH_URL = '/api/auth';

export default function KakaoLoginButton() {
  return (
    <div className='relative w-[470px] leading-[80px] text-center bg-[#fbe44d]'>
      <span className='absolute left-2/4 bottom-full -translate-x-1/2 block mb-[10px]'>
        <img src={kakaoTooltip} alt='kakao_tooltip'/>
      </span>
      <a className='block text-20 font-bold' href={KAKAO_AUTH_URL}>
        <span className='mr-[30px] inline-block align-middle'><img src={kakao} alt='kakao_logo' className='w-10 h-9'/></span>
        카카오로 시작하기
      </a>
    </div>
  );
}
