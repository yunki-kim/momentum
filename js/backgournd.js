const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = `url('img/bg/${chosenImage}')`;
