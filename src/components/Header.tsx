"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Направления", href: "#directions" },
  { name: "Методика", href: "#methodology" },
  { name: "Квизы", href: "#quiz" },
  { name: "Тарифы", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          {/* Логотип — не переносится, уменьшается на мобильных */}
          <Link
            href="/"
            className="flex-shrink-0 text-base sm:text-lg md:text-xl font-bold text-brand-black hover:text-brand-yellow transition-colors whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Кирилл Топунков
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-brand-yellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 rounded px-2 py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Кнопка "Записаться" — скрыта на мобильных, есть в бургер-меню */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black"
          >
            Записаться
          </button>

          {/* Бургер-меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-brand-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-4 text-base font-medium text-brand-black hover:bg-brand-gray hover:text-brand-red transition-colors border-b border-gray-100 last:border-0 min-h-[48px] flex items-center"
                >
                  {link.name}
                </button>
              ))}

              {/* Кнопка записи внутри мобильного меню */}
              <div className="p-4 pb-6">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full flex items-center justify-center rounded-lg bg-brand-red px-5 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-indigo-800 active:ring-2 active:ring-brand-black min-h-[48px]"
                >
                  Записаться на пробное
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
