// src/components/Features/Analytics/Analytics.jsx
import React from 'react';
import styles from './Analytics.module.css';

// Предположим, что иконка/иллюстрация для аналитики лежит в src/assets/analytics.png
// import analyticsImg from '../../assets/analytics.png';

export default function Analytics() {
  return (
    <div className={styles.analyticsWrapper}>
      <div className={styles.imageContainer}>
        <img
          // src={analyticsImg}
          alt="Иллюстрация аналитики"
          className={styles.analyticsImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Подробная аналитика</h2>
        <p className={styles.description}>
          Собирайте все данные в одном месте и получайте отчёты с высокой точностью.
          Наши графики и дашборды помогут вам принимать обоснованные решения.
        </p>
      </div>
    </div>
  );
}
