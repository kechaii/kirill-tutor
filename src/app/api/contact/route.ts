import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. ДОБАВИЛИ tariff в список получаемых данных
    const { name, phone, messenger, subject, tariff, comment } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Если токена нет — просто логируем в консоль (для тестов)
    if (!token || !chatId) {
      console.log("=== НОВАЯ ЗАЯВКА ===");
      console.log("Имя:", name);
      console.log("Телефон:", phone);
      console.log("Мессенджер:", messenger);
      console.log("Предмет:", subject);
      console.log("Тариф:", tariff); // <-- Теперь тариф тоже выводится
      console.log("Комментарий:", comment);
      console.log("===================");

      return NextResponse.json({
        success: true,
        message: "Заявка получена (Telegram не настроен)",
      });
    }

    // Словари для перевода ID в понятный текст
    const subjectLabels: Record<string, string> = {
      math: "ОГЭ Математика и ОГЭ/ЕГЭ Информатика",
      prog: "Программирование (Python/C++)",
      school: "Школьная программа",
    };

    const messengerLabels: Record<string, string> = {
      telegram: "Telegram",
      max: "Max",
      whatsapp: "WhatsApp",
    };

    // 2. ДОБАВИЛИ словарь для тарифов
    const tariffLabels: Record<string, string> = {
      "not-sure": "Пока не определился (нужна консультация)",
      single: "Разовое занятие",
      pack: "Стандартный курс (8 занятий)",
      intensive: "Интенсив «Под ключ» (30 занятий)",
    };

    // 3. ДОБАВИЛИ строку с тарифом в само сообщение
    const message = `
🎯 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${name}
📱 <b>Телефон:</b> ${phone}
💬 <b>Мессенджер:</b> ${messengerLabels[messenger] || messenger}
📚 <b>Направление:</b> ${subjectLabels[subject] || subject}
💰 <b>Тариф:</b> ${tariffLabels[tariff] || tariff}
${comment ? `📝 <b>Комментарий:</b> ${comment}` : ""}
    `.trim();

    // Отправляем в Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Telegram API error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
