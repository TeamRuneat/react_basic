import React from 'react';
import SvgIcon from '../ui/SvgIcon';
import social from '../../../public/icons/social.svg';

const KAKAO_AUTH_URL = '/api/auth';

export default function KakaoLoginButton() {
  return (
    <div className='relative w-[470px] leading-[80px] text-center bg-[#fbe44d]'>
      <span className='absolute left-2/4 bottom-full -translate-x-1/2 block mb-[10px]'>
        <SvgIcon type={social} id='kakao-tooltip' width={211} height={57} />
      </span>
      <a className='block text-20 font-bold' href={KAKAO_AUTH_URL}>
        <span className='mr-[30px] inline-block align-middle'>
          <SvgIcon type={social} id='kakao-logo' width={40} height={36} />
        </span>
        카카오로 시작하기
      </a>
    </div>
  );
}
