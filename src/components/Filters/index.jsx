import Select from 'react-select';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors';
import getCustomStyles from './customStyled';
import FilterStyled from './FiltersStyled';
import { useState } from 'react';
import priceList from '../../helpers/PriceRange';
import formatMileage from '../../helpers/formatMileage';
import { Notify } from 'notiflix';

const Filter = ({ getNewFilters }) => {
  const filters = useSelector(selectFilters);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [minValue, setMinValue] = useState('');

  const brandsList = [
    ...filters.map(brand => ({ value: brand, label: brand })),
  ];

  const handleFilterClick = () => {
    if (
      selectedBrand === '' &&
      selectedPrice === '' &&
      maxValue === '' &&
      minValue === ''
    ) {
      return getNewFilters(null);
    }
    if (
      parseInt(minValue.replace(/,/g, ''), 10) >
      parseInt(maxValue.replace(/,/g, ''), 10)
    ) {
      Notify.failure('The maximum mileage must exceed the minimum mileage.');
      return;
    }

    const newFilters = {
      brand: selectedBrand.value,
      price: selectedPrice.value,
      minMileage: minValue,
      maxMileage: maxValue,
    };

    getNewFilters(newFilters);
  };

  return (
    <FilterStyled>
      <ul className="filters-list">
        <li className="filters-item">
          <h3 className="filters-item-title">Car brand</h3>

          <div className="filters-item-brand">
            <Select
              id="nameSelect"
              value={selectedBrand}
              onChange={nameSelect => {
                setSelectedBrand(nameSelect);
              }}
              options={brandsList}
              styles={getCustomStyles()}
              placeholder="Enter the text"
              aria-label="Select recommendation status"
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </li>
        <li className="filters-item">
          <h3 className="filters-item-title">Price/ 1 hour</h3>
          <div className="filters-item-price">
            <Select
              id="nameSelect"
              value={
                selectedPrice
                  ? {
                      value: selectedPrice.value,
                      label: `To ${selectedPrice.label} $`,
                    }
                  : null
              }
              onChange={nameSelect => setSelectedPrice(nameSelect)}
              options={priceList}
              styles={getCustomStyles()}
              placeholder="To $"
              aria-label="Select recommendation status"
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </li>
        <li className="filters-item filters-mileage">
          <h3 className="filters-item-title">Сar mileage / km</h3>
          <div className="wrapper-mileage">
            <div className="input-wrapper">
              <p className="input-text">From</p>
              <input
                type="text"
                value={formatMileage(minValue)}
                onChange={event => setMinValue(event.target.value)}
                className="item-mileage left"
              />
            </div>

            <div className="input-wrapper">
              <p className="input-text">To</p>
              <input
                type="text"
                value={formatMileage(maxValue)}
                onChange={event => setMaxValue(event.target.value)}
                className="item-mileage right"
              />
            </div>
          </div>
        </li>
      </ul>
      <button
        className="filters-button btn"
        onClick={handleFilterClick}
        type="button"
      >
        Search
      </button>
    </FilterStyled>
  );
};

export default Filter;
