// array
const array = [
  "Жилой комплекс в историческом центре",
  "Безопасная окружающая среда",
  "Хорошо оборудованная инфраструктура",
];

const textSlide = document.querySelector(".banner__header-slider");
let i = 1;
setInterval(function () {
  textSlide.textContent = array[i];
  if (i >= array.length - 1) {
    i = 0;
  } else {
    i++;
  }
}, 2400);
