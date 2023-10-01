import React from 'react';
import filter from '../../../../public/icons/filter.svg';

export default function FilterIcon() {
  return(
    <div>
      <img src={filter} alt='filter' className='w-[23px] h-[14]'/>
    </div>
  );
}