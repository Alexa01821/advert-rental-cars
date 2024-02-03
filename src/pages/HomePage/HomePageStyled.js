import styled from 'styled-components';

const HomePageStyled = styled.div`
  .hero {
    position: relative;
    background-image: linear-gradient(var(--gradient-hero)),
      url(https://ftp.goit.study/img/cars-test-task/volvo_xc90.jpeg);
    background-size: cover;
    background-position: center;
    height: 450px;
    border-radius: 14px;
    border: 1px solid var(--gradient-hero);
    margin-bottom: 60px;

    .hero-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      .title-page {
        font-weight: 600;
        font-size: 56px;
        line-height: 107%;
        text-align: center;
        color: var(--color-search-text);
        margin-bottom: 48px;
      }

      .hero-link {
        width: 169px;
        height: 56px;
        padding: 16px 32px;
      }
    }
  }

  .option {
    margin-bottom: 80px;
    .option-list {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      .option-item {
        width: calc((100% - 24px) / 2);

        .option-wrap-svg {
          height: 112px;
          border-radius: 4%;
          background-color: var(--bg-scrollbar-thumb);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;

          .option-svg {
            width: 80px;
            height: 80px;
            fill: var(--border-header-hover);
          }
        }
        .option-title {
          font-weight: 500;
          font-size: 20px;
          line-height: 1.2;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: capitalize;
          color: var(--color-navy-blue);
          margin-bottom: 8px;
        }
        .option-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.02em;
          color: var(--color-text-pr50);
          text-align: justify;
        }
      }
    }
  }
`;

export default HomePageStyled;
