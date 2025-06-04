// src/components/FeaturesSection.jsx
import React from "react";
import "./styles/FeaturesSection.css";

import FeatureBlock from "./FeatureBlock";

import tablet1 from "../assets/tablet1.png"; // «Удобство и актуальность»
import tablet2 from "../assets/tablet2.png"; // «Подробная аналитика»
import tablet3 from "../assets/tablet3.png"; // «Функциональность»

const videoPlaceholder = "https://www.youtube.com/embed/dQw4w9WgXcQ";

const FeaturesSection = () => {
  // Данные для трёх блоков можно держать в локальных переменных/константах:
  const blockData = [
    {
      title: "Удобство и актуальность",
      imageSrc: tablet1,
      items: [
        "актуальные цены и объёмы к отгрузке, быстрое оформление заказов, удобное заполнение справочников",
        "ваши финансы всегда под контролем, реальный остаток денежных средств и минимизация переплат",
      ],
      reverse: false,
      isList: true,
    },
    {
      title: "Подробная аналитика",
      imageSrc: tablet2,
      items: [
        "Полный контроль и анализ ключевых показателей для принятия обоснованных решений",
        "Автоматическое формирование детализированных отчётов",
        "Удобный доступ к данным за выбранный временной промежуток",
        "Отслеживание изменений в объёмах и частоте заказов",
        "Мониторинг колебаний цен для своевременной адаптации стратегии",
      ],
      reverse: true,
      isList: true,
    },
    {
      title: "Функциональность",
      imageSrc: tablet3,
      items:
        "базовый набор функций и блоков позволяет автоматизировать ежедневные операции в вашем бизнесе и высвободить время на другие задачи",
      reverse: false,
      isList: false, // здесь не список, а один абзац
    },
  ];

  return (
    <section id="features" className="features">
      {/* Накладка поверх фона (необязательно) */}
      <div className="features__overlay" />

      <div className="features__inner">
        {/* 1. Выводим три блока через map */}
        {blockData.map((block, index) => (
          <FeatureBlock
            key={index}
            title={block.title}
            imageSrc={block.imageSrc}
            items={block.items}
            reverse={block.reverse}
            isList={block.isList}
          />
        ))}

        {/* ============================= */}
        {/* 4) Все для вашей комфортной работы (карточки) */}
        {/* ============================= */}
        <div className="features__comfort">
          <h2 className="features__comfort-title">
            Все для вашей комфортной работы
          </h2>
          <div className="features__cards">
            {/* Карточка 1: Скорость */}
            <div className="features__card">
              <div className="features__card-icon">✔️</div>
              <h3 className="features__card-title">Скорость</h3>
              <p className="features__card-text">
                быстрый обмен данными между участниками, оптимизированные
                алгоритмы и технологии обеспечивают стабильность и
                оперативность даже при больших объёмах
              </p>
            </div>

            {/* Карточка 2: Настройки */}
            <div className="features__card">
              <div className="features__card-icon">✔️</div>
              <h3 className="features__card-title">Настройки</h3>
              <p className="features__card-text">
                гибкие настройки адаптируют сервис под пользователя. Система
                уведомляет о заказах, ценах, отгрузках, времени — обеспечивая
                контроль и быстрый отклик
              </p>
            </div>

            {/* Карточка 3: Техническая поддержка */}
            <div className="features__card">
              <div className="features__card-icon">✔️</div>
              <h3 className="features__card-title">Техническая поддержка</h3>
              <p className="features__card-text">
                профессиональная поддержка быстро решит вопросы и поможет
                настроить систему для максимальной эффективности. чат-бот
                поддержки
              </p>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* 5) Как это работает (видео) */}
        {/* ============================= */}
        <div className="features__demo">
          <h2 className="features__demo-title">Как это работает</h2>
          <div className="features__video-wrapper">
            <iframe
              className="features__video"
              src={videoPlaceholder}
              title="Видео демонстрация"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
