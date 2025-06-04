// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

// Фон (картинка на весь экран) и кнопка «Скачать»
// import bgMain from '../../assets/bg-main.jpg';
// import downloadBtn from '../../assets/download-btn.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className={styles.hero}
      // style={{ backgroundImage: `url(${bgMain})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Добро пожаловать в наш сервис!</h1>
        <p className={styles.subtitle}>
          Универсальное решение для управления закупками, финансами и логистикой.
        </p>
        <a href="/download" className={styles.downloadLink}>
          {/*<img src={downloadBtn} alt="Скачать приложение" className={styles.downloadBtn} />*/}
        </a>
      </div>
    </section>
  );
}
