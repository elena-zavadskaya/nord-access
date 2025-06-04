// src/components/SyncSection/SyncSection.jsx
import React from 'react';
import styles from './SyncSection.module.css';
// import screenshotSync from '../../assets/images/screenshot-sync.png';
// import mobileAppImage from '../../assets/images/screenshot-mobile-app.png';
// import googlePlayBadge from '../../assets/images/google-play-badge.png';

const SyncSection = () => {
  return (
    <section id="sync" className={styles.syncSection}>
      <div className="container">
        <div className={styles.innerWrapper}>
          {/* Левый блок: список «Синхронизация» */}
          <div className={styles.left}>
            <h3 className={styles.subtitle}>Синхронизация</h3>
            <ul className={styles.syncList}>
              <li>API</li>
              <li>1С бухгалтерия</li>
              <li>Excel</li>
            </ul>
            <div className={styles.downloadWrapper}>
              <p>Скачайте мобильное приложение или установите расширение в браузере и получите полный контроль над закупкой и доставкой топлива</p>
              <a href="https://play.google.com/store/apps/details?id=com.akccess" target="_blank" rel="noopener noreferrer">
                {/*<img src={googlePlayBadge} alt="Скачать из Google Play" className={styles.googleBadge} />*/}
              </a>
            </div>
          </div>

          {/* Правый блок: скриншот интерфейса и смартфон */}
          <div className={styles.right}>
            {/*<img src={screenshotSync} alt="Скриншот синхронизации интерфейс" className={styles.desktopImg} />*/}
            {/*<img src={mobileAppImage} alt="Скриншот мобильного приложения" className={styles.mobileImg} />*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncSection;
