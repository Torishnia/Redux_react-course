import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounce';
import { useSearchUsersQuery } from '../../store/github/github.api';
import style from './homepage.module.sass';

export default function HomePages() {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  });

  useEffect(() => {
    console.log(debounced);
  }, [debounced])

  return (
    <div className={style.home}>
      { isError && <p className={style.error}>Something went wrong...</p> }

      <div className={style.container}>
        <input
          type='text'
          className={style.input}
          placeholder='Search for Github username...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className={style.dropdown}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  )
}
