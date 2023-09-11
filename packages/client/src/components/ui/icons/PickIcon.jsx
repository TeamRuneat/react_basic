import React from 'react';
import pick from '../../../../public/icons/pick.svg';

export default function PickIcon() {
  return(
    <div>
      <img src={pick} alt='pick' className='w-[25px] h-[22px]'/>
    </div>
  );
}