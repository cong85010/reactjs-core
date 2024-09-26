import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';

export const useFetch = <T>(
  key: string | QueryKey,
  fn: QueryFunction<T, QueryKey>,
) => {
  const queryKey: QueryKey = typeof key === 'string' ? [key] : key;
  return useQuery<T>({
    queryKey,
    queryFn: fn,
  });
};
