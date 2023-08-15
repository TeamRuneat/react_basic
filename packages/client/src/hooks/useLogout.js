import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../apis/authApi';

const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.setQueryData(['isLoggedIn'], false);
    },
    onError: (error) => {
      const { response } = error;
      console.log(response);
    },
  });
};
  
export default useLogout;
  