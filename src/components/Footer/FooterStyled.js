import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: var(--bg-footer);

  .footer-container {
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    max-width: 1244px;
    margin: 0 auto;
    padding: 40px;
  }

  .footer-info {
    .footer-text {
      max-width: 400px;
      margin-top: 16px;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.02em;
      text-align: justify;
      color: var(--color-search-text);
    }
  }

  .footer-soc {
    .footer-soc-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: var(--color-search-text);
      margin-bottom: 16px;
    }
    .footer-soc-list {
      display: flex;
      justify-content: center;
      gap: 16px;

      .footer-soc-item {
        width: 40px;
        height: 40px;
        .footer-soc-link {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--color-text-accent);
          .footer-soc-svg {
            width: 24px;
            height: 24px;
            fill: var(--color-search-text);
          }
        }
      }
    }
  }
`;

export default FooterStyled;
