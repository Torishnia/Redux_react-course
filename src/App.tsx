import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavouritesPage from './Pages/FavouritesPage';
import HomePages from './Pages/HomePages';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePages /> } />
      <Route path='/favourites' element={ <FavouritesPage /> } />
    </Routes>
  );
}

export default App;
