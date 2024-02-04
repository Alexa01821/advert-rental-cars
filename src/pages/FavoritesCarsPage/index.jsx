import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorCarsFavorites } from '../../redux/carsFavorites/carsFavoritesSelectors';
import FavoritesPageStyled from './FavoritesPageStyled';
import CarsModal from 'components/CarsModal';
import BasicModalWindow from 'components/BasicModalWindow';
import CarsList from 'components/CarsList';
import { Link } from 'react-router-dom';

const FavoritesCarsPage = () => {
  const carsFavorites = useSelector(selectorCarsFavorites);
  const [modal, setModal] = useState(false);
  const [carById, setCarById] = useState(null);

  const toggleModal = car => {
    setModal(preModal => {
      return !preModal;
    });
    setCarById(car ? car : null);
  };

  return (
    <FavoritesPageStyled>
      <h1 className="favorites-page-title">Your favorite cars</h1>
      {carsFavorites && carsFavorites.leght > 0 ? (
        <section className="section-cars-list">
          <CarsList cars={carsFavorites} toggleModal={toggleModal} />
        </section>
      ) : (
        <div className="favorites-wrapper-stub">
          <p className="favorites-stub-text">
            Your list of favorites is empty...
          </p>
          <Link
            className="favorites-link btn"
            aria-label="Catalog page"
            to="/catalog"
          >
            Go to catalog
          </Link>
        </div>
      )}

      {modal && (
        <BasicModalWindow toggleModal={toggleModal}>
          <CarsModal carData={carById} />
        </BasicModalWindow>
      )}
    </FavoritesPageStyled>
  );
};

export default FavoritesCarsPage;
