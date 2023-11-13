import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchShops } from '../../hooks/shop/useSearchShops';
import SearchNoResult from '../../components/search/SearchNoResult';
import SearchResultShops from '../../components/search/SearchResultShops';
import Searchbox from '../../components/search/Searchbox';

export default function SearchPage() {
  const [searchParams] = useSearchParams(); 
  const keyword = searchParams.get('keyword'); 
  const { data: shops } = useSearchShops(keyword);

  return (
    <section>
      <Searchbox />
      {!shops.length ? (
        <SearchNoResult />
      ) : (
        <ul>
          {shops.map((shop) => (
            <li key={shop.id}>
              <SearchResultShops shop={shop} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
