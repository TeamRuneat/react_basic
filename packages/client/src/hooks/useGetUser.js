import { useQuery } from '@tanstack/react-query';
import { getUser, loginCheck } from '../apis/authApi';

const useGetUser = () => {
  const { data: isLoggedIn } = useQuery(['isLoggedIn'], loginCheck);
  const { data } = useQuery(['user'], getUser, {
    enabled: !!isLoggedIn,
  });
  return { data };
};

export default useGetUser;
