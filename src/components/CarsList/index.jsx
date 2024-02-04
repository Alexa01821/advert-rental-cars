import CarsListStyled from './CarsListStyled';
import HeartIcon from '../HeartIcon';

const CarsList = ({ cars, toggleModal }) => {
  return (
    <CarsListStyled>
      {cars.map(car => {
        const {
          id,
          year,
          make,
          model,
          type,
          img,
          accessories,
          rentalPrice,
          rentalCompany,
          address,
          mileage,
        } = car;
        return (
          <li className="car-item" key={id}>
            <div className="car-wrapper-img">
              <img className="car-img" src={img} alt="model" />
              <HeartIcon carData={car} />
            </div>

            <div className="car-wrapper-title">
              <h3 className="car-title">
                {make}
                <span className="car-title-accent">{model}</span>, {year}
              </h3>
              <p className="car-price">{`${rentalPrice}$`}</p>
            </div>
            <ul className="car-list-properties">
              <li className="car-item-properties">{address.split(',')[1]} </li>
              <li className="car-item-properties">{address.split(',')[2]} </li>
              <li className="car-item-properties">{rentalCompany} </li>
              <li className="car-item-properties">{type} </li>
              <li className="car-item-properties">{model} </li>
              <li className="car-item-properties">{mileage} </li>
              <li className="car-item-properties">{accessories[0]} </li>
            </ul>
            <button onClick={() => toggleModal(car)} className="car-btn btn">
              Learn more
            </button>
          </li>
        );
      })}
    </CarsListStyled>
  );
};

export default CarsList;
