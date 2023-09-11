import React from 'react';
import { Link } from 'react-router-dom';
import { PRICE_RANGE } from '../../constants/priceRange';
import { FOOD_TYPE } from '../../constants/foodType';
import shop from '../../../public/images/shop.jpg';
import PickIcon from '../ui/icons/PickIcon';
import StarIcon from '../ui/icons/StarIcon';

export default function ShopListItem({ item }) {
  const { title, type, priceRange, tags, imageUrls } = item;
  
  const foodPrice = PRICE_RANGE.find((option) => option.value === priceRange);
  const foodType = FOOD_TYPE.find((option) => option.value === type[0]);

  return (
    <li>
      <Link>
        <div className='relative mb-5'>
          <div>
            <img src={shop} alt='식당이미지' className='rounded-lg' />
          </div>
          <button className='absolute top-4 right-4'>
            <PickIcon />
          </button>
          <div className='py-2 px-[14px] flex items-center absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg backdrop-blur-xl bg-white/50'>
            <StarIcon />
            <span className='ml-2 text-main text-22 font-medium'>3.7</span>
          </div>
        </div>
        <div>
          <div className='flex mb-5 justify-between leading-6'>
            <span className='text-22 font-bold'>{title}</span>
            <span className='text-20 font-bold'>{foodType ? foodType.label : ''}</span>
          </div>
          <div className='mb-[10px]'>
            {tags.map((tag) => (
              <span key={tag} className='mr-1 text-20 leading-5'>
                #{tag}
              </span>
            ))}
          </div>
          <div className='text-darkgray text-16 leading-4'>{foodPrice ? foodPrice.label : ''}</div>
        </div>
      </Link>
    </li>
  );
}
