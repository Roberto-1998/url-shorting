import { useMutation } from 'react-query';

import { postLink } from '../services/link.service';

const useCreateShortLink = () => {
  const { data, mutate, isError, isLoading } = useMutation(postLink);

  return { data, mutate, isError, isLoading };
};

export default useCreateShortLink;
