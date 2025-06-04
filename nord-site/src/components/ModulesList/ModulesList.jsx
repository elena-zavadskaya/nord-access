// src/components/ModulesList/ModulesList.jsx
import React from 'react';
import styles from './ModulesList.module.css';

export default function ModulesList() {
  // Перечень модулей можно при необходимости вынести в массив:
  const modules = [
    'Управление закупками',
    'Управление уведомлениями',
    'Управление финансами',
    'Управление логистикой',
    'Справочники',
    'Pro версия',
    'Аукцион',
  ];

  return (
    <section id="modules" className={styles.modulesWrapper}>
      <ul className={styles.modulesList}>
        {modules.map((mod, idx) => (
          <li key={idx} className={styles.moduleItem}>
            {mod}
          </li>
        ))}
      </ul>
    </section>
  );
}
