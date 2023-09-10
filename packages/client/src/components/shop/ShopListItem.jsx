import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../common/Checkbox';
import BookmarkButton from '../common/BookmarkButton';

export default function ShopListItem({ item }) {
  const [bookmark, setBookmark] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onToggleHandler = () => {
    setBookmark(!bookmark);
  };

  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className='relative py-3'>
      <Checkbox isChecked={isChecked} id={item.id} onChange={onCheckHandler} />
      <Link>
        <img src={item.imageUrls[0]} alt='식당이미지' className='my-3 rounded-lg' />
        <div>
          <div className='font-semibold'>
            {item.title} - {item.type}
          </div>
          <div className='mt-1'>
            {item.tags.map((tag, index) => (
              <span key={index} className='mr-2 text-sm font-semibold'>
                #{tag}
              </span>
            ))}
          </div>
          <div className='my-2 text-sm font-bold'>평균: {item.priceRange}원</div>
          <BookmarkButton bookmark={bookmark} onClick={onToggleHandler} />
        </div>
      </Link>
    </li>
  );
}
