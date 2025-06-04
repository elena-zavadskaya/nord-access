// src/components/DownloadSection.jsx
import React from 'react';
import './styles/DownloadSection.css';
// import appPreview from '../assets/app-preview.png'; // картинка приложения или телефона

const DownloadSection = () => {
  return (
    <section className="download">
      <div className="container download__inner">
        <div className="download__text">
          <h3>Скачайте мобильное приложение</h3>
          <p>Скачайте мобильное приложение или установите расширение в браузере и получите полный контроль над закупкой и доставкой топлива.</p>
          <button className="download__button">Скачать приложение</button>
        </div>
        <div className="download__image">
          {/*<img src={appPreview} alt="Превью приложения" />*/}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
