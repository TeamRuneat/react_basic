import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRICE_RANGE } from '../../constants/priceRange';
import { FOOD_TYPE } from '../../constants/foodType';
import ShopListImage from './ShopListImage';
import SvgIcon from '../ui/SvgIcon';
import ToggleButton from '../common/ToggleButton';
import common from '../../../public/icons/common.svg';

export default function ShopListItem({ shop }) {
  const [liked, setLiked] = useState(false);
  const { title, type: cuisineType, priceRange, tags, imageUrl } = shop;

  const foodPrice = PRICE_RANGE.find((option) => option.value === priceRange);
  const foodType = FOOD_TYPE.find((option) => option.value === cuisineType[0]);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <li>
      <Link>
        <div className='relative mb-5'>
          <ShopListImage image={imageUrl} />
          <ToggleButton
            className='absolute top-4 right-4'
            toggled={liked}
            onToggle={handleLike}
            onIcon={<SvgIcon type={common} id='pick-fill' width={25} height={22} />}
            offIcon={<SvgIcon type={common} id='pick' width={25} height={22} />}
          />
          <div className='py-2 px-[14px] flex items-center absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg backdrop-blur-xl bg-white/50'>
            <SvgIcon type={common} id='star' width={20} height={20} />
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
