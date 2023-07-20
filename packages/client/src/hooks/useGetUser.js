import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../apis/authApi';

const useGetUser = () => {
  const navigate = useNavigate();
  return useQuery(['user'], getUser, {
    onError: (error) => {
      const { response } = error;
      if (response.status === 403) {
        navigate('/');
      }
    },
  });
}

export default useGetUser;