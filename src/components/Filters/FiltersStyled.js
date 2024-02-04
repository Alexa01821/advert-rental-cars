import styled from 'styled-components';

const FilterStyled = styled.form`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;

  .filters-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
    .filters-item {
      .filters-item-title {
        font-weight: 500;
        font-size: 14px;
        line-height: 129%;
        color: var(--color-search);
        margin-bottom: 8px;
      }
      .filters-item-brand {
        width: 224px;
      }
      .filters-item-price {
        width: 125px;
      }
      .wrapper-mileage {
        display: flex;
        .input-wrapper {
          position: relative;
          .input-text {
            position: absolute;
            display: block;
            left: 24px;
            top: 14px;
            font-family: 'Manrope';
            font-size: 16px;
            font-weight: 500;
            line-height: 111%;
            color: rgba(18, 20, 23, 1);
            font-size: 18px;
          }
          .item-mileage {
            width: 160px;
            height: 48px;
            font-size: 16px;
            font-weight: 500;
            line-height: 111%;
            color: var(--color-text);
            background: var(--color-search-text);
            border: none;
            &:hover,
            &:focus {
              border: none;
              background: var(--bg-select);
            }
          }
        }

        .left {
          border-radius: 14px 0 0 14px;
          text-indent: 70px;
        }
        .right {
          border-radius: 0 14px 14px 0;
          text-indent: 45px;
        }
      }
    }
  }
  .filters-button {
    width: 136px;
    height: 48px;
    padding: 14px 44px;
  }
`;

export default FilterStyled;
