import React from 'react';
import ShopCreateForm from '../../../components/shop/new/ShopCreateForm';

export default function NewShop() {
  return (
    <div className='mx-auto max-w-[875px] mb-40'>
      <h2 className='mb-20 text-28 font-bold text-center'>
        식당 등록하기
      </h2>
      <ShopCreateForm />
    </div>
  );
}
