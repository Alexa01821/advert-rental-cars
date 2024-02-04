import styled from 'styled-components';

const CatalogPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  .section-filters {
    margin-bottom: 60px;
  }
  .section-cars-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;

    .button-load-more {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--color-text-accent);
      background: transparent;
      border: none;

      :hover,
      :focus {
        text-decoration: underline;
      }
    }
  }
`;

export default CatalogPageStyled;
