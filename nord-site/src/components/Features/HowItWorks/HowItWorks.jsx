// src/components/Features/HowItWorks/HowItWorks.jsx
import React from 'react';
import styles from './HowItWorks.module.css';

// Предположим, что видео лежит в src/assets/video-short.mp4
// import videoSample from '../../assets/video-short.mp4';

export default function HowItWorks() {
  return (
    <div className={styles.howItWorksWrapper}>
      <h2 className={styles.title}>Как это работает</h2>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          // src={videoSample}
          controls
          poster="" /* Можно указать постер-изображение, если нужно */
        >
          Ваш браузер не поддерживает тег video.
        </video>
      </div>
    </div>
  );
}
