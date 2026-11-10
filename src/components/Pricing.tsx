"use client";

import { useState } from "react";
import Link from "next/link";
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
        "Гарантия результата (80+ баллов)",
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

  return (
    <section
      id="pricing"
      className="w-full bg-brand-gray py-16 sm:py-24 relative overflow-hidden"
    >
      <BackgroundIcons />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Тарифы и форматы занятий
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены без скрытых доплат. Выберите направление, чтобы
            увидеть актуальную стоимость.
          </p>
        </div>

        {/* Радио-переключатель направления */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex p-1 bg-white rounded-xl border border-gray-200 shadow-sm"
            role="radiogroup"
          >
            {(["math", "programming"] as const).map((dir) => (
              <label
                key={dir}
                className={`
                  relative cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200
                  focus-within:ring-2 focus-within:ring-brand-black focus-within:ring-offset-2
                  ${
                    direction === dir
                      ? "bg-brand-yellow text-white shadow-md"
                      : "text-gray-600 hover:text-brand-black"
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
                  : "💻 Программирование (Python/C++)"}
              </label>
            ))}
          </div>
        </div>

        {/* Сетка карточек */}
        <div className="grid gap-8 md:grid-cols-3">
          {tariffs.map((tariff) => {
            const price =
              currentPrices[tariff.id as keyof typeof currentPrices];
            const features = tariff.features[direction];

            return (
              <div
                key={tariff.id}
                className={`
                  relative flex flex-col rounded-2xl p-8 border-2 transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
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
                    absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide shadow-sm
                    ${tariff.popular ? "bg-brand-red text-white" : "bg-brand-yellow text-white"}
                  `}
                  >
                    {tariff.badge}
                  </div>
                )}

                {/* Заголовок тарифа */}
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  {tariff.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{tariff.duration}</p>

                {/* Цена */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-brand-black">
                    {price.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    {tariff.id === "single" ? "/ занятие" : "/ курс"}
                  </span>
                </div>

                {/* Список преимуществ */}
                <ul className="flex-grow space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-red text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Кнопка CTA */}
                <button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      const headerOffset = 80;
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`
    w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200
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
        <p className="text-center text-sm text-gray-500 mt-12">
          💡 Оплата происходит за час до начала занятия. Пакет можно оплачивать
          равными частями по договоренности.
        </p>
      </div>
    </section>
  );
}
