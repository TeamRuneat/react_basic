import React from 'react';
import { Link } from 'react-router-dom';

export default function KakaoLogin(){
  const REST_API_KEY = 'e0fe8a1a2f88dba51e4c6ae55157e96c';
  const REDIRECT_URI = 'http://localhost:8088/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div className='h-[3.2rem] w-full leading-[3.2rem] rounded text-center bg-[#fee500]'>
            <Link className='block' to={KAKAO_AUTH_URL}>카카오로 로그인</Link>
        </div>
    )
}
