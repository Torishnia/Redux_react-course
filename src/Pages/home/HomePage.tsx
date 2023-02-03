import React from 'react';
import { useSearchUsersQuery } from '../../store/github/github.api';
import style from './homepage.module.sass';

export default function HomePages() {
  const { isLoading, isError, data } = useSearchUsersQuery('valeri');

  console.log(data);
  

  return (
    <div className={style.home}>
      { isError && <p className={style.error}>Something went wrong...</p> }

      <div className={style.container}>
        <input
          type='text'
          className={style.input}
          placeholder='Search for Github username...'
        />

        <div className={style.dropdown}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  )
}
