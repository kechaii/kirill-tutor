"use client";

import { useState } from "react";
import BackgroundIcons from "./BackgroundIcons";

const categories = [
  { id: "all", label: "Все направления" },
  { id: "math", label: "Математика" },
  { id: "informatics", label: "Информатика" },
  { id: "programming", label: "Программирование" },
];

const directionsData = [
  {
    id: 1,
    category: "math",
    type: "ОГЭ",
    title: "Математика (ОГЭ)",
    audience: "9 класс",
    description:
      "Алгебра, геометрия и полный разбор всех заданий ОГЭ на максимум.",
    result: "Средний балл 5",
    icon: "📐",
  },
  {
    id: 2,
    category: "informatics",
    type: "ОГЭ / ЕГЭ",
    title: "Информатика",
    audience: "9 и 11 класс",
    description:
      "Теория, логика и программирование на Python для решения заданий 17–25 на максимум.",
    result: "100% задач с кодом",
    icon: "💻",
  },
  {
    id: 3,
    category: "programming",
    type: "С нуля",
    title: "Python до Junior",
    audience: "Школьники и студенты",
    description:
      "Основы синтаксиса, алгоритмы, структуры данных и создание первых Pet-проектов.",
    result: "Готовый проект в портфолио",
    icon: "🐍",
  },
  {
    id: 4,
    category: "programming",
    type: "Олимпиады",
    title: "C++ и олимпиадное программирование",
    audience: "7–11 класс",
    description:
      "Подготовка к ВсОШ, Иннополис и другим олимпиадам. Глубокое понимание алгоритмов.",
    result: "Призёр региональных этапов",
    icon: "⚡",
  },
  {
    id: 5,
    category: "math",
    type: "Школьная программа",
    title: "Математика (5–8 класс)",
    audience: "Средняя школа",
    description:
      "Не просто помощь с уроками, а создание супер крепкой базы для успешной сдачи ОГЭ в будущем. Ликвидация пробелов, понимание тем, а не заучивание.",
    result: "Старт для ОГЭ и крепкая база",
    icon: "📚",
  },
  {
    id: 6,
    category: "informatics", // Теперь это часть информатики!
    type: "Школьная программа",
    title: "Информатика (5–8 класс)",
    audience: "Средняя школа",
    description:
      "Основы алгоритмизации, работа с файлами и подготовка к школьным олимпиадам.",
    result: "Уверенное знание предмета",
    icon: "🖥️",
  },
];

export default function Directions() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDirections =
    activeCategory === "all"
      ? directionsData
      : directionsData.filter((d) => d.category === activeCategory);

  return (
    <section
      id="directions"
      className="w-full bg-brand-white py-16 sm:py-24 relative overflow-hidden"
    >
      <BackgroundIcons />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Чему я обучаю
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите направление, чтобы увидеть подробную программу и результаты
            учеников.
          </p>
        </div>

        {/* Радио-кнопки фильтрации */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="radiogroup"
          aria-label="Фильтр направлений"
        >
          {categories.map((cat) => (
            <label
              key={cat.id}
              className={`
                relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold border-2 transition-all duration-200
                focus-within:ring-2 focus-within:ring-brand-black focus-within:ring-offset-2
                ${
                  activeCategory === cat.id
                    ? "bg-brand-yellow border-brand-black text-brand-black shadow-md"
                    : "bg-brand-white border-gray-200 text-gray-600 hover:border-brand-black hover:text-brand-black"
                }
              `}
            >
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={activeCategory === cat.id}
                onChange={() => setActiveCategory(cat.id)}
                className="sr-only"
              />
              {cat.label}
            </label>
          ))}
        </div>

        {/* Сетка карточек */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDirections.map((direction) => (
            <div
              key={direction.id}
              className="group relative flex flex-col rounded-xl border-2 border-gray-100 bg-brand-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-yellow"
            >
              {/* Верхняя часть: Иконка и Бейдж типа */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gray text-3xl transition-colors group-hover:bg-brand-yellow">
                  {direction.icon}
                </div>
                <span className="inline-flex items-center rounded-full bg-brand-gray px-2.5 py-0.5 text-xs font-medium text-brand-black group-hover:bg-brand-yellow/20">
                  {direction.type}
                </span>
              </div>

              {/* Контент */}
              <h3 className="text-xl font-bold text-brand-black mb-2">
                {direction.title}
              </h3>
              <p className="mb-3 text-sm font-semibold text-brand-red">
                {direction.audience}
              </p>
              <p className="mb-6 flex-grow text-gray-600 leading-relaxed">
                {direction.description}
              </p>

              {/* Результат (якорь доверия) */}
              <div className="mt-auto flex items-center gap-2 rounded-lg bg-brand-gray px-3 py-2 group-hover:bg-brand-yellow/10 transition-colors">
                <span className="text-brand-red font-bold">🏆</span>
                <span className="text-sm font-semibold text-brand-black">
                  {direction.result}
                </span>
              </div>

              {/* Декоративная красная полоска снизу при наведении */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-xl bg-brand-red transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
