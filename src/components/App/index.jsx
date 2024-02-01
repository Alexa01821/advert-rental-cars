import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesCarsPage from 'pages/FavoritesCarsPage';
import { selectIsLoading } from '../../redux/cars/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const openLoader = useSelector(selectIsLoading);

  return (
    <>
      {openLoader && <Loader />}
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
