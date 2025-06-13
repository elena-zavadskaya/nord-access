import React from 'react';
import './styles/SyncSection.css';
import syncBg from '../assets/sync.png';
import googlePlayBadge from '../assets/google-play-badge.png';
import arrowIcon from '../assets/arrow.png';
import laptopImg from '../assets/laptop.png';
import phoneImg from '../assets/phone.png';

const SyncSection = () => {
  return (
    <section className="sync" style={{ backgroundImage: `url(${syncBg})` }}>
      <div className="container sync__inner">
        <div className="sync__content">
          <h3 className="sync__title">Синхронизация</h3>
          <ul className="overview__list">
            <li className="overview__item">
              <img src={arrowIcon} alt="arrow icon" className="overview__icon" />
              <span>API</span>
            </li>
            <li className="overview__item">
              <img src={arrowIcon} alt="arrow icon" className="overview__icon" />
              <span>1С бухгалтерия</span>
            </li>
            <li className="overview__item">
              <img src={arrowIcon} alt="arrow icon" className="overview__icon" />
              <span>Excel</span>
            </li>
          </ul>
          <p className="sync__description">
            Скачайте мобильное приложение или установите расширение в браузере и получите полный контроль над закупкой и доставкой топлива.
          </p>
          <a href="https://play.google.com/store/games?hl=ru" target="_blank" rel="noopener noreferrer" className="sync__google-play">
            <img src={googlePlayBadge} alt="Google Play Badge" />
          </a>
        </div>

        <div className="sync__images">
          <img src={laptopImg} alt="Tablet" className="sync__tablet" />
          <img src={phoneImg} alt="Phone" className="sync__phone" />
        </div>
      </div>
    </section>
  );
};

export default SyncSection;