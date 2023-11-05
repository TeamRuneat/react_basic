import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactDaumPost from 'react-daumpost-hook';
import FormErrorMessage from './FormErrorMessage';

export default function ShopLocation (){
  const { register, setValue, errors } = useFormContext();
  const [shopAddress, setShopAddress] = useState('');
  
  const postConfig = {
    onComplete: (data) => {
      const locationData = {
        sido: data.sido,
        sigungu: data.sigungu,
        query: data.query
      };
      setShopAddress(data.address);
      setValue('location', locationData);
    },
  };

  const postCode = ReactDaumPost(postConfig);

  return(
    <>
      <div className='flex'>
        <input 
          readOnly 
          value={shopAddress || ''} 
          {...register('location', { required: '필수입력 정보입니다.' })}
        />
        <button 
          type='button'
          onClick={postCode}
          className='ml-4 border border-black w-[100px] rounded-[10px] text-18'
        >
        주소찾기
        </button>
      </div>
      <FormErrorMessage name={'location'} errors={errors} />
    </>
  );
}