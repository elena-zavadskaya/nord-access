// src/components/Features/Convenience/Convenience.jsx
import React from 'react';
import styles from './Convenience.module.css';

// Предположим, что картинка планшета лежит в src/assets/tablet.png
// import tabletImg from '../../assets/tablet.png';

export default function Convenience() {
  return (
    <div className={styles.convenienceWrapper}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Удобство и актуальность</h2>
        <p className={styles.description}>
          Наш продукт разработан так, чтобы вы могли работать где угодно и когда угодно.
          Данные синхронизируются в режиме реального времени, а интуитивный интерфейс
          не требует долгого обучения.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          // src={tabletImg}
          alt="Работа на планшете"
          className={styles.tabletImage}
        />
      </div>
    </div>
  );
}
