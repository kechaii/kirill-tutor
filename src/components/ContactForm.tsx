"use client";

import { useState } from "react";

const subjects = [
  { id: "math", label: "ОГЭ/ЕГЭ Математика и Информатика" },
  { id: "prog", label: "Программирование (Python/C++)" },
  { id: "school", label: "Школьная программа" },
];

const messengers = [
  { id: "telegram", label: "Telegram" },
  { id: "max", label: "Max" },
  { id: "whatsapp", label: "WhatsApp" },
];

const tariffs = [
  { id: "not-sure", label: "Пока не определился, нужна консультация" },
  { id: "single", label: "Разовое занятие" },
  { id: "pack", label: "Стандартный курс (8 занятий)" },
  { id: "intensive", label: "Интенсив «Под ключ» (30 занятий)" },
];

export default function ContactForm() {
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedMessenger, setSelectedMessenger] = useState("telegram");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
    tariff: "not-sure",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          messenger: selectedMessenger,
          subject: selectedSubject,
          tariff: formData.tariff, // <-- Добавили тариф в отправку
          comment: formData.comment,
        }),
      });

      if (response.ok) {
        alert(`Спасибо, ${formData.name}! Я свяжусь с вами в ближайшее время.`);
        setFormData({ name: "", phone: "", comment: "", tariff: "not-sure" });
        setSelectedSubject("math");
        setSelectedMessenger("telegram");
      } else {
        alert(
          "Произошла ошибка. Пожалуйста, напишите мне напрямую в Telegram.",
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка. Пожалуйста, напишите мне напрямую в Telegram.");
    }
  };

  return (
    <section id="contact" className="w-full bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Левая часть: Текст и контакты */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
                Запишитесь на бесплатную диагностику
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Оставьте заявку, и я свяжусь с вами в течение дня, чтобы
                обсудить цели и назначить время первого урока.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-xl">
                  📱
                </span>
                <div>
                  <p className="font-semibold text-brand-black">Мессенджеры</p>
                  <p className="text-sm text-gray-600">
                    Telegram, Max, WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-xl">
                  ⏱️
                </span>
                <div>
                  <p className="font-semibold text-brand-black">Время ответа</p>
                  <p className="text-sm text-gray-600">
                    Обычно в течение 1-2 часов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-xl">
                  🎁
                </span>
                <div>
                  <p className="font-semibold text-brand-black">Бонус</p>
                  <p className="text-sm text-gray-600">
                    Тест на определение уровня в подарок
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть: Форма */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Радио-кнопки выбора предмета */}
              <div>
                <label className="block text-sm font-semibold text-brand-black mb-3">
                  Выберите направление:
                </label>
                <div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                  role="radiogroup"
                >
                  {subjects.map((sub) => (
                    <label
                      key={sub.id}
                      className={`
                        relative cursor-pointer rounded-lg border-2 px-3 py-3 text-center text-xs sm:text-sm font-medium transition-all duration-200 break-words
                        focus-within:ring-2 focus-within:ring-brand-black focus-within:ring-offset-2
                        ${
                          selectedSubject === sub.id
                            ? "border-brand-yellow bg-brand-yellow/10 text-brand-black shadow-sm"
                            : "border-gray-200 text-gray-600 hover:border-brand-yellow hover:text-brand-black"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={sub.id}
                        checked={selectedSubject === sub.id}
                        onChange={() => setSelectedSubject(sub.id)}
                        className="sr-only"
                      />
                      {sub.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Поля ввода */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-brand-black transition-colors"
                    placeholder="Иван"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-brand-black transition-colors"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>

                <div>
                  <label
                    htmlFor="messenger"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Предпочитаемый мессенджер
                  </label>
                  <select
                    id="messenger"
                    value={selectedMessenger}
                    onChange={(e) => setSelectedMessenger(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-brand-black transition-colors bg-white"
                  >
                    {messengers.map((msg) => (
                      <option key={msg.id} value={msg.id}>
                        {msg.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* === НОВЫЙ БЛОК: Выбор тарифа === */}
                <div>
                  <label
                    htmlFor="tariff"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Интересующий тариф
                  </label>
                  <select
                    id="tariff"
                    value={formData.tariff}
                    onChange={(e) =>
                      setFormData({ ...formData, tariff: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-brand-black transition-colors bg-white"
                  >
                    {tariffs.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
                {/* === КОНЕЦ БЛОКА === */}

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Цель обучения или вопрос (необязательно)
                  </label>
                  <textarea
                    id="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-brand-black transition-colors resize-none"
                    placeholder="Например: подготовка к ЕГЭ на 80+ баллов"
                  />
                </div>
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-red px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black active:ring-offset-2"
              >
                Записаться на диагностику
              </button>

              <p className="text-xs text-center text-gray-500">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
