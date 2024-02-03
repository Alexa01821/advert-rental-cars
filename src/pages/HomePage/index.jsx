import React from 'react';
import HomePageStyled from './HomePageStyled';
import { Link } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EuroIcon from '@mui/icons-material/Euro';

const HomePage = () => {
  return (
    <HomePageStyled>
      <section className="hero">
        <div className="hero-container">
          <h1 className="title-page">Effective Solutions for Your Lives</h1>
          <Link
            className="hero-link btn"
            aria-label="Catalog page"
            to="/catalog"
          >
            Go to catalog
          </Link>
        </div>
        <div className="hero-img"></div>
      </section>

      <section className="option">
        <h2 className="is-hidden">Our option</h2>
        <ul className="option-list">
          <li className="option-item">
            <div className="option-wrap-svg">
              <SelfImprovementIcon className="option-svg" />
            </div>
            <p className="option-title">Flexibility</p>
            <p className="option-text">
              Rental cars offer unparalleled flexibility, allowing you to travel
              at your own pace and convenience. Whether it's a spontaneous road
              trip or a carefully planned itinerary, having access to a rental
              car means you're not tied to public transportation schedules or
              limited routes.
            </p>
          </li>
          <li className="option-item">
            <div className="option-wrap-svg">
              <EuroIcon className="option-svg" />
            </div>
            <p className="option-title">Cost-Effectiveness</p>
            <p className="option-text">
              Depending on your travel needs, renting a car can often be more
              cost-effective than relying on other modes of transportation,
              especially for group travel or when exploring destinations with
              limited public transit options. With various rental options
              available, you can choose a vehicle that fits your budget and
              requirements.
            </p>
          </li>
          <li className="option-item">
            <div className="option-wrap-svg">
              <CarCrashIcon className="option-svg" />
            </div>
            <p className="option-title">Convenience</p>
            <p className="option-text">
              Rental car services are designed for convenience, offering easy
              booking processes, pick-up and drop-off locations, and a wide
              selection of vehicles to suit different preferences and needs.
              This convenience extends to amenities like GPS navigation systems
              and roadside assistance, ensuring a smooth and hassle-free travel
              experience.
            </p>
          </li>
          <li className="option-item">
            <div className="option-wrap-svg">
              <EmojiObjectsIcon className="option-svg" />
            </div>
            <p className="option-title">Exploration</p>
            <p className="option-text">
              Renting a car opens up opportunities for exploration and
              discovery, allowing you to venture off the beaten path and uncover
              hidden gems that might be inaccessible by other means. Whether
              it's scenic routes, remote attractions, or off-the-grid
              destinations, having a rental car empowers you to create
              unforgettable travel experiences on your own terms.
            </p>
          </li>
        </ul>
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
