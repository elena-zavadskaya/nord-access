// src/components/Features/Features.jsx
import React from 'react';

// Импортируем все суб-компоненты из подпапок
import Convenience   from './Convenience/Convenience';
import Analytics     from './Analytics/Analytics';
import Functionality from './Functionality/Functionality';
import Comfort       from './Comfort/Comfort';
import HowItWorks    from './HowItWorks/HowItWorks';

// (Опционально) общий CSS-модуль для контейнера
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.featuresContainer}>
      {/* Блок «Удобство и актуальность» */}
      <Convenience />

      {/* Блок «Подробная аналитика» */}
      <Analytics />

      {/* Блок «Функциональность» */}
      <Functionality />

      {/* Блок «Все для вашей комфортной работы» */}
      <Comfort />

      {/* Блок «Как это работает» */}
      <HowItWorks />
    </section>
  );
}
