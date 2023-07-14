import { useQuery } from '@tanstack/react-query';
import { getUser } from '../apis/authApi';

const useGetUser = () => {
  return useQuery(['user'], () => getUser());
}

export default useGetUser;
