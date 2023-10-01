import React from 'react';
import star from '../../../../public/icons/star.svg';

export default function StarIcon() {
  return(
    <div>
      <img src={star} alt='pick' className='w-5 h-5'/>
    </div>
  );
}