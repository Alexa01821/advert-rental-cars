import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  z-index: 12;
  background-color: var(--bg-btn);

  .header-container {
    display: flex;
    justify-content: space-between;

    max-width: 1244px;
    height: 72px;
    margin: 0 auto;
    padding: 15px;

    .logo-box {
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
    }

    .nav-list {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 12px;

      .nav-item {
        a {
          font-weight: 500;
          font-size: 14px;
          line-height: 1.11;
          text-transform: uppercase;
          color: var(--color-menu);
          transition: color var(--transition), font-size var(--transition);

          &:hover,
          &:focus {
            font-size: 16px;
            color: var(--color-search-text);
          }
          &.active {
            font-size: 16px;
            color: var(--color-search-text);
          }
        }
      }
    }
  }
`;

export default HeaderStyled;
