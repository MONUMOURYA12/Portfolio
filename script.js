// Typing Effect
const textArray = ["Web Developer", "MERN Stack Enthusiast", "Problem Solver"];
let typingText = document.querySelector(".typing-text");
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
      typingText.innerHTML = currentText;
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
      typingText.innerHTML = currentText;
    }
    if (j === textArray[i].length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === textArray.length) i = 0;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();

// Contact form demo
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 4 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 }
    }
  },
  "retina_detect": true
});
