const addSoundToEl = (selector, pathToSound) => {
  const element = document.querySelectorAll(selector);
  element.forEach((el) => {
    el.onclick = function (pathToSound) {
      playSound(pathToSound);
    };
  });
};

const playSound = (pathToSound) => {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = `${pathToSound}`; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
};

export { addSoundToEl, playSound };
