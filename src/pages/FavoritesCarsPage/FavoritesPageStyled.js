import styled from 'styled-components';

const FavoritesPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  .favorites-page-title {
    font-size: 30px;
    line-height: 107%;
    text-align: center;
    color: var(--color-text);
    margin-bottom: 48px;
  }

  .section-cars-list {
    margin-bottom: 60px;
  }

  .favorites-wrapper-stub {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    .favorites-stub-text {
      font-size: 16px;
      line-height: 107%;
      text-align: center;
      color: var(--color-text);
    }
    .favorites-link {
      padding: 12px 24px;
    }
  }
`;

export default FavoritesPageStyled;
