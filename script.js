const demo = document.querySelector(".demo");

const color = ["ungu", "ijo", "biru", "velvet", "birutua", "kuning"];
const randColor = Math.floor(Math.random() * color.length);

demo.classList.add(color[randColor]);
