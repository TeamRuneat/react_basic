import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Searchbox(){
  return(
    <div className='relative mx-auto mb-10 h-[40px] w-[450px]'>
      <input
        className='border-none bg-[#F1F1F5] rounded-full'
        type='text'
        placeholder='검색어를 입력해주세요'
      />
      <BsSearch className='absolute right-8 top-4 text-[#A1A9AD] cursor-pointer' />
    </div>
  );
}
