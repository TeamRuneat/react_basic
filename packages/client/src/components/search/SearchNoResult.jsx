import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchNoResult() {
  const navigate = useNavigate();
  
  return(
    <section>
      <div className='flex flex-col justify-center items-center h-[calc(100vh-300px)]'>
        <p className='my-3 text-xl font-bold leading-6'>검색한 결과가 없습니다</p>
        <p>검색한 식당이 런잇에 없다면? 등록하기 버튼을 통해 식당을 등록해주세요!</p>
        <button 
          onClick={() => navigate('/')}
          className='mt-3 py-3 px-4 bg-black text-white text-sm font-bold rounded-full'
        >
          등록하기
        </button>
      </div>
    </section>
  );
}