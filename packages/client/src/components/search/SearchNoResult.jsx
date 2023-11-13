import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '../ui/SvgIcon';
import common from '../../../public/icons/common.svg';

export default function SearchNoResult() {
  const navigate = useNavigate();
  
  return(
    <section>
      <div className='flex flex-col justify-center items-center h-[calc(100vh-150px)]'>
        <SvgIcon type={common} id='alert' width={80} height={80} />
        <p className='my-10 mb-5 text-28 font-bold leading-7'>검색어에 대한 결과가 없습니다.</p>
        <p className='text-24'>검색한 식당이 런잇에 없다면 등록하기 버튼을 통해 식당을 등록해주세요!</p>
        <button 
          onClick={() => navigate('/new')}
          className='mt-20 w-[422px] h-20 text-26 rounded-xl border border-black'
        >
          등록하기
        </button>
      </div>
    </section>
  );
}