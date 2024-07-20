let $cards = document.querySelector(".cards");
let $images = document.querySelectorAll(".img");
let $bgs = document.querySelectorAll(".bg");

const range = 40;

const calcValue = (a, b) => {
  return ((a / b) * range - range / 2).toFixed(1);
};

document.addEventListener("mousemove", (event) => {
  const yValue = calcValue(event.y, window.innerHeight);

  const xValue = calcValue(event.x, window.innerWidth);

  $cards.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg)`;

  $images.forEach(($img) => {
    $img.style.transform = `translateX(${-xValue}px)
    translateY(${yValue}px)`;
  });

  $bgs.forEach(($bg) => {
    $bg.style.backgroundPositionY = `${yValue * 0.45}px`;
  });

});
