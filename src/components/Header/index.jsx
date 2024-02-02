import Logo from 'components/Logo';
import HeaderStyled from './HeaderStyled';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="header-container">
        <Logo />

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
