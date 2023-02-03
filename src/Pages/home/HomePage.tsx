import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounce';
import { useSearchUsersQuery } from '../../store/github/github.api';
import style from './homepage.module.sass';

export default function HomePages() {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  });

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data])

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

        {dropdown && <ul className={style.dropdown}>
          { isLoading && <p className={style.loading}>Loading...</p> }
          { data?.map(user => (
            <li 
              key={user.id}
              className={style.li}
            >
              { user.login }
            </li>
          )) }
        </ul>}
      </div>
    </div>
  )
}
