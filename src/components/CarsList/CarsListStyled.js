import styled from 'styled-components';

const CarsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 28px;

  .car-item {
    position: relative;
    width: 274px;
    height: 428px;

    .car-wrapper-img {
      position: relative;
      width: 274px;
      height: 268px;
      border-radius: 14px;
      overflow: hidden;
      margin-bottom: 14px;

      .car-img {
        width: 100%;
        height: 268px;
        object-fit: cover;
        border-radius: 14px;
        background-color: linear-gradient(
          180deg,
          #121417 0%,
          rgba(18, 20, 23, 0) 100%
        );
      }
      .car-icon {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 18px;
        height: 18px;
      }
    }

    .car-wrapper-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      .car-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #121417;
        .car-title-accent {
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: #3470ff;
          padding-left: 6px;
        }
      }

      .car-price {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #121417;
      }
    }

    .car-list-properties {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 6px;
      margin-bottom: 28px;

      .car-item-properties {
        font-size: 12px;
        line-height: 150%;
        color: rgba(18, 20, 23, 0.5);
        border-right: 1px solid rgba(18, 20, 23, 0.1);
        padding-right: 6px;
      }
      .car-item-properties:last-child {
        border-right: none;
        padding-right: 0;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }

    .car-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 274px;
      height: 44px;
    }
  }
`;

export default CarsListStyled;
