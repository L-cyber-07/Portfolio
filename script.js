document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Web Developer",
    "Java Developer",
    "Backend Enthusiast"
  ];

  const typingElement = document.getElementById("typing");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingElement.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
    } else {
      typingElement.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();
});
