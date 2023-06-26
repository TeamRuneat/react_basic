import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShopListItem from '../../components/shop/ShopListItem';
import Button from '../../components/common/Button';
import Searchbox from '../../components/common/Searchbox';

const serverUrl = 'https://43.200.176.108.nip.io'; // TODO 임시
const shopOptions = ['음식', '가격', '태그'];
const sortOptions = ['거리순', '별점순', '최신순'];

export default function ShopList(){
  const [lists, setLists] = useState([]);
  const [foodSelected, setFoodSelected] = useState(shopOptions[0]);
  const [sortSelected, setSortSelected] = useState(sortOptions[0]);

  const SELECT_CLASS = 'py-1 pl-2 pr-6 cursor-pointer utline-none';

  useEffect(() => {
    const getLists = async () => {
      try{
        const res = await axios.get(`${serverUrl}/shop-list`);
        setLists(res.data);
      } catch(error) {
        console.log(error);
      }
    };
    getLists();
  }, []);

  return (
    <div>
      <Searchbox />
      <div className='relative'>
        <div className='ml-8'>
          <select
            id='shopSelect'
            className={SELECT_CLASS}
            value={foodSelected}
            onChange={(e) => setFoodSelected(e.target.value)}
          >
            {shopOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <select
            id='sortSelect'
            className={SELECT_CLASS}
            value={sortSelected}
            onChange={(e) => setSortSelected(e.target.value)}
          >
            {sortOptions.map((option, index) => (
              <option key={index} >{option}</option>
            ))}
          </select>
        </div>
        <div className='absolute top-0 right-8'>
          <Button text={'공유하기'} variant='default' />
          <Button text={'랜덤뽑기'} variant='border' />
        </div>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-10 p-10'>
        {lists?.map((item) => <ShopListItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
