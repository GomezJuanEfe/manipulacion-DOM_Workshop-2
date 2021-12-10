import { registerImage } from "./lazy.js";

const randomNum = (min, max) => {
  return Math.random() * (max-min) + min;
}

const randomFox = () => Math.floor(randomNum(1,123));

const createImageNode = () => {
  const container = document.createElement('div')
  container.className = 'p-4';

  const imagen = document.createElement('img')
  imagen.className = 'mx-auto';
  imagen.width = '320';
  imagen.dataset.src = `https://randomfox.ca/images/${randomFox()}.jpg`

  container.appendChild(imagen);

  return container
}

const mountNode = document.getElementById('images');

const addButton = document.getElementById('addImage');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
}

addButton.addEventListener('click', addImage);