import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Nannies = lazy(() => import('./pages/NanniesPage/NanniesPage.jsx'));
const Favourites = lazy(() =>
  import('./pages/FavouritesPage/FavouritesPage.jsx')
);
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nannies" element={<Nannies />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
