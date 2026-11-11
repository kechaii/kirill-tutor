"use client";

import { useState } from "react";
import Link from "next/link";

const keyRules = [
  {
    icon: "⏱️",
    title: "Правило 12 часов",
    text: "Отмена или перенос занятия бесплатны при предупреждении минимум за 12 часов.",
  },
  {
    icon: "💰",
    title: "Оплата",
    text: "Разовое занятие — в день урока. Пакеты — перед началом курса. Возможна оплата частями.",
  },
  {
    icon: "📅",
    title: "Лимит переносов",
    text: "По болезни — до 3 раз (по справке).",
  },
  {
    icon: "🤝",
    title: "Атмосфера",
    text: "Общаемся на «ты», без формальностей. Ошибки — это шаг к пониманию, а не провал.",
  },
  {
    icon: "🏆",
    title: "Гарантия результата",
    text: "В тарифе «Интенсив» — 5 на ОГЭ по математике и 80+ на ЕГЭ по информатике.",
  },
  {
    icon: "🔄",
    title: "Расторжение",
    text: "Деньги за неотработанные занятия всегда возвращаются. Предупреждение за 12 часа — занятие оплачивается.",
  },
];

export default function Rules() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section
      id="rules"
      className="w-full bg-brand-white py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-gray p-5 sm:p-8 lg:p-12 border-2 border-gray-100 text-center">
          <div className="mb-4 sm:mb-6">
            <span className="text-5xl sm:text-6xl">📋</span>
          </div>
          По
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-black leading-tight mb-3 sm:mb-4">
            Правила и условия обучения
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Ознакомьтесь с правилами проведения занятий, условиями оплаты и
            отмены. Всё прозрачно и понятно.
          </p>
          {/* Кнопка скачивания PDF */}
          <Link
            href="/docs/rules.pdf"
            download="Правила_обучения_Кирилл_Топунков.pdf"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-brand-red px-6 sm:px-8 py-3.5 sm:py-4 text-base font-bold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black min-h-[48px]"
          >
            <span className="text-xl sm:text-2xl">📄</span>
            Скачать правила (PDF)
          </Link>
          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            Файл скачается на ваше устройство
          </p>
          {/* Кнопка "Показать кратко" */}
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-brand-red hover:text-brand-black transition-colors px-4 py-2 rounded-lg hover:bg-brand-gray"
          >
            {showPreview ? "Свернуть" : "👁️ Посмотреть кратко"}
          </button>
          {/* Превью ключевых правил */}
          {showPreview && (
            <div className="mt-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {keyRules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-white border border-gray-200"
                  >
                    <span className="text-xl sm:text-2xl flex-shrink-0">
                      {rule.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-brand-black text-sm sm:text-base leading-tight mb-1">
                        {rule.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                        {rule.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center px-2">
                Полный документ с деталями — в PDF выше 📄
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
