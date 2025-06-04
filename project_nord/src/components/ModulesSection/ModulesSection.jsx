import React from 'react';
import styles from './ModulesSection.module.css';
import bearImage from '../../assets/images/bear.png';

const ModulesSection = () => {
  return (
    <section id="modules" className={styles.modulesSection}>
      <div className="container">
        <div className={styles.inner}>
          {/* Левая часть: изображение мишки */}
          <div className={styles.left}>
            <img src={bearImage} alt="Белый мишка" className={styles.bearImg} />
          </div>
          {/* Правая часть: Список модулей */}
          <div className={styles.right}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Модули ОНЛАЙН</h3>
              <ul className={styles.moduleList}>
                <li>Управление закупками</li>
                <li>Управление уведомлениями</li>
                <li>Управление финансами</li>
                <li>Управление логистикой</li>
                <li>Справочники</li>
              </ul>
              <div className={styles.proVersion}>
                <p className={styles.proTitle}>Pro версия</p>
                <p className={styles.proItem}>Аукцион</p>
              </div>
              <p className={styles.description}>
                Наша команда специалистов разработала комплексный набор модулей с учётом специфики отраслевой торговли нефтепродуктами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
