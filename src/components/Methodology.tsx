import BackgroundIcons from "./BackgroundIcons";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Диагностика онлайн",
    description:
      "Бесплатное 30-минутное занятие со мной. Определяем текущий уровень, цели и слабые места. Без давления и оценок.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Индивидуальный план",
    description:
      "Составляю PDF-дорожную карту: темы, сроки, контрольные точки. Отправляю в течение 24 часов после диагностики.",
  },
  {
    number: "03",
    icon: "💻",
    title: "Занятия 60 минут",
    description:
      "Zoom или Discord + интерактивная доска Miro + Среда для программирования. Запись каждого урока — можно пересмотреть.",
  },
  {
    number: "04",
    icon: "📊",
    title: "Домашка + отчёт",
    description:
      "После каждого занятия — задачи и код на проверку. Родителю — короткий отчёт в Мессенджер: что прошли, что получилось, над чем работаем.",
  },
];

const preparation = [
  {
    icon: "🎧",
    title: "Наушники и микрофон",
    description: "Для комфортного общения без эха",
  },
  {
    icon: "📹",
    title: "Веб-камера",
    description: "Желательно, но не обязательно",
  },
  {
    icon: "⚙️",
    title: "Установить среду",
    description: "PyCharm / VS Code / Zoom — пришлю инструкцию до урока",
  },
  {
    icon: "📓",
    title: "Тетрадь и ручка",
    description: "Для математики — обязательно, для кода — по желанию",
  },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="w-full bg-brand-gray py-16 sm:py-24 relative overflow-hidden"
    >
      <BackgroundIcons />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Как проходят занятия
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачный процесс от первого знакомства до результата
          </p>
        </div>

        {/* 4 шага */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Стрелка-коннектор между шагами (скрыта на мобильных) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-brand-red z-10" />
              )}

              <div className="bg-brand-white rounded-xl p-6 border-2 border-gray-100 hover:border-brand-yellow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                {/* Номер + иконка */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-brand-red/20">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-brand-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Блок подготовки к уроку */}
        <div className="bg-brand-white rounded-2xl p-8 border-2 border-brand-yellow/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🎒</span>
            <h3 className="text-2xl font-bold text-brand-black">
              Как подготовиться к первому уроку
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preparation.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-lg bg-brand-gray"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-brand-black text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600 text-center">
            💡 После записи я пришлю подробную инструкцию с ссылками на
            установку всех программ — это займёт 5 минут
          </p>
        </div>
      </div>
    </section>
  );
}
