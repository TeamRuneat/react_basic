import React from 'react';
import { useNavigate } from 'react-router-dom';
import runeat from '../../public/icons/runeat_logo.svg';

export default function NotFound() {
  const navigate = useNavigate();
  return(
    <div className='flex flex-col justify-center items-center text-center h-screen'>
      <div>
        <img src={runeat} alt='로고' className='w-64 h-auto' />
      </div>
      <div className='my-7'>
        <p>찾을 수 없는 페이지입니다.</p>
        <p className=' text-zinc-700'>주소가 올바르지 않거나 알 수 없는 오류로 인해 페이지를 찾을 수 없습니다</p>
      </div>
      <button onClick={() => navigate('/')} className='border-gray-950 border p-3 rounded-lg'>홈으로 돌아가기</button>
    </div>
  );
}
