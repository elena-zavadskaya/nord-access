// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import googlePlayBadge from '../../assets/images/google-play-badge.png';

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Отраслевое решение АКСЕСС</h1>
          <p className={styles.subtitle}>
            Универсальный инструмент для управления закупками и продажами вашего бизнеса
          </p>
          <p className={styles.featuresText}>
            Электронные закупки, аукционы, планирование отгрузок, финансовые операции и аналитика —
            всё в одном приложении для максимального удобства и эффективности
          </p>
          <div className={styles.downloadButton}>
            <a href="https://play.google.com/store/apps/details?id=com.akccess" target="_blank" rel="noopener noreferrer">
              <img src={googlePlayBadge} alt="Скачать из Google Play" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
