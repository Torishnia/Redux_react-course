import { ImStarFull } from 'react-icons/im';

import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import style from './favpage.module.sass';

export default function FavouritesPage() {
  const { favourites: favouriteUrls } = useAppSelector(state => state.github);
  const { removeFavourite } = useActions();

  function removeUrl(deleteUrl: string): void {
    removeFavourite(deleteUrl);
  }

  if (favouriteUrls.length === 0) return <p className={style.items}>No items.</p>

  return (
    <div className={style.container}>
      <ul className={style.listItem}>
        { favouriteUrls.map((itemUrl: string) => (
          <li key={itemUrl}>
            <button className={style.icon} onClick={() => removeUrl(itemUrl)}>
              <ImStarFull />
            </button>
            <a href={itemUrl} target='_blank' rel="noreferrer">{itemUrl}</a>
          </li> 
        )) }
      </ul>
    </div>
  )
}
