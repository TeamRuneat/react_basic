import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from '../apis/authApi';

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(['user'], logout, {
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.setQueryData(['isLoggedIn'], false);
      navigate('/');
    },
    onError: (error) => {
      const { response } = error;
      console.log(response);
    },
  });
}
  
  export default useLogout;
  