import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

export default function HomePages() {
  const { isLoading, isError, data } = useSearchUsersQuery('valeri');

  console.log(data);
  

  return (
    <div>home</div>
  )
}
