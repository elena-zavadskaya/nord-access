// src/components/Overview/Overview.jsx
import React from 'react';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <section id="overview" className={styles.overview}>
      <div className="container">
        <h2 className={styles.title}>Все решения в одном месте</h2>
        <p className={styles.description}>
          С помощью нашего приложения вы получаете полный контроль над всеми процессами: от закупок до продаж, от логистики до финансовой аналитики.
        </p>
      </div>
    </section>
  );
};

export default Overview;
