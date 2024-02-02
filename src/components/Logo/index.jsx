import CarRentalIcon from '@mui/icons-material/CarRental';
import LogoStyled from './LogoStyled';

const Logo = () => {
  return (
    <LogoStyled className="logo-box" aria-label="Welcome page" to="/">
      <CarRentalIcon className="logo-svg" />
      Rental Cars
    </LogoStyled>
  );
};

export default Logo;
