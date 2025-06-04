// src/components/Overview/Overview.jsx
import React from 'react';
import styles from './Overview.module.css';

// Картинка «мишки» для нижней части раздела (если нужно)
// import bearImg from '../../assets/bear.png';

export default function Overview() {
  return (
    <section id="overview" className={styles.overviewWrapper}>
      <div className={styles.topBlock}>
        <h2 className={styles.mainTitle}>Все решения в одном месте</h2>
        <p className={styles.description}>
          Мы разработали платформу, которая объединяет управление закупками, логистикой,
          финансами и многое другое в одном интуитивном интерфейсе.
        </p>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>Возможности программного продукта</h3>
          <p className={styles.subDescription}>
            Ознакомьтесь со всеми модулями, которые помогут вашему бизнесу работать эффективнее.
          </p>
        </div>
        <div className={styles.imageContainer}>
          {/*<img src={bearImg} alt="Иллюстрация мишки" className={styles.bearImage} />*/}
        </div>
      </div>
    </section>
  );
}
