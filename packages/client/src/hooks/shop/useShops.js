import { useQuery } from '@tanstack/react-query';
import { getShops } from '../../apis/shopApi';

export const useShops = () => {
  return useQuery(['shops'], getShops);
};