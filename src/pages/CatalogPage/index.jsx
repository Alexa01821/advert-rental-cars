import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters } from '../../redux/filters/operations';
import { fetchCars } from '../../redux/cars/operations';
import Filter from 'components/Filters';
import CarsList from '../../components/CarsList';
import { selectCars } from '../../redux/cars/selectors';
import CatalogPageStyled from './CatalogPageStyled';
import BasicModalWindow from 'components/BasicModalWindow';
import CarsModal from '../../components/CarsModal';
import { Notify } from 'notiflix';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [filters, setFilters] = useState(null);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [carById, setCarById] = useState(null);

  useEffect(() => {
    dispatch(fetchFilters());
    dispatch(fetchCars({ page }));
  }, [dispatch, page]);

  const getNewFilters = newFilters => {
    setFilters(newFilters);
  };

  const loadMore = () => {
    setPage(prePage => {
      return prePage + 1;
    });
  };

  const toggleModal = car => {
    setModal(preModal => {
      return !preModal;
    });
    setCarById(car ? car : null);
  };

  const getFilterCarsList = carsList => {
    if (!filters) {
      return carsList;
    }

    const filteredCarsList = [];
    carsList.map(car => {
      const { make, rentalPrice, mileage } = car;
      const brand = filters.brand ? make.includes(filters.brand) : true;
      const price = filters.price ? rentalPrice <= filters.price : true;
      const minMileage = filters.minMileage
        ? mileage >= filters.minMileage
        : true;
      const maxMileage = filters.maxMileage
        ? mileage >= filters.maxMileage
        : true;

      if (!brand || !price || !minMileage || !maxMileage) {
        return Notify.failure(
          'The maximum mileage must exceed the minimum mileage.'
        );
      }
      return filteredCarsList.push(car);
    });
    return filteredCarsList;
  };

  return (
    <CatalogPageStyled>
      <h1 className="is-hidden">CatalogPage</h1>
      <section className="section-filters">
        <Filter getNewFilters={getNewFilters} />
      </section>
      <section className="section-cars-list">
        {cars && cars.length > 0 ? (
          <>
            <CarsList
              cars={getFilterCarsList(cars)}
              toggleModal={toggleModal}
            />
            {Number.isInteger(cars.length / 12) && (
              <button className="button-load-more" onClick={loadMore}>
                Load more
              </button>
            )}
          </>
        ) : (
          <div className="catalog-wrapper-stub">
            <p className="catalog-stub-text">Sorry, no results were found...</p>
          </div>
        )}
      </section>

      {modal && (
        <BasicModalWindow toggleModal={toggleModal}>
          <CarsModal carData={carById} />
        </BasicModalWindow>
      )}
    </CatalogPageStyled>
  );
};

export default CatalogPage;
