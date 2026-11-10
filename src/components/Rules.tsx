import Link from "next/link";

export default function Rules() {
  return (
    <section id="rules" className="w-full bg-brand-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-gray p-8 sm:p-12 border-2 border-gray-100 text-center">
          <div className="mb-6">
            <span className="text-6xl">📋</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl mb-4">
            Правила и условия обучения
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ознакомьтесь с правилами проведения занятий, условиями оплаты и
            отмены. Всё прозрачно и понятно.
          </p>

          <Link
            href="/docs/rules.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 active:ring-2 active:ring-brand-black"
          >
            <span className="text-2xl">📄</span>
            Скачать правила (PDF)
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            Документ откроется в новой вкладке
          </p>
        </div>
      </div>
    </section>
  );
}
