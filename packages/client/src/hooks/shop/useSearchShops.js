import { useQuery } from '@tanstack/react-query';
import { searchShops } from '../../apis/shopApi';

export const useSearchShops = (keyword) => {
  return useQuery(['shops', keyword], () => searchShops(keyword),
  {
    enabled: !!keyword,
  });
};

