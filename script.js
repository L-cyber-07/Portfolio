const text = "Web & Java Developer | JDBC | MySQL";
let index = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (typingElement && index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();
