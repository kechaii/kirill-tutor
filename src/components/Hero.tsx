import Link from "next/link";

const bullets = [
  "ОГЭ по математике и ОГЭ/ЕГЭ по информатике",
  "Python и C++ для олимпиад и проектов",
  "Индивидуальный план под каждый класс",
];

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-gray py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* === ФОНОВЫЕ СИМВОЛЫ (УВЕЛИЧЕННЫЕ И БОЛЬШЕ) === */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Код и языки программирования */}
        <span className="absolute top-8 left-[8%] text-8xl text-brand-yellow/20 font-mono font-bold">
          &lt;/&gt;
        </span>
        <span className="absolute top-24 right-[12%] text-7xl text-brand-red/15 font-mono font-bold">
          {"{}"}
        </span>
        <span className="absolute top-1/2 left-[3%] text-6xl text-brand-yellow/18 font-mono font-bold">
          Py
        </span>
        <span className="absolute bottom-16 right-[8%] text-7xl text-brand-red/18 font-mono font-bold">
          C++
        </span>
        <span className="absolute top-1/3 right-[3%] text-5xl text-brand-yellow/15 font-mono font-bold">
          ()
        </span>
        <span className="absolute bottom-32 left-[15%] text-5xl text-brand-red/15 font-mono font-bold">
          []
        </span>

        {/* Математические символы */}
        <span className="absolute bottom-24 left-[25%] text-9xl text-brand-yellow/15 font-serif font-bold">
          ∑
        </span>
        <span className="absolute bottom-40 right-[30%] text-8xl text-brand-red/18 font-serif font-bold">
          π
        </span>
        <span className="absolute top-16 left-[45%] text-7xl text-brand-yellow/18 font-serif font-bold">
          √
        </span>
        <span className="absolute top-1/2 right-[8%] text-8xl text-brand-red/15 font-serif font-bold">
          ∞
        </span>
        <span className="absolute bottom-8 left-[50%] text-6xl text-brand-yellow/20 font-serif font-bold">
          ∫
        </span>
        <span className="absolute top-2/3 left-[70%] text-6xl text-brand-red/15 font-serif font-bold">
          Δ
        </span>

        {/* Дополнительные символы */}
        <span className="absolute top-12 left-[75%] text-5xl text-brand-yellow/15 font-mono font-bold">
          #
        </span>
        <span className="absolute bottom-48 right-[45%] text-5xl text-brand-red/18 font-mono font-bold">
          @
        </span>
        <span className="absolute top-1/4 left-[30%] text-5xl text-brand-yellow/15 font-mono font-bold">
          =
        </span>
        <span className="absolute bottom-20 right-[60%] text-5xl text-brand-red/15 font-mono font-bold">
          !=
        </span>
      </div>
      {/* === КОНЕЦ ФОНОВЫХ СИМВОЛОВ === */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Левая часть: Текст и кнопки */}
          <div className="flex flex-col gap-6 relative z-10">
            <div className="inline-flex w-fit items-center rounded-full bg-brand-yellow px-3 py-1 text-sm font-semibold text-brand-white shadow-sm">
              🚀 Онлайн-занятия по всей России
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl lg:text-6xl leading-tight">
              Математика и программирование без скуки —{" "}
              <span className="text-brand-red">только результат</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Готовлю к ОГЭ/ЕГЭ, обучаю Python и C++ с нуля. Единый маршрут без
              разрыва между теорией и практикой кода.
            </p>

            <ul className="flex flex-col gap-3 text-base font-medium text-brand-black">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-brand-white text-xs font-bold shadow-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-brand-white shadow-md transition-all hover:bg-orange-700 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black"
              >
                Записаться на пробное
              </Link>
              <Link
                href="#directions"
                className="inline-flex items-center justify-center rounded-md border-2 border-brand-black bg-transparent px-6 py-3 text-base font-semibold text-brand-black transition-all hover:bg-brand-black hover:text-brand-white active:ring-2 active:ring-brand-black"
              >
                Посмотреть программу
              </Link>
            </div>
          </div>

          {/* Правая часть: Кружок с фото */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full border-4 border-brand-yellow bg-brand-white shadow-xl flex items-center justify-center overflow-hidden transition-transform hover:scale-105 duration-300">
              {/* Фото смещено вниз */}
              <img
                src="/photo.jpg"
                alt="Иван Петров"
                className="w-full h-full object-cover object-[50%_10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
