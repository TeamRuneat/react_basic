import React from 'react';
import useGetUser from '../../hooks/useGetUser';

export default function User(){
  const { data: user } = useGetUser(); 

  return(
    <>
      <div className='md:block mr-4 font-semibold'>{user?.properties?.nickname}</div>
      <div className='w-16 h-16'>
        <img
          src={user?.properties?.thumbnail_image}
          alt='프로필'
          className='w-full h-full rounded-full'
        />
     </div>
    </>
  )
}