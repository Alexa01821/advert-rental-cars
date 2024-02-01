import React from 'react';
import HeaderStyled from './HeaderStyled';
import { Link, NavLink } from 'react-router-dom';
import CarRentalIcon from '@mui/icons-material/CarRental';

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="header-container">
        <Link className="logo-box" aria-label="Welcome page" to="/">
          <CarRentalIcon className="logo-svg" />
          Rental Cars
        </Link>

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink aria-label="Welcome page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink aria-label="Catalog page" to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink aria-label="Favorites page" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
