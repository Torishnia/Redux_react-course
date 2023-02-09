import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { BsBookmarkHeartFill } from 'react-icons/bs';

import style from './navigation.module.sass';

export default function Navigation() {
  const isActiveClass = {
    color: '#60a5fa',
  }

  return (
    <div className={style.header}>
      <div className={style.header_content}>

        <div className={style.header_title}>
          <span>Github Search</span>
        </div>

        <div className={style.header_navigate}>
          <div className={style.navigate_short}>

            <div className={style.navigate_short_home}>
              <NavLink end style={({ isActive }) => isActive ? isActiveClass : {} } to='github-username-search'>
                <IoHome />
              </NavLink>
            </div>

            <div className={style.navigate_short_favourite}>
              <NavLink style={({ isActive }) => isActive ? isActiveClass : {} } to='github-username-search/favourites'>
                <BsBookmarkHeartFill />
              </NavLink>
            </div>

          </div>
          <div className={style.navigate_full}>

            <div className={style.navigate_full_home}>
              <NavLink end style={({ isActive }) => isActive ? isActiveClass : {} } to='github-username-search'>
                Home
              </NavLink>
            </div>

            <div className={style.navigate_full_favourite}>
              <NavLink style={({ isActive }) => isActive ? isActiveClass : {} } to='github-username-search/favourites'>
                Favourites
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
