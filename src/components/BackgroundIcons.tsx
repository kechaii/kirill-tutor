export default function BackgroundIcons() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Книги и обучение */}
      <span className="absolute top-[10%] left-[5%] text-5xl opacity-20 rotate-12">
        📚
      </span>
      <span className="absolute top-[30%] right-[8%] text-4xl opacity-25 -rotate-12">
        🎓
      </span>
      <span className="absolute bottom-[20%] left-[10%] text-5xl opacity-20 rotate-6">
        📖
      </span>

      {/* Математика */}
      <span className="absolute top-[15%] right-[20%] text-4xl opacity-20 -rotate-6">
        🧮
      </span>
      <span className="absolute top-[50%] left-[3%] text-5xl opacity-25 rotate-45">
        📐
      </span>
      <span className="absolute bottom-[30%] right-[15%] text-4xl opacity-20 -rotate-12">
        🔢
      </span>

      {/* Программирование */}
      <span className="absolute top-[40%] right-[5%] text-5xl opacity-20 rotate-12">
        💻
      </span>
      <span className="absolute bottom-[15%] right-[30%] text-4xl opacity-25 -rotate-6">
        ⌨️
      </span>
      <span className="absolute top-[60%] left-[8%] text-4xl opacity-20 rotate-12">
        🖥️
      </span>

      {/* Письменные принадлежности */}
      <span className="absolute top-[70%] right-[10%] text-4xl opacity-20 -rotate-45">
        ✏️
      </span>
      <span className="absolute bottom-[10%] left-[25%] text-5xl opacity-25 rotate-6">
        📝
      </span>

      {/* Графики и данные */}
      <span className="absolute top-[25%] left-[20%] text-4xl opacity-20 rotate-12">
        📊
      </span>
      <span className="absolute bottom-[40%] right-[25%] text-4xl opacity-20 -rotate-12">
        📈
      </span>

      {/* Дополнительные мелкие иконки для плотности */}
      <span className="absolute top-[5%] left-[40%] text-3xl opacity-15 rotate-45">
        🎯
      </span>
      <span className="absolute top-[80%] left-[15%] text-3xl opacity-15 -rotate-12">
        💡
      </span>
      <span className="absolute top-[45%] right-[35%] text-3xl opacity-15 rotate-12">
        🏆
      </span>
    </div>
  );
}
