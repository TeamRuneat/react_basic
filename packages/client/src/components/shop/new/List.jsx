import React from 'react';

export default function List({ title, children }) {
  return (
    <div className='flex relative py-4 min-h-40px'>
      <div className='self-center w-20 text-16 font-medium'>{title}</div>
      <div className='relative w-[calc(100%-80px)]'>{children}</div>
    </div>
  );
}
