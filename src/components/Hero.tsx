import Link from "next/link";

const bullets = [
  "ОГЭ по математике и ОГЭ/ЕГЭ по информатике",
  "Python и C++ для олимпиад и проектов",
  "Индивидуальный план под каждый класс",
];

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-gray py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* === ФОНОВЫЕ СИМВОЛЫ (АДАПТИВНЫЕ РАЗМЕРЫ) === */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Код и языки программирования */}
        <span className="absolute top-4 left-[5%] text-4xl sm:text-6xl md:text-8xl text-brand-yellow/20 font-mono font-bold">
          &lt;/&gt;
        </span>
        <span className="absolute top-16 right-[5%] text-4xl sm:text-5xl md:text-7xl text-brand-red/15 font-mono font-bold">
          {"{}"}
        </span>
        <span className="absolute top-1/2 left-[2%] text-3xl sm:text-5xl md:text-6xl text-brand-yellow/18 font-mono font-bold">
          Py
        </span>
        <span className="absolute bottom-12 right-[5%] text-4xl sm:text-6xl md:text-7xl text-brand-red/18 font-mono font-bold">
          C++
        </span>
        <span className="absolute top-1/3 right-[2%] text-3xl sm:text-4xl md:text-5xl text-brand-yellow/15 font-mono font-bold hidden sm:block">
          ()
        </span>
        <span className="absolute bottom-24 left-[10%] text-3xl sm:text-4xl md:text-5xl text-brand-red/15 font-mono font-bold hidden sm:block">
          []
        </span>

        {/* Математические символы */}
        <span className="absolute bottom-16 left-[15%] text-5xl sm:text-7xl md:text-9xl text-brand-yellow/15 font-serif font-bold">
          ∑
        </span>
        <span className="absolute bottom-32 right-[20%] text-5xl sm:text-6xl md:text-8xl text-brand-red/18 font-serif font-bold">
          π
        </span>
        <span className="absolute top-12 left-[35%] text-4xl sm:text-6xl md:text-7xl text-brand-yellow/18 font-serif font-bold hidden sm:block">
          √
        </span>
        <span className="absolute top-1/2 right-[5%] text-5xl sm:text-7xl md:text-8xl text-brand-red/15 font-serif font-bold hidden md:block">
          ∞
        </span>
        <span className="absolute bottom-4 left-[40%] text-4xl sm:text-5xl md:text-6xl text-brand-yellow/20 font-serif font-bold hidden sm:block">
          ∫
        </span>
        <span className="absolute top-2/3 left-[60%] text-4xl sm:text-5xl md:text-6xl text-brand-red/15 font-serif font-bold hidden md:block">
          Δ
        </span>

        {/* Дополнительные символы */}
        <span className="absolute top-8 left-[65%] text-3xl sm:text-4xl md:text-5xl text-brand-yellow/15 font-mono font-bold hidden md:block">
          #
        </span>
        <span className="absolute bottom-40 right-[35%] text-3xl sm:text-4xl md:text-5xl text-brand-red/18 font-mono font-bold hidden md:block">
          @
        </span>
      </div>
      {/* === КОНЕЦ ФОНОВЫХ СИМВОЛОВ === */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая часть: Текст и кнопки */}
          <div className="flex flex-col gap-5 sm:gap-6 relative z-10 text-center lg:text-left">
            <div className="inline-flex w-fit mx-auto lg:mx-0 items-center rounded-full bg-brand-yellow px-3 py-1 text-sm font-semibold text-brand-white shadow-sm">
              🚀 Онлайн-занятия по всей России
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
              Математика и программирование без скуки —{" "}
              <span className="text-brand-red">только результат</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Готовлю к ОГЭ/ЕГЭ, обучаю Python и C++ с нуля. Единый маршрут без
              разрыва между теорией и практикой кода.
            </p>

            <ul className="flex flex-col gap-3 text-sm sm:text-base font-medium text-brand-black max-w-md mx-auto lg:mx-0">
              {bullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-brand-white text-xs font-bold shadow-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3.5 text-base font-semibold text-brand-white shadow-md transition-all hover:bg-orange-700 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black"
              >
                Записаться на пробное
              </Link>
              <Link
                href="#directions"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-brand-black bg-transparent px-6 py-3.5 text-base font-semibold text-brand-black transition-all hover:bg-brand-black hover:text-brand-white active:ring-2 active:ring-brand-black"
              >
                Посмотреть программу
              </Link>
            </div>
          </div>

          {/* Правая часть: Кружок с фото */}
          <div className="relative flex justify-center lg:justify-end z-10 mt-4 lg:mt-0">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full border-4 border-brand-yellow bg-brand-white shadow-xl flex items-center justify-center overflow-hidden transition-transform hover:scale-105 duration-300">
              {/* Фото смещено вниз для лучшего кадрирования лица */}
              <img
                src="/photo.jpg"
                alt="Кирилл Топунков"
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
