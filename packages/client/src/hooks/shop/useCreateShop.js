import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewShop } from '../../apis/shopApi';

export const useCreateShop = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => addNewShop(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['shops']);
    },
    onError: (error) => {
      const { response } = error;
      console.log(response);
    },
  });
};