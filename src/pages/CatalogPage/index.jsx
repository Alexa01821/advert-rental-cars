import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters } from '../../redux/filters/operations';
import { fetchCars } from '../../redux/cars/operations';
import { selectError } from '../../redux/appState/appSelectors';
import Filter from 'components/Filters';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFilters());
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  const getNewFilters = newFilters => {
    console.log(newFilters);
  };

  return (
    <div>
      <h1 className="is-hidden">CatalogPage</h1>
      <section>
        <Filter getNewFilters={getNewFilters} />

        <div className="cars-list"></div>
      </section>
    </div>
  );
};

export default CatalogPage;
