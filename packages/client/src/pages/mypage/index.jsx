import React from 'react';
import Button from '../../components/common/Button';
import useGetUser from '../../hooks/useGetUser';

export default function MyPage() {
  const { data : user } = useGetUser();

  return (
    <div className='mx-60'>
      <h2 className='mb-5 text-2xl border-b-4 border-slate-950 font-bold'>런잇 프로필 관리</h2>
      <div className='flex items-center py-7'>
        <div className='mr-5 w-20 h-20'>
          <img src={user?.properties?.thumbnail_image} alt='프로필' className='w-full h-full rounded-full' />
        </div>
        <div>
          <strong>{user?.properties?.nickname}</strong>
          <div>
            <button>이미지 변경</button>
            <button>삭제</button>
          </div>
        </div>
      </div>
      <ul className='max-w-2xl'>
        <li className='flex flex-col py-7'>
          <h3 className='mb-3 text-lg font-semibold'>이메일 등록</h3>
          <div className='flex'>
            <input type='text' placeholder='aaa@run_eat.com' />
            <Button text={'등록하기'} variant='default' />
          </div>
        </li>
        <li className='flex flex-col py-7'>
          <h3 className='mb-3 text-lg font-semibold'>프로필 이름</h3>
          <div className='flex'>
            <input type='text' placeholder='이름을 설정해주세요' />
            <Button text={'변경하기'} variant='default' />
          </div>
        </li>
        <li className='flex flex-col py-7'>
          <h3 className='mb-3 text-lg font-semibold'>소개</h3>
          <div className='flex'>
            <input type='text' placeholder='나를 소개하세요' />
            <Button text={'변경하기'} variant='default' />
          </div>
        </li>
      </ul>
    </div>
  );
}
