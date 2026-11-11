"use client";

import { useState } from "react";
import BackgroundIcons from "./BackgroundIcons";

const faqData = [
  {
    id: 1,
    question: "Как проходят онлайн-занятия?",
    answer:
      "Занятия проходят в Zoom или Discord с использованием интерактивной доски Miro. Для программирования используем VS Code/PyCharm с возможностью совместного редактирования кода. Каждое занятие записывается — вы можете пересмотреть его в любое время.",
  },
  {
    id: 2,
    question: "Можно ли отменить или перенести занятие?",
    answer:
      "Да, вы можете отменить или перенести занятие бесплатно, предупредив минимум за 12 часов. При отмене менее чем за 12 часов занятие считается проведённым и оплачивается полностью.",
  },
  {
    id: 3,
    question: "Как определить уровень ребёнка перед началом?",
    answer:
      "Перед началом обучения мы проводим бесплатную 30-минутную диагностику онлайн. Я определяю текущий уровень, слабые места и цели. Также на сайте есть тест для самостоятельного определения уровня — оставьте заявку, и я пришлю ссылку.",
  },
  {
    id: 4,
    question: "Даёте ли вы домашние задания?",
    answer:
      "Да, после каждого занятия ребёнок получает домашнее задание: задачи по математике или код для написания. Родитель получает короткий отчёт в Telegram: что прошли, что получилось, над чем работаем.",
  },
  {
    id: 5,
    question: "Какие платформы и инструменты вы используете?",
    answer:
      "Для занятий: Zoom или Discord + Miro (интерактивная доска). Для программирования: VS Code с расширением Live Share для совместного редактирования. Все инструкции по установке программ я пришлю до первого урока.",
  },
  {
    id: 6,
    question: "Есть ли гарантия результата?",
    answer:
      "В тарифе «Интенсив Под ключ» я гарантирую результат: 5 на ОГЭ по математике и 80+ баллов на ЕГЭ по информатике. Если ученик не достигает цели — провожу дополнительные занятия бесплатно до достижения результата. Гарантия работает при регулярном посещении и выполнении рекомендаций.",
  },
  {
    id: 7,
    question: "Как связаться с вами для записи?",
    answer:
      "Напишите мне в Telegram, Max или WhatsApp — контакты есть внизу страницы. Также можете заполнить форму записи на сайте, и я свяжусь с вами в течение дня для бесплатной диагностики.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full bg-brand-gray py-12 sm:py-16 lg:py-24 relative overflow-hidden"
    >
      <BackgroundIcons />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-black leading-tight">
            Частые вопросы
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Ответы на самые популярные вопросы о занятиях
          </p>
        </div>

        {/* Аккордеон */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`
                  rounded-xl border-2 bg-white transition-all duration-300 overflow-hidden
                  ${isOpen ? "border-brand-black shadow-md" : "border-gray-200 hover:border-brand-yellow"}
                `}
              >
                {/* Вопрос (кнопка) */}
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className={`
                    w-full flex items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 text-left transition-all duration-200 min-h-[48px]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2
                    ${isOpen ? "bg-brand-yellow/5" : ""}
                  `}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-brand-black leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`
                      flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-xl font-bold transition-all duration-300
                      ${isOpen ? "bg-brand-red text-white rotate-180" : "bg-brand-gray text-brand-black"}
                    `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Ответ (раскрывается) */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA после FAQ */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black min-h-[48px]"
          >
            Написать мне
          </a>
        </div>
      </div>
    </section>
  );
}
