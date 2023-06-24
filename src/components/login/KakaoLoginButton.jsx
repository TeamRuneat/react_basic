import React from 'react';
import { Link } from 'react-router-dom';
import kakao from '../../../public/icons/kakao_logo.svg';

const REST_API_KEY = 'e0fe8a1a2f88dba51e4c6ae55157e96c';
const REDIRECT_URI = 'http://localhost:8088/oauth/kakao/callback';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function KakaoLoginButton(){
  return (
    <div className='w-[659px] leading-[100px] text-center bg-[#fbe44d]'>
      <Link className='block text-24' to={KAKAO_AUTH_URL}>
        <img src={kakao} alt='kakao_logo' className='mr-[30px] inline-block' />
        카카오로 시작하기
      </Link>
    </div>
  )
}
