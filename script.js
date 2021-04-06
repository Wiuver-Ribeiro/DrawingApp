const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clear = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 5;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = e.offsetX;
  y = e.offsetX;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
})

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.move(x1, y2);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colorEl;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
  size += 5;
  sizeEl.textContent = size;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
})

decreaseBtn.addEventListener('click', () => {
  size -= 5;
  sizeEl.textContent = size;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
})

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
})

const updateSizeOnScreen = () => {
  sizeEl.innerText = size;
}

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})