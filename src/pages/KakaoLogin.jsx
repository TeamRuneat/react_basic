import React from 'react';
import { Link } from 'react-router-dom';
import { ImBubble } from 'react-icons/im';

const REST_API_KEY = 'e0fe8a1a2f88dba51e4c6ae55157e96c';
const REDIRECT_URI = 'http://localhost:8088/oauth/kakao/callback';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function KakaoLogin(){
  return (
    <div className='relative h-[3.2rem] w-[400px] leading-[3.2rem] rounded-full text-center bg-[#FEE500]'>
      <ImBubble className='absolute w-6 h-6 top-3 left-5' />
      <Link className='block font-medium ml-2 text-[#3B1E1E]' to={KAKAO_AUTH_URL}>카카오로 로그인</Link>
    </div>
  )
}
