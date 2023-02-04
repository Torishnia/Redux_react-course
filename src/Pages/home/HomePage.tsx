import React, { useEffect, useState } from 'react';
import RepoCard from '../../components/RepoCard/RepoCard';
import { useDebounce } from '../../hooks/debounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../../store/github/github.api';
import style from './homepage.module.sass';

export default function HomePages() {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data])

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  }

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
              onClick={() => clickHandler(user.login)}
              className={style.li}
            >
              { user.login }
            </li>
          )) }
        </ul>}
        <div className={style.repos}>
          { areReposLoading && <p className={style.reposLoading}>Repos are loading...</p> }
          { repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>) }
        </div>
      </div>
    </div>
  )
}
