import { useQuery } from '@tanstack/react-query';
import { loginCheck, getUser } from '../apis/authApi';

export const useCheckLogin = () => {
  return useQuery(['isLoggedIn'], loginCheck);
};

export const useUser = () => {
  const { data : isLoggedIn } = useCheckLogin();
  return useQuery(['user'], getUser, {
    enabled: !!isLoggedIn,
  });
};
