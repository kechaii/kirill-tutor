"use client";

import { useState } from "react";
import BackgroundIcons from "./BackgroundIcons";

// === НАПРАВЛЕНИЯ ===
const quizDirections = [
  {
    id: "math_oge",
    title: "Математика ОГЭ",
    icon: "📐",
    description: "Подготовка к ОГЭ, 9 класс",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "inf_ege",
    title: "Информатика ОГЭ/ЕГЭ",
    icon: "💻",
    description: "Теория и программирование",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "python",
    title: "Python с нуля",
    icon: "🐍",
    description: "Основы и первые проекты",
    color: "from-yellow-500 to-green-500",
  },
  {
    id: "cpp",
    title: "C++ и олимпиады",
    icon: "⚡",
    description: "Алгоритмы и структуры данных",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "math_school",
    title: "Школьная математика",
    icon: "📚",
    description: "5-8 класс, подтянуть оценки",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "inf_school",
    title: "Школьная информатика",
    icon: "🖥️",
    description: "5-8 класс, основы алгоритмов",
    color: "from-teal-500 to-emerald-600",
  },
];

// === ВОПРОСЫ ПО КАЖДОМУ НАПРАВЛЕНИЮ ===
const questionsByDirection: Record<
  string,
  Array<{
    question: string;
    options: string[];
    correct: number;
  }>
> = {
  math_oge: [
    {
      question: "Чему равно выражение: 2 + 2 × 2?",
      options: ["6", "8", "4", "10"],
      correct: 0,
    },
    {
      question: "Решите уравнение: 3x − 7 = 11",
      options: ["x = 4", "x = 6", "x = 5", "x = 3"],
      correct: 1,
    },
    {
      question: "Площадь квадрата со стороной 5 см равна:",
      options: ["20 см²", "25 см²", "10 см²", "15 см²"],
      correct: 1,
    },
    {
      question: "Чему равен sin(30°)?",
      options: ["1", "√3/2", "1/2", "√2/2"],
      correct: 2,
    },
    {
      question: "Найдите производную функции f(x) = x³ + 2x",
      options: ["3x² + 2", "x² + 2", "3x + 2", "3x²"],
      correct: 0,
    },
  ],
  inf_ege: [
    {
      question: "Сколько бит в одном байте?",
      options: ["4", "8", "16", "32"],
      correct: 1,
    },
    {
      question: "Чему равно 1010 в двоичной системе в десятичной?",
      options: ["8", "10", "12", "6"],
      correct: 1,
    },
    {
      question: "Какой результат выражения: 10 mod 3?",
      options: ["3", "1", "0", "2"],
      correct: 1,
    },
    {
      question: "Что выведет программа: print(len('Python'))?",
      options: ["5", "6", "7", "Ошибка"],
      correct: 1,
    },
    {
      question: "Сколько значащих единиц в двоичной записи числа 15?",
      options: ["2", "3", "4", "5"],
      correct: 2,
    },
  ],
  python: [
    {
      question: "Как объявить переменную в Python?",
      options: ["var x = 5", "int x = 5", "x = 5", "let x = 5"],
      correct: 2,
    },
    {
      question: "Какой тип данных у значения True?",
      options: ["int", "str", "bool", "float"],
      correct: 2,
    },
    {
      question: "Что выведет: print(type([1, 2, 3]))?",
      options: [
        "<class 'tuple'>",
        "<class 'list'>",
        "<class 'dict'>",
        "<class 'set'>",
      ],
      correct: 1,
    },
    {
      question: "Как добавить элемент в конец списка?",
      options: [
        "list.add(5)",
        "list.append(5)",
        "list.push(5)",
        "list.insert(5)",
      ],
      correct: 1,
    },
    {
      question: "Что делает функция len()?",
      options: [
        "Считает сумму",
        "Возвращает длину",
        "Округляет число",
        "Сортирует список",
      ],
      correct: 1,
    },
  ],
  cpp: [
    {
      question: "Как объявить целочисленную переменную в C++?",
      options: ["var x = 5", "int x = 5", "x: int = 5", "integer x = 5"],
      correct: 1,
    },
    {
      question: "Какой оператор используется для вывода в консоль?",
      options: ["print", "cout <<", "console.log", "echo"],
      correct: 1,
    },
    {
      question: "Что такое массив?",
      options: [
        "Одна переменная",
        "Набор переменных одного типа",
        "Функция",
        "Класс",
      ],
      correct: 1,
    },
    {
      question: "Какая сложность бинарного поиска?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correct: 2,
    },
    {
      question: "Что возвращает функция main() при успешном выполнении?",
      options: ["-1", "0", "1", "true"],
      correct: 1,
    },
  ],
  math_school: [
    {
      question: "Сколько будет 7 × 8?",
      options: ["54", "56", "48", "64"],
      correct: 1,
    },
    {
      question: "Чему равна половина числа 48?",
      options: ["22", "24", "26", "20"],
      correct: 1,
    },
    {
      question: "Периметр прямоугольника 5×3 см равен:",
      options: ["15 см", "16 см", "8 см", "30 см"],
      correct: 1,
    },
    {
      question: "Решите: 15 − (3 + 4) =",
      options: ["6", "8", "12", "16"],
      correct: 1,
    },
    {
      question: "Сколько минут в 2 часах?",
      options: ["100", "120", "130", "140"],
      correct: 1,
    },
  ],
  inf_school: [
    {
      question: "Что такое алгоритм?",
      options: [
        "Программа",
        "Последовательность действий",
        "Компьютер",
        "Файл",
      ],
      correct: 1,
    },
    {
      question: "Какая система счисления используется в компьютерах?",
      options: ["Десятичная", "Двоичная", "Римская", "Шестнадцатеричная"],
      correct: 1,
    },
    {
      question: "Что такое файл?",
      options: ["Папка", "Данные на диске с именем", "Программа", "Вирус"],
      correct: 1,
    },
    {
      question: "Сколько байт в 1 килобайте?",
      options: ["100", "1000", "1024", "2048"],
      correct: 2,
    },
    {
      question: "Какое устройство является «мозгом» компьютера?",
      options: ["Монитор", "Процессор", "Клавиатура", "Мышь"],
      correct: 1,
    },
  ],
};

// === РЕКОМЕНДАЦИИ ПО РЕЗУЛЬТАТАМ ===
const getRecommendation = (
  direction: string,
  correct: number,
  total: number,
) => {
  const percent = (correct / total) * 100;

  if (percent <= 40) {
    return {
      title: "Начальный уровень",
      emoji: "🌱",
      color: "bg-brand-yellow",
      description:
        "Есть пробелы в базовых темах. Рекомендую начать с разовых занятий для диагностики и ликвидации пробелов.",
      tariff: "Разовое занятие",
    };
  }
  if (percent <= 80) {
    return {
      title: "Средний уровень",
      emoji: "📈",
      color: "bg-brand-red",
      description:
        "Хорошая база! Рекомендую пакет из 8 занятий для системной подготовки.",
      tariff: "Стандартный курс (8 занятий)",
    };
  }
  return {
    title: "Продвинутый уровень",
    emoji: "🏆",
    color: "bg-brand-black",
    description:
      "Отличный результат! Готов к интенсиву «Под ключ» и сложным задачам.",
    tariff: "Интенсив «Под ключ» (30 занятий)",
  };
};

export default function Quiz() {
  const [selectedDirection, setSelectedDirection] = useState<string | null>(
    null,
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const questions = selectedDirection
    ? questionsByDirection[selectedDirection]
    : [];
  const currentLevel = getRecommendation(
    selectedDirection || "",
    answers.filter((a, i) => a === questions[i]?.correct).length,
    questions.length,
  );

  const handleStart = (directionId: string) => {
    setSelectedDirection(directionId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setIsFinished(false);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setSelectedDirection(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setIsFinished(false);
  };

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

  const progress =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <section
      id="quiz"
      className="w-full bg-brand-gray py-16 sm:py-24 relative overflow-hidden"
    >
      <BackgroundIcons />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Проверь свой уровень знаний
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Выбери направление и пройди короткий тест — узнаешь, с чего лучше
            начать
          </p>
        </div>

        {/* === ЭКРАН 1: ВЫБОР НАПРАВЛЕНИЯ === */}
        {!selectedDirection && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quizDirections.map((dir) => (
              <button
                key={dir.id}
                onClick={() => handleStart(dir.id)}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2
                  bg-gradient-to-br ${dir.color} text-white
                `}
              >
                <div className="text-4xl mb-3">{dir.icon}</div>
                <h3 className="text-lg font-bold mb-1">{dir.title}</h3>
                <p className="text-sm opacity-90">{dir.description}</p>
                <div className="absolute bottom-4 right-4 text-2xl opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </div>
              </button>
            ))}
          </div>
        )}

        {/* === ЭКРАН 2: КВИЗ === */}
        {selectedDirection && !isFinished && (
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
            {/* Кнопка "Назад" */}
            <button
              onClick={handleRestart}
              className="mb-6 text-sm font-medium text-gray-600 hover:text-brand-black transition-colors"
            >
              ← Выбрать другое направление
            </button>

            {/* Прогресс-бар */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                <span>
                  Вопрос {currentQuestion + 1} из {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-brand-yellow transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Вопрос */}
            <h3 className="text-xl font-bold text-brand-black mb-6">
              {questions[currentQuestion].question}
            </h3>

            {/* Варианты ответов */}
            <div className="space-y-3 mb-8" role="radiogroup">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`
                    relative flex items-center cursor-pointer rounded-lg border-2 px-5 py-4 transition-all duration-200
                    focus-within:ring-2 focus-within:ring-brand-black focus-within:ring-offset-2
                    ${
                      selectedAnswer === index
                        ? "border-brand-yellow bg-brand-yellow/10 shadow-sm"
                        : "border-gray-200 hover:border-brand-yellow hover:bg-gray-50"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => setSelectedAnswer(index)}
                    className="sr-only"
                  />
                  <span
                    className={`
                      flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 mr-4 transition-all
                      ${
                        selectedAnswer === index
                          ? "border-brand-yellow bg-brand-yellow"
                          : "border-gray-300"
                      }
                    `}
                  >
                    {selectedAnswer === index && (
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span className="text-base font-medium text-brand-black">
                    {option}
                  </span>
                </label>
              ))}
            </div>

            {/* Кнопка "Далее" */}
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`
                w-full rounded-lg px-6 py-4 text-base font-bold transition-all duration-200
                focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2
                ${
                  selectedAnswer === null
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-brand-red text-white hover:bg-indigo-800 hover:-translate-y-0.5 shadow-md active:ring-2 active:ring-brand-black"
                }
              `}
            >
              {currentQuestion < questions.length - 1
                ? "Следующий вопрос →"
                : "Узнать результат 🎯"}
            </button>
          </div>
        )}

        {/* === ЭКРАН 3: РЕЗУЛЬТАТ === */}
        {isFinished && (
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 text-center">
            <div className="mb-6">
              <span className="text-6xl">{currentLevel.emoji}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-brand-black mb-2">
              Тест завершён!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Правильных ответов:{" "}
              <span className="font-bold text-brand-red">
                {answers.filter((a, i) => a === questions[i].correct).length} из{" "}
                {questions.length}
              </span>
            </p>

            {/* Уровень */}
            <div
              className={`rounded-xl ${currentLevel.color} text-white p-6 mb-8 shadow-lg`}
            >
              <h4 className="text-xl font-bold mb-2">{currentLevel.title}</h4>
              <p className="text-sm opacity-90 leading-relaxed mb-3">
                {currentLevel.description}
              </p>
              <div className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
                💡 Рекомендация: {currentLevel.tariff}
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="flex-1 rounded-lg bg-brand-red px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black"
              >
                Записаться на диагностику
              </button>
              <button
                onClick={handleRestart}
                className="flex-1 rounded-lg border-2 border-brand-black bg-transparent px-6 py-4 text-base font-semibold text-brand-black transition-all hover:bg-brand-black hover:text-white active:ring-2 active:ring-brand-black"
              >
                Пройти другой тест
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
