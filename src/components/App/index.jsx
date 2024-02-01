import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
// import Loader from 'components/Loader';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesCarsPage from 'pages/FavoritesCarsPage';

const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesCarsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
