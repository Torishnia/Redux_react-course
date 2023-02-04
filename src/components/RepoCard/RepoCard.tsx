import React from 'react';
import { IRepo } from '../../models/models';
import style from './repocard.module.sass';

export default function RepoCard({ repo }: { repo: IRepo }) {
  return (
    <div className={style.container}>
      <a href={repo.html_url} target='_blank' rel="noreferrer">
        <h2 className={style.text}>{repo.full_name}</h2>
        <p className={style.repo}>
          Forks: <span className={style.forks}>{repo.forks}</span>
          Watchers: <span className={style.watchers}>{repo.watchers}</span>
        </p>
        <p className={style.description}>{repo.description}</p>
        </a>
    </div>
  )
}
