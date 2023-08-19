import React, { useState } from 'react';
import ShopListItem from '../../components/shop/ShopListItem';
import Button from '../../components/common/Button';
import Searchbox from '../../components/common/Searchbox';
import { useShops } from '../../hooks/shop/useShops';

const shopOptions = ['음식', '가격', '태그'];
const sortOptions = ['거리순', '별점순', '최신순'];

export default function ShopList() {
  const [foodSelected, setFoodSelected] = useState(shopOptions[0]);
  const [sortSelected, setSortSelected] = useState(sortOptions[0]);
  const { data: shops } = useShops();
  
  return (
    <div>
      <Searchbox />
      <div className='relative'>
        <div className='ml-8'>
          <select
            id='shopSelect'
            className='py-1 pl-2 pr-6 cursor-pointer utline-none'
            value={foodSelected}
            onChange={(e) => setFoodSelected(e.target.value)}
          >
            {shopOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <select
            id='sortSelect'
            className='py-1 pl-2 pr-6 cursor-pointer utline-none'
            value={sortSelected}
            onChange={(e) => setSortSelected(e.target.value)}
          >
            {sortOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
        <div className='absolute top-0 right-8'>
          <Button text={'공유하기'} variant='default' />
          <Button text={'랜덤뽑기'} variant='border' />
        </div>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-10 p-10'>
        {shops?.map((item) => (
          <ShopListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
