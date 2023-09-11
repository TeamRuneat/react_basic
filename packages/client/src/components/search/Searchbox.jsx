import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../ui/icons/SearchIcon';
import banner from '../../../public/images/banner.jpg';

export default function Searchbox(){
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if(!keyword) {
      alert('검색어를 입력해주세요!');
    } else {
      navigate(`/search?keyword=${keyword}`);
    }
  }

  return(
    <section className='relative h-[340px]'>
      <div 
        className='w-full h-full bg-cover' 
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='relative mx-auto w-[757px] h-[70px]'>
          <input
            className='pl-[30px] pr-10 border-none bg-[#eeeeee] rounded-[10px] text-[#777777] text-20 leading-[70px]'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type='text'
            placeholder='식당, 음식, 메뉴로 검색해보세요'
          />
          <button 
            className='absolute top-[18px] right-10'
            onClick={handleSearch}  
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
