import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import style from './favpage.module.sass';

export default function FavouritesPage() {
  const { favourites } = useAppSelector(state => state.github);

  if (favourites.length === 0) return <p className={style.items}>No items.</p>

  return (
    <div className={style.container}>
      <ul>
        { favourites.map(f => (
          <li key={f}>
            <a href={f} target='_blank' rel="noreferrer">{f}</a>
          </li>
        )) }
      </ul>
    </div>
  )
}
