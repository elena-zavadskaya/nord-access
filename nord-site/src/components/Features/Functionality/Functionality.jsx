// src/components/Features/Functionality/Functionality.jsx
import React from 'react';
import styles from './Functionality.module.css';

export default function Functionality() {
  return (
    <div className={styles.functionalityWrapper}>
      <h2 className={styles.title}>Функциональность</h2>
      <p className={styles.description}>
        Мы объединили все модули — от управления закупками до контроля логистики —
        в едином интерфейсе. Пользуйтесь всеми инструментами без переключения
        между разными системами.
      </p>
      <ul className={styles.featuresList}>
        <li>Управление закупками</li>
        <li>Управление уведомлениями</li>
        <li>Управление финансами</li>
        <li>Управление логистикой</li>
        <li>Справочники</li>
        <li>Pro версия</li>
        <li>Аукцион</li>
      </ul>
    </div>
  );
}
