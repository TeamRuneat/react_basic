import React from 'react';

export default function Loader() {
  return (
    <div className='fixed overflow-y-auto inset-0 bg-dim z-50'>
      <div className='relative top-1/2 translate-y-1/2'>
        <div className='flex items-center justify-center space-x-2'>
          <div className='w-3 h-3 bg-brand rounded-full animate-bounce1'></div>
          <div className='w-3 h-3 bg-brand rounded-full animate-bounce2'></div>
          <div className='w-3 h-3 bg-brand rounded-full animate-bounce3'></div>
        </div>
      </div>
    </div>
  );
}
