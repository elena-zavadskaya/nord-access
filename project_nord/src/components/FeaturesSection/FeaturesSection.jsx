// src/components/FeaturesSection/FeaturesSection.jsx
import React from 'react';
import styles from './FeaturesSection.module.css';

// картинки
// import screenshotConvenience from '../../assets/images/screenshot-convenience.png'; // «Удобство и актуальность»
// import screenshotAnalytics from '../../assets/images/screenshot-analytics.png';     // «Подробная аналитика»
// import screenshotFunctional from '../../assets/images/screenshot-functional.png';   // «Функциональность»
// import checkIcon from '../../assets/images/check-icon.svg'; // галочка ✓, можно из любого SVG
// iframe код из макета
const IframeWrapper = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '703.3333%',
      boxShadow: '0 2px 8px rgba(63,69,81,0.16)',
      marginTop: '1.6em',
      marginBottom: '0.9em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform',
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        border: 'none',
        padding: 0,
        margin: 0,
      }}
      src="https://www.canva.com/design/DAGkCgOwEI8/ZUZPGQ8XpP_e8GAMyyFBVQ/view?embed"
      allowFullScreen
      allow="fullscreen"
      title="Как это работает"
    ></iframe>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container">

        {/* 1. Удобство и актуальность */}
        <div className={styles.featureBlock}>
          <div className={styles.textSide}>
            <h3 className={styles.blockTitle}>Удобство и актуальность</h3>
            <p className={styles.blockDescription}>
              Актуальные цены и объёмы к отгрузке, быстрое оформление заказов, удобное заполнение справочников.
            </p>
            <p className={styles.blockDescription}>
              Ваши финансы всегда под контролем: реальный остаток денежных средств и переплата.
            </p>
          </div>
          <div className={styles.imageSide}>
            <img
              // src={screenshotConvenience}
              alt="Скриншот удобства и актуальности"
              className={styles.screenshot}
            />
          </div>
        </div>

        {/* 2. Подробная аналитика */}
        <div className={styles.featureBlock}>
          <div className={styles.imageSide}>
            <img
              // src={screenshotAnalytics}
              alt="Скриншот подробной аналитики"
              className={styles.screenshot}
            />
          </div>
          <div className={styles.textSide}>
            <h3 className={styles.blockTitle}>Подробная аналитика</h3>
            <ul className={styles.analyticsList}>
              <li>Полный контроль и анализ ключевых показателей для принятия обоснованных решений</li>
              <li>Автоматическое формирование детализированных отчётов</li>
              <li>Удобный доступ к данным за выбранный временной промежуток</li>
              <li>Отслеживание изменений в объёмах и частоте заказов</li>
            </ul>
            <p className={styles.blockDescription}>
              Мониторинг колебаний цен для своевременной адаптации стратегии
            </p>
          </div>
        </div>

        {/* 3. Функциональность */}
        <div className={styles.featureBlock}>
          <div className={styles.textSide}>
            <h3 className={styles.blockTitle}>Функциональность</h3>
            <p className={styles.blockDescription}>
              Базовый набор функций и блоков позволяют автоматизировать каждодневные операции в вашем бизнесе и высвободить время на другие задачи.
            </p>
            <p className={styles.blockDescription}>
              Удобный и интуитивно понятный интерфейс не требует переподготовки и специального обучения.
            </p>
          </div>
          <div className={styles.imageSide}>
            <img
              // src={screenshotFunctional}
              alt="Скриншот функциональности"
              className={styles.screenshot}
            />
          </div>
        </div>

        {/* 4. Все для вашей комфортной работы (3 карточки) */}
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              {/*<img src={checkIcon} alt="✓" className={styles.checkIcon} />*/}
              <h4 className={styles.cardTitle}>Скорость</h4>
            </div>
            <p className={styles.cardText}>
              Быстрый обмен данными между участниками, оптимизированные алгоритмы и технологии обеспечивают стабильность и оперативность даже при больших объёмах.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              {/*<img src={checkIcon} alt="✓" className={styles.checkIcon} />*/}
              <h4 className={styles.cardTitle}>Настройки</h4>
            </div>
            <p className={styles.cardText}>
              Гибкие настройки адаптируют сервис под пользователя. Система уведомляет о заказах, ценах, отгрузках, времени погрузки и остатках, обеспечивая контроль и быстрый отклик.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              {/*<img src={checkIcon} alt="✓" className={styles.checkIcon} />*/}
              <h4 className={styles.cardTitle}>Техническая поддержка</h4>
            </div>
            <p className={styles.cardText}>
              Профессиональная поддержка быстро решит вопросы и поможет настроить систему для максимальной эффективности. Есть чат-бот поддержки.
            </p>
          </div>
        </div>

        {/* 5. Как это работает (видео/iframe) */}
        <div className={styles.videoWrapper}>
          <h3 className={styles.blockTitle}>Как это работает</h3>
          <p className={styles.blockDescription}>
            Узнайте, как пользоваться всеми возможностями приложения и экономить время на рутинных задачах
          </p>
          <IframeWrapper />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
