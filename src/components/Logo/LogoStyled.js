import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 4px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.17;
  text-transform: uppercase;
  color: var(--color-search-text);

  .logo-svg {
    width: 36px;
    height: 36px;
    fill: white;
  }
`;

export default LogoStyled;
