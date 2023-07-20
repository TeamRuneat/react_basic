import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Checkbox from '../common/Checkbox';
import BookmarkButton from '../common/BookmarkButton';
import restaurant from '../../../public/images/shop.jpg';

export default function ShopListItem({ item }){
  const [bookmark, setBookmark] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onToggleHandler = () => {
    setBookmark(!bookmark);
  };

  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  return(
    <li className='relative py-3'>
      <Checkbox isChecked={isChecked} id={item.id} onChange={onCheckHandler}/>
      <Link>
        <img src={restaurant} alt='식당이미지'  className='my-3 rounded-lg'/>
        <div>
          <div className='font-semibold'>{item.title} - {item.type[0]}ㆍ{item.type[1]}</div>
          <div>
            <AiFillStar className='inline-block mt-[-3px] mr-1 text-[#ffc01d] align-text-bottom'/>
            <span className='text-sm font-medium align-text-bottom'>{item.rating}</span>
            <span className='ml-1 text-sm align-text-bottom text-[#999]'>({item.ratingCount})</span>
          </div>
          <div className='mt-1'>
            <span className='text-sm font-semibold'>#{item.tags[0]}</span>
            <span className='ml-2 text-sm font-semibold'>#{item.tags[1]}</span>
          </div>
          <div className='my-2 text-sm font-bold'>평균: {item.averagePrice}원</div>
          <BookmarkButton bookmark={bookmark} onClick={onToggleHandler} />
        </div>
      </Link>
    </li>
  );
}
