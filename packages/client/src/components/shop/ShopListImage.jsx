import React from 'react';

export default function ShopListImage({ image }) {
  return(
    <div 
      className='before:block before:pt-[52%] relative inline-block w-full overflow-hidden rounded-lg'>
      <img src={image[0]} alt='식당이미지' className='absolute top-0 left-0 object-cover h-full' />
    </div>
  );
}