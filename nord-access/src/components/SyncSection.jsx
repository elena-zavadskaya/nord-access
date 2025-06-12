import React from 'react';
import './styles/SyncSection.css';
import syncBg from '../assets/sync.png';
import googlePlayBadge from '../assets/google-play-badge.png'; // подключаем картинку

const SyncSection = () => {
  return (
    <section className="sync" style={{ backgroundImage: `url(${syncBg})` }}>
      <div className="container sync__inner">
        <h3 className="sync__title">Синхронизация</h3>

        <ul className="sync__list">
          <li className="sync__item"><span>API</span></li>
          <li className="sync__item"><span>1С Бухгалтерия</span></li>
          <li className="sync__item"><span>Excel</span></li>
        </ul>

        <p className="sync__description">
          Скачайте мобильное приложение или установите расширение в браузере и получите полный контроль над закупкой и доставкой топлива.
        </p>

        <a href="https://play.google.com/store/games?hl=ru" target="_blank" rel="noopener noreferrer" className="sync__google-play">
          <img src={googlePlayBadge} alt="Google Play Badge" />
        </a>
      </div>
    </section>
  );
};

export default SyncSection;


