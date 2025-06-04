// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.title}>О нас</h2>
        <div className={styles.textWrapper}>
          <p>
            Приложение разработано сотрудниками, имеющими многолетний опыт работы в сфере нефтепродуктобеспечения.
            Глубоко понимая специфику топливного рынка, мы объединили свои знания и практический опыт для эффективного управления закупкой, реализацией и доставкой топлива.
          </p>
          <p>
            Наше решение автоматизирует процессы нефтетрейдинга, минимизирует риски и повышает рентабельность бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
