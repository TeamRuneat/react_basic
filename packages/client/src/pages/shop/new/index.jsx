import React from 'react';
import ShopCreateForm from '../../../components/shop/new/ShopCreateForm';

export default function NewShop() {
  return (
    <div className='mx-80'>
      <h2 className='mb-5 text-2xl border-b-4 border-slate-950 font-bold'>
        식당 등록하기
      </h2>
      <ShopCreateForm />
    </div>
  );
}
