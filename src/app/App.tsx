import { Routes, Route } from 'react-router-dom';

import FavouritesPage from './pages/fav/FavouritesPage';
import HomePages from './pages/home/HomePage';
import Navigation from './components/Navigation/Navigation';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>

      <div className={style.header}>
        <Navigation />
      </div>
      
      <div className={style.content}>
        <Routes>
          <Route path='github-username-search/' element={ <HomePages /> } />
          <Route path='github-username-search/favourites' element={ <FavouritesPage /> } />
        </Routes>
      </div>

    </div>
  );
}

export default App;
