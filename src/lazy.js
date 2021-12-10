const isIntersecting = (entry) => {
  return entry.isIntersecting
}

const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;

  imagen.src = url;

  // const image = container.querySelector('img');

  observer.unobserve(container);
}

const observer = new IntersectionObserver((allElements) => {
  allElements.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  observer.observe(image)
}