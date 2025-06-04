// src/components/SyncAndDownload/SyncAndDownload.jsx
import React from 'react';
import styles from './SyncAndDownload.module.css';

// Пусть кнопка скачивания — та же, что в Hero, или своя:
// import downloadBtn from '../../assets/download-btn.png';

export default function SyncAndDownload() {
  return (
    <section className={styles.syncWrapper}>
      <h2 className={styles.title}>Синхронизация</h2>
      <p className={styles.description}>
        Наш сервис позволяет легко синхронизироваться со всеми необходимыми источниками:
      </p>
      <ul className={styles.syncList}>
        <li>API для внешних сервисов</li>
        <li>1С:Бухгалтерия</li>
        <li>Excel, Google Таблицы</li>
        <li>Любая ваша система через открытый протокол</li>
      </ul>

      <div className={styles.downloadBlock}>
        <p className={styles.downloadText}>
          Скачайте наше мобильное приложение или установите расширение, чтобы всегда
          иметь доступ к данным:
        </p>
        <a href="/download" className={styles.downloadLink}>
          <img
            // src={downloadBtn}
            alt="Скачать приложение"
            className={styles.downloadBtn}
          />
        </a>
      </div>
    </section>
  );
}
