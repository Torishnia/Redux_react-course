import React, { useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { IRepo } from '../../models/models';
import style from './repocard.module.sass';

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector(state => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavoutite = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  }

  const removeFromFavoutite = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  }

  return (
    <div className={style.container}>
      <a href={repo.html_url} target='_blank' rel="noreferrer">
        <h2 className={style.text}>{repo.full_name}</h2>
        <p className={style.repo}>
          Forks: <span className={style.forks}>{repo.forks}</span>
          Watchers: <span className={style.watchers}>{repo.watchers}</span>
        </p>
        <p className={style.description}>{repo.description}</p>

        {!isFav && <button 
          className={style.buttonAdd}
          onClick={addToFavoutite}
        >
          Add to Favourite
        </button>}

        {isFav && <button 
          className={style.buttonRemove}
          onClick={removeFromFavoutite}
        >
          Remove
        </button>}
        </a>
    </div>
  )
}
