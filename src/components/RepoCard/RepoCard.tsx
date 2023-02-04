import React from 'react';
import { useActions } from '../../hooks/actions';
import { IRepo } from '../../models/models';
import style from './repocard.module.sass';

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite } = useActions();

  const addToFavoutite = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    addFavourite(repo.html_url);
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

        <button 
          className={style.button}
          onClick={addToFavoutite}
        >
          Add to Favourite
        </button>
        </a>
    </div>
  )
}
