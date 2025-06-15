import React from "react";
import "./styles/FeaturesSection.css";
import FeatureBlock from "./FeatureBlock";

import tablet1 from "../assets/tablet1.png";
import tablet2 from "../assets/tablet2.png";
import tablet3 from "../assets/tablet3.png";
import checkmarkIcon from "../assets/checkmark.png";

const videoPlaceholder = "https://www.youtube.com/embed/dQw4w9WgXcQ";

const FeaturesSection = () => {
  const blockData = [
    {
      title: "Удобство и актуальность",
      imageSrc: tablet1,
      items:
        "актуальные цены и объёмы к отгрузке, быстрое оформление заказов, удобное заполнение справочников<br><br>ваши финансы всегда под контролем, реальный остаток денежных средств и минимизация переплат",
      reverse: false,
      isList: false,
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
      isList: false,
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features__inner">
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

        <div className="features__comfort">
          <h2 className="features__comfort-title">
            Все для вашей комфортной работы
          </h2>
          <div className="features__cards">
            <div className="features__card features__card--black">
              <div className="features__card-header">
                <div className="features__card-icon">
                  <img
                      src={checkmarkIcon}
                      alt="Checkmark"
                      className="features__checkmark-img"
                  />
                </div>
                <h3 className="features__card-title">Скорость</h3>
              </div>
              <p className="features__card-text">
                быстрый обмен данными между участниками, оптимизированные
                алгоритмы и технологии обеспечивают стабильность и
                оперативность даже при больших объёмах
              </p>
            </div>

            <div className="features__card features__card--black">
              <div className="features__card-header">
                <div className="features__card-icon">
                  <img
                      src={checkmarkIcon}
                      alt="Checkmark"
                      className="features__checkmark-img"
                  />
                </div>
                <h3 className="features__card-title">Настройки</h3>
              </div>
              <p className="features__card-text">
                гибкие настройки адаптируют сервис под пользователя. Система
                уведомляет о заказах, ценах, отгрузках, времени — обеспечивая
                контроль и быстрый отклик
              </p>
            </div>

            <div className="features__card features__card--black">
              <div className="features__card-header">
                <div className="features__card-icon">
                  <img
                      src={checkmarkIcon}
                      alt="Checkmark"
                      className="features__checkmark-img"
                  />
                </div>
                <h3 className="features__card-title">Техническая поддержка</h3>
              </div>
              <p className="features__card-text">
                профессиональная поддержка быстро решит вопросы и поможет
                настроить систему для максимальной эффективности. чат-бот
                поддержки
              </p>
            </div>
          </div>
        </div>

        <div className="features__demo">
          <h2 className="features__demo-title">Как это работает</h2>
          <p className="features__demo-subtitle">
            Узнайте, как пользоваться всеми возможностями приложения и экономить время на рутинных задачах
          </p>
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

