import React from 'react';
import CarsModalStyled from './CarsModalStyled';
import { nanoid } from 'nanoid';

const CarsModal = ({ carData }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = carData;
  const rentalConditionsArray = rentalConditions.split('\n');

  return (
    <CarsModalStyled>
      <img className="car-modal-img" src={img} alt="model" />
      <h3 className="car-modal-title">
        {make}
        <span className="car-modal-title-accent">{model}</span>, {year}
      </h3>
      <ul className="car-modal-list properties">
        <li className="car-modal-item properties">{address.split(',')[1]} </li>
        <li className="car-modal-item properties">{address.split(',')[2]} </li>
        <li className="car-modal-item properties">Id: {id} </li>
        <li className="car-modal-item properties">Year: {year} </li>
        <li className="car-modal-item properties">Type: {type} </li>
        <li className="car-modal-item properties">
          Fuel Consumption: {fuelConsumption}
        </li>
        <li className="car-modal-item properties">Engine Size:{engineSize}</li>
      </ul>
      <p className="car-modal-text">{description}</p>
      <h4 className="car-modal-subtitle">Accessories and functionalities:</h4>
      <ul className="car-modal-list ">
        {[...accessories, ...functionalities].map(item => {
          return (
            <li className="car-modal-item properties" key={nanoid()}>
              {item}
            </li>
          );
        })}
      </ul>
      <h4 className="car-modal-subtitle">Rental Conditions:</h4>
      <ul className="car-modal-list-conditions">
        <li className="car-modal-item-conditions">
          {rentalConditionsArray[0].split(':')[0]}:
          <span className="car-modal-accent-conditions">
            {rentalConditionsArray[0].split(':')[1]}
          </span>
        </li>
        <li className="car-modal-item-conditions">
          {rentalConditionsArray[1]}{' '}
        </li>
        <li className="car-modal-item-conditions">
          {rentalConditionsArray[2]}{' '}
        </li>
        <li className="car-modal-item-conditions">
          Mileage:
          <span className="car-modal-accent-conditions">{mileage}</span>
        </li>
        <li className="car-modal-item-conditions">
          Price:
          <span className="car-modal-accent-conditions">{rentalPrice}$</span>
        </li>
      </ul>
      <a href="tel:+110001111111" className="car-modal-btn btn">
        Rental car
      </a>
    </CarsModalStyled>
  );
};

export default CarsModal;
