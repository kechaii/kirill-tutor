import Link from "next/link";

const footerLinks = [
  { name: "Направления", href: "#directions" },
  { name: "Методика", href: "#methodology" },
  { name: "Квизы", href: "#quiz" },
  { name: "Тарифы", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const contacts = [
  { name: "Telegram", href: "https://t.me/lilkechs", icon: "✈️" },
  {
    name: "Max",
    href: "https://max.ru/u/f9LHodD0cOJ0EtY455ShVtXn55nmeNhPZXewFqje16UPDaAg-OeQRTQ-ByA",
    icon: "💬",
  },
  { name: "WhatsApp", href: "https://wa.me/79040348732", icon: "📱" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-brand-black text-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Колонка 1: Бренд */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Кирилл Топунков</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Репетитор по математике и программированию. Готовлю к ОГЭ/ЕГЭ,
              обучаю Python и C++ с нуля до олимпиадного уровня.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Разделы
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-yellow transition-colors text-sm sm:text-base inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Связаться со мной
            </h4>
            <ul className="space-y-3">
              {contacts.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-brand-yellow transition-colors text-sm sm:text-base py-1"
                  >
                    <span className="text-lg sm:text-xl">{contact.icon}</span>
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ссылка на правила (PDF) */}
            <div className="mt-6">
              <a
                href="/docs/rules.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-gray-400 hover:text-brand-yellow transition-colors underline decoration-dotted"
              >
                📄 Скачать правила обучения (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя часть: Копирайт */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed px-4">
            © 2026 Кирилл Топунков. Все права защищены.
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden" />
            Документ является публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
}
