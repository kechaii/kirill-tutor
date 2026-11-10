import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Кирилл Топунков — Репетитор по математике и программированию",
  description:
    "Онлайн-подготовка к ОГЭ/ЕГЭ по математике и информатике. Обучение Python и C++ с нуля до олимпиадного уровня.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
