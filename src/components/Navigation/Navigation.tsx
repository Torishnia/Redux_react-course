import React from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.module.sass';

export default function Navigation() {
  return (
    <nav className={style.nav}>
      <h3>Github Search</h3>

      <span>
        <Link to='/' className={style.link}>Home</Link>
        <Link to='/favourites' className={style.linkFav}>Favourites</Link>
      </span>
    </nav>
  )
}
