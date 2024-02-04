import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import HeartWrap from './HeartIcon';
import { selectorCarsFavorites } from '../../redux/carsFavorites/carsFavoritesSelectors';
import {
  addCarsFavorites,
  removeCarsFavorites,
} from '../../redux/carsFavorites/carsFavoritesSlice';

const HeartIcon = ({ carData }) => {
  const dispatch = useDispatch();
  const carsFavorites = useSelector(selectorCarsFavorites);

  const isChecked = carsFavorites.some(({ id }) => id === carData.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeCarsFavorites(carData));
    } else {
      dispatch(addCarsFavorites(carData));
    }
  };
  return (
    <HeartWrap>
      <Checkbox
        icon={<FavoriteBorder style={{ fill: 'var(--border-header)' }} />}
        checkedIcon={
          <Favorite style={{ fill: 'var(--border-header-hover)' }} />
        }
        checked={isChecked}
        onChange={handleToggleFavorite}
        className="icon-svg"
      />
    </HeartWrap>
  );
};

export default HeartIcon;
