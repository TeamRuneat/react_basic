import React from 'react';
import { useShops } from '../../hooks/shop/useShops';
import ShopListItem from '../../components/shop/ShopListItem';
import Searchbox from '../../components/search/Searchbox';

export default function ShopList() {
  const { data: shops } = useShops();
  
  return (
    <main>
      <Searchbox />
      <section className='mx-[295px] mt-36'>
        <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-3 gap-[60px]'>
          {shops?.map((item) => (
            <ShopListItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}
