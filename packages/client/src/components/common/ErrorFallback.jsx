import React from 'react';
import runeat from '../../../public/images/run_eat01.png';

const getErrorMessage = (status) => {
  switch (status) {
    case 403:
      return {
        title: '데이터를 불러오는데 실패하였습니다.',
        content: '다시 시도 해주세요.',
      };
    case 409:
    case 500:
      return {
        title: '서비스에 접속할 수 없습니다.',
        content: '새로고침을 하거나 잠시 후 다시 접속해 주시기 바랍니다.',
      };
  }
};

export default function ErrorFallback({ error, resetErrorBoundary }) {
  const { status } = error.response;
  const { title, content } = getErrorMessage(status);

  return(
    <div className='flex flex-col justify-center items-center h-screen'>
      <div><img src={runeat} alt='런잇' className='w-64 h-auto' /></div>
      <p className='py-5 text-xl font-bold'>{title}</p>
      <button onClick={() => resetErrorBoundary} className='border-gray-950 border p-3 rounded-lg font-bold'>{content}</button>
    </div>
  );
}
