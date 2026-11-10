"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Направления", href: "#directions" },
  { name: "Методика", href: "#methodology" },
  { name: "Квизы", href: "#quiz" }, // <-- Добавили
  { name: "Тарифы", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Отступ 80px чтобы sticky header не перекрывал секцию
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link
            href="/"
            className="text-xl font-bold text-brand-black hover:text-brand-yellow transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Кирилл Топунков
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-brand-yellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 rounded"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Кнопка "Записаться" (десктоп) */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black"
          >
            Записаться
          </button>

          {/* Бургер-меню (мобильное) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black rounded"
            aria-label="Открыть меню"
          >
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-gray-700 hover:text-brand-yellow transition-colors px-2 py-2 rounded hover:bg-gray-50"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 w-full rounded-lg bg-brand-red px-5 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-indigo-800 active:ring-2 active:ring-brand-black"
              >
                Записаться на диагностику
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
