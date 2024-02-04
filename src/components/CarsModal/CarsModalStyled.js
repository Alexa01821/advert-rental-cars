import styled from 'styled-components';

const CarsModalStyled = styled.div`
  height: 100%;
  overflow-y: scroll;

  .car-modal-img {
    width: 100%;
    height: 248px;
    object-fit: cover;
    border-radius: 14px;
    background-color: linear-gradient(
      180deg,
      #121417 0%,
      rgba(18, 20, 23, 0) 100%
    );
    margin-bottom: 14px;
  }

  .car-modal-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: var(--color-text);
    margin-bottom: 8px;

    .car-modal-title-accent {
      color: var(--color-text-accent);
      padding-left: 6px;
    }
  }

  .car-modal-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;
    margin-bottom: 14px;

    .car-modal-item {
      font-size: 12px;
      line-height: 150%;
      color: rgba(18, 20, 23, 0.5);
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }

    .car-modal-item:last-child {
      border-right: none;
      padding-right: 0;
    }
  }

  .car-modal-text {
    font-size: 14px;
    line-height: 143%;
  }

  .car-modal-subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    margin-bottom: 8px;
  }

  .car-modal-list-conditions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    .car-modal-item-conditions {
      padding: 7px 14px;
      border-radius: 35px;
      background: var(--bg-modal-list);

      font-size: 12px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: var(--color-text-modal-list);
    }
    .car-modal-accent-conditions {
      font-weight: 600;
      color: var(--color-text-accent);
      padding-left: 6px;
    }
  }

  .car-modal-btn {
    padding: 12px 50px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
  }
`;

export default CarsModalStyled;
