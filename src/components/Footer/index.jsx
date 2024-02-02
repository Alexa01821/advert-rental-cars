import FooterStyled from './FooterStyled';
import Logo from 'components/Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-container">
        <div className="footer-info">
          <Logo />
          <p className="footer-text">
            With a commitment to excellence and a passion for customer
            satisfaction, we offer a seamless and reliable car rental experience
            that empowers you to explore the world with confidence and
            convenience.
          </p>
        </div>
        <div className="footer-soc">
          <h3 className="footer-soc-title">Social media</h3>
          <ul className="footer-soc-list">
            <li className="footer-soc-item">
              <a href="https://www.instagram.com/" className="footer-soc-link">
                <InstagramIcon className="footer-soc-svg" />
              </a>
            </li>
            <li className="footer-soc-item">
              <a href="https://twitter.com/" className="footer-soc-link">
                <TwitterIcon className="footer-soc-svg" />
              </a>
            </li>
            <li className="footer-soc-item">
              <a href="https://www.facebook.com/" className="footer-soc-link">
                <FacebookIcon className="footer-soc-svg" />
              </a>
            </li>
            <li className="footer-soc-item">
              <a href="https://web.telegram.org/k/" className="footer-soc-link">
                <TelegramIcon className="footer-soc-svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
