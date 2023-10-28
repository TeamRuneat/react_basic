import React from 'react';

export default function List({ title, children }) {
  return (
    <div className='flex relative mb-10 min-h-[50px]'>
      <div className='pt-3 w-[226px] text-20'>
        {title}
        <span className='pl-1 text-main'>*</span>
      </div>
      <div className='relative w-[calc(100%-226px)]'>{children}</div>
    </div>
  );
}
