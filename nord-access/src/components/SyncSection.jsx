// src/components/SyncSection.jsx
import React from 'react';
import './styles/SyncSection.css';
// import apiIcon from '../assets/api-icon.png';
// import oneCIcon from '../assets/1c-icon.png';
// import excelIcon from '../assets/excel-icon.png';

const SyncSection = () => {
  return (
    <section className="sync">
      <div className="container sync__inner">
        <h3 className="sync__title">Синхронизация</h3>
        <ul className="sync__list">
          <li className="sync__item">
            {/*<img src={apiIcon} alt="API" />*/}
            <span>API</span>
          </li>
          <li className="sync__item">
            {/*<img src={oneCIcon} alt="1С Бухгалтерия" />*/}
            <span>1С Бухгалтерия</span>
          </li>
          <li className="sync__item">
            {/*<img src={excelIcon} alt="Excel" />*/}
            <span>Excel</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SyncSection;
