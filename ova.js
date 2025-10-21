// Set dynamic title
document.title = document.title + " | OVA";

// Add simple form submission alert
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const pupils = document.querySelectorAll('.pupil');
  const eyeWrappers = document.querySelectorAll('.eye-wrapper');

  // Pupil movement
  pupils.forEach(pupil => {
    const eye = pupil.parentElement;
    const eyeRadius = eye.offsetWidth / 2;
    const pupilRadius = pupil.offsetWidth / 2;
    const maxDistance = eyeRadius - pupilRadius - 2;

    document.addEventListener('mousemove', (e) => {
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      let dx = e.clientX - eyeCenterX;
      let dy = e.clientY - eyeCenterY;

      const distance = Math.sqrt(dx*dx + dy*dy);
      if (distance > maxDistance) {
        const scale = maxDistance / distance;
        dx *= scale;
        dy *= scale;
      }

      pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    });
  });

  // “Broke-Bro” random blink
  function blinkRandomly() {
    const eye = eyeWrappers[Math.floor(Math.random() * eyeWrappers.length)];
    const blinkTimes = Math.floor(Math.random() * 3) + 1; // 1-3 quick blinks
    let i = 0;

    function blinkOnce() {
      eye.classList.add('blink');
      setTimeout(() => {
        eye.classList.remove('blink');
        i++;
        if (i < blinkTimes) {
          setTimeout(blinkOnce, 100 + Math.random() * 200); // quick consecutive blinks
        }
      }, 100 + Math.random() * 100); // blink duration 0.1-0.2s
    }

    blinkOnce();

    // next blink in 2-5 seconds
    setTimeout(blinkRandomly, 2000 + Math.random() * 3000);
  }

  blinkRandomly();
});


const phrases = [
  "Welcome to Original Visionary Art",
  "Creative Web Solutions",
  "We Build Your Vision",
  "Modern & Responsive Design",
  "Your Digital Partner", 
 "Websites That Inspire",
 "Innovative & Professional",
 "Design. Develop. Deliver.",
 "Transforming Ideas Online",
 "Code Meets Creativity",
 "Boost Your Online Presence",
 "Custom Solutions for Every Business",
 "Fast, Reliable, Scalable Websites",
 "Your Brand, Our Passion",
 "We Bring Ideas to Life"
];

const dynamicText = document.getElementById("dynamic-text");
let i = 0; // phrase index
let j = 0; // letter index
let deleting = false;

function typeEffect() {
  const currentPhrase = phrases[i];
  if (!deleting) {
    dynamicText.textContent = currentPhrase.slice(0, j + 1);
    j++;
    if (j === currentPhrase.length) {
      deleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  } else {
    dynamicText.textContent = currentPhrase.slice(0, j - 1);
    j--;
    if (j === 0) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, deleting ? 50 : 100); // speed
}

// Start typing
typeEffect();



// 🔍 Search bar Google redirect
document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const query = e.target.querySelector("input").value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
});
