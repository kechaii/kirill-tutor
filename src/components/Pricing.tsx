"use client";

import { useState } from "react";
import BackgroundIcons from "./BackgroundIcons";

// Данные о ценах
const pricingData = {
  math: {
    single: 1500,
    pack: 11200,
    intensive: 40500,
  },
  programming: {
    single: 1700,
    pack: 12800,
    intensive: 46500,
  },
};

const tariffs = [
  {
    id: "single",
    title: "Разовое занятие",
    duration: "60 минут",
    features: {
      math: [
        "Диагностика уровня",
        "Разбор конкретной темы",
        "Индивидуальный план занятия",
        "Короткий отчёт родителям",
      ],
      programming: [
        "Диагностика уровня",
        "Разбор конкретной темы",
        "Индивидуальный план занятия",
        "Короткий отчёт родителям",
      ],
    },
    badge: null,
    popular: false,
  },
  {
    id: "pack",
    title: "Стандартный курс",
    duration: "8 занятий",
    features: {
      math: [
        "Всё из разового занятия",
        "Индивидуальный план обучения",
        "Промежуточный контроль",
        "Связь с репетитором 24/7",
      ],
      programming: [
        "Всё из разового занятия",
        "Индивидуальный план обучения",
        "Промежуточный контроль",
        "Связь с репетитором 24/7",
      ],
    },
    badge: "Выгодно",
    popular: false,
  },
  {
    id: "intensive",
    title: "Интенсив «Под ключ»",
    duration: "30 занятий",
    features: {
      math: [
        "Всё из стандартного курса",
        "Гарантия результата (5 на ОГЭ / 80+ ЕГЭ)",
        "Помощь с поступлением в вуз",
        "Бесплатные доп. занятия при отставании",
        "Разбор всех типов заданий ЕГЭ/ОГЭ",
        "Пробные экзамены каждый месяц",
      ],
      programming: [
        "Всё из стандартного курса",
        "Основы программирования с нуля",
        "Первые проекты, написанные ребёнком самостоятельно",
        "Подготовка к олимпиадам по информатике",
        "Помощь с выбором направления в IT",
        "Портфолио проектов для поступления",
      ],
    },
    badge: "ХИТ",
    popular: true,
  },
];

export default function Pricing() {
  const [direction, setDirection] = useState<"math" | "programming">("math");
  const currentPrices = pricingData[direction];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className="w-full bg-brand-gray py-12 sm:py-16 lg:py-24 relative overflow-hidden"
    >
      <BackgroundIcons />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-black leading-tight">
            Тарифы и форматы занятий
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены без скрытых доплат. Выберите направление, чтобы
            увидеть актуальную стоимость.
          </p>
        </div>

        {/* Радио-переключатель направления */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div
            className="inline-flex flex-col sm:flex-row p-1 sm:p-1.5 bg-white rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto"
            role="radiogroup"
          >
            {(["math", "programming"] as const).map((dir) => (
              <label
                key={dir}
                className={`
                  relative cursor-pointer rounded-lg px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] flex items-center justify-center text-center leading-tight w-full sm:w-auto
                  focus-within:ring-2 focus-within:ring-brand-black focus-within:ring-offset-2
                  ${
                    direction === dir
                      ? "bg-brand-yellow text-white shadow-md"
                      : "text-gray-600 hover:text-brand-black hover:bg-gray-50"
                  }
                `}
              >
                <input
                  type="radio"
                  name="direction"
                  value={dir}
                  checked={direction === dir}
                  onChange={() => setDirection(dir)}
                  className="sr-only"
                />
                {dir === "math"
                  ? "📐 Математика и Информатика"
                  : "💻 Программирование"}
              </label>
            ))}
          </div>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {tariffs.map((tariff) => {
            const price =
              currentPrices[tariff.id as keyof typeof currentPrices];
            const features = tariff.features[direction];

            return (
              <div
                key={tariff.id}
                className={`
                  relative flex flex-col rounded-2xl p-5 sm:p-6 lg:p-8 border-2 transition-all duration-300
                  hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl
                  ${
                    tariff.popular
                      ? "border-brand-yellow bg-white shadow-lg scale-[1.02]"
                      : "border-gray-200 bg-white hover:border-brand-yellow"
                  }
                `}
              >
                {/* Бейдж */}
                {tariff.badge && (
                  <div
                    className={`
                    absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 rounded-full px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide shadow-sm whitespace-nowrap
                    ${tariff.popular ? "bg-brand-red text-white" : "bg-brand-yellow text-white"}
                  `}
                  >
                    {tariff.badge}
                  </div>
                )}

                {/* Заголовок тарифа */}
                <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-1 sm:mb-2 leading-tight">
                  {tariff.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                  {tariff.duration}
                </p>

                {/* Цена */}
                <div className="mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-black">
                    {price.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">
                    {tariff.id === "single" ? "/ занятие" : "/ курс"}
                  </span>
                </div>

                {/* Список преимуществ */}
                <ul className="flex-grow space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-snug"
                    >
                      <span className="flex-shrink-0 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-red text-[10px] sm:text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Кнопка CTA */}
                <button
                  onClick={scrollToContact}
                  className={`
                    w-full inline-flex items-center justify-center rounded-lg px-4 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-200 min-h-[48px]
                    focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2
                    ${
                      tariff.popular
                        ? "bg-brand-red text-white hover:bg-indigo-800 hover:-translate-y-0.5 shadow-md active:ring-2 active:ring-brand-black"
                        : "bg-brand-gray text-brand-black border border-gray-200 hover:bg-brand-yellow hover:text-white hover:border-brand-yellow active:ring-2 active:ring-brand-black"
                    }
                  `}
                >
                  {tariff.id === "single"
                    ? "Записаться на пробное"
                    : "Выбрать тариф"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Сноска */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-12 px-4 leading-relaxed">
          💡 Оплата происходит за час до начала занятия. Пакет можно оплачивать
          равными частями по договоренности. <br className="hidden sm:block" />
          🎁 Перед покупкой любого тарифа — бесплатная диагностика уровня (30
          минут).
        </p>
      </div>
    </section>
  );
}
