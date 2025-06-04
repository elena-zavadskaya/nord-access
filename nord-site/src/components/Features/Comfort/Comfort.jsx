// src/components/Features/Comfort/Comfort.jsx
import React from 'react';
import styles from './Comfort.module.css';

// import speedIcon from '../../assets/speed-icon.svg';
// import settingsIcon from '../../assets/settings-icon.svg';
// import supportIcon from '../../assets/support-icon.svg';

export default function Comfort() {
  return (
    <div className={styles.comfortWrapper}>
      <h2 className={styles.sectionTitle}>Все для вашей комфортной работы</h2>
      <div className={styles.cardsContainer}>
        {/* Карточка «Скорость» */}
        <div className={styles.card}>
          <img
            // src={speedIcon}
            alt="Иконка Скорость"
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>Скорость</h3>
          <p className={styles.cardDescription}>
            Облачная архитектура обеспечивает стабильную и быструю работу без задержек.
          </p>
        </div>

        {/* Карточка «Настройки» */}
        <div className={styles.card}>
          <img
            // src={settingsIcon}
            alt="Иконка Настройки"
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>Настройки</h3>
          <p className={styles.cardDescription}>
            Гибкие параметры позволяют адаптировать систему под любые бизнес-процессы.
          </p>
        </div>

        {/* Карточка «Техническая поддержка» */}
        <div className={styles.card}>
          <img
            // src={supportIcon}
            alt="Иконка Техническая поддержка"
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>Техническая поддержка</h3>
          <p className={styles.cardDescription}>
            Круглосуточная поддержка поможет решить любые вопросы в кратчайшие сроки.
          </p>
        </div>
      </div>
    </div>
  );
}
