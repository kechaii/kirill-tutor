"use client";

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
        <div className="grid gap-8 md:grid-cols-3">
          {/* Колонка 1: Бренд */}
          <div>
            <h3 className="text-xl font-bold mb-4">Кирилл Топунков</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Репетитор по математике и программированию. Готовлю к ОГЭ/ЕГЭ,
              обучаю Python и C++ с нуля до олимпиадного уровня.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Разделы
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
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
                    className="flex items-center gap-3 text-gray-300 hover:text-brand-yellow transition-colors text-sm"
                  >
                    <span className="text-lg">{contact.icon}</span>
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть: Копирайт */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Кирилл Топунков. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
