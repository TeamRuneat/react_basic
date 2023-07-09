import React from 'react';
import kakao from '../../../public/icons/kakao_logo.svg';
import kakaoTooltip from '../../../public/icons/kakao_tooltip.svg';

const KAKAO_AUTH_URL = '/api/auth';

export default function KakaoLoginButton(){
  return (
    <div className='relative w-[659px] leading-[100px] text-center bg-[#fbe44d]'>
      <span className='absolute left-2/4 bottom-full -translate-x-1/2 block mb-[10px]'>
        <img src={kakaoTooltip} alt='kakao_tooltip' />
      </span>
      <a className='block text-24' href={KAKAO_AUTH_URL}>
        <img src={kakao} alt='kakao_logo' className='mr-[30px] inline-block' />
        카카오로 시작하기
      </a>
    </div>
  );
}
