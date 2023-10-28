import React, { useEffect, useState } from 'react';
import ReactDaumPost from 'react-daumpost-hook';
import FormErrorMessage from './FormErrorMessage';

export default function ShopLocation ({ register, setShopLocation, errors, validation }){
  const [shopAddress, setShopAddress] = useState('');

  const postConfig = {
    onComplete: (data) => {
      console.log(data);
      setShopAddress(data.address);
    },
  };

  const postCode = ReactDaumPost(postConfig);

  useEffect(() => {
    setShopLocation('location', shopAddress);
  }, [shopAddress, setShopLocation]);

  return(
    <>
      <div className='flex'>
        <input 
          readOnly 
          value={shopAddress || ''} 
          {...register('location', validation.text)}
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