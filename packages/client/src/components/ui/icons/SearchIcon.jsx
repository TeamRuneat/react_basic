import React from 'react';
import search from '../../../../public/icons/search.svg';

export default function SearchIcon() {
  return(
    <div>
      <img src={search} alt='검색' className='w-[34px] h-[34px]' />
    </div>
  );
}