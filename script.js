const sliders = document.querySelectorAll(".slider");
let currentIndex = 0;

function showSlide(index) {
  const currentSlide = sliders[currentIndex];
  const nextSlide = sliders[index];

  const currentHeading = currentSlide.querySelector(".slider-heading");
  const nextHeading = nextSlide.querySelector(".slider-heading");

  // 1. Fade out current heading
  currentHeading.classList.add("fade-out");

  // 2. Wait for fade out to complete, then switch slides
  setTimeout(() => {
    currentSlide.classList.remove("active");
    currentHeading.classList.remove("fade-out");

    nextSlide.classList.add("active");
    // 3. Slide in next heading
    nextHeading.classList.add("slide-in-left");

    currentIndex = index;

    // Cleanup animation class after it finishes
    setTimeout(() => {
      nextHeading.classList.remove("slide-in-left");
    }, 500);
  }, 500);
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % sliders.length;
  showSlide(nextIndex);

  // Set timing: 19s (19000ms) if current (now new) slide is 0, else 6s (6000ms)
  // Note: showSlide updates currentIndex
  const duration = currentIndex === 0 ? 19000 : 6000;
  // const duration = currentIndex === 0 ? 1000 : 1000;
  setTimeout(nextSlide, duration);
}

// Start the loop with the first duration
setTimeout(nextSlide, 19000);
// setTimeout(nextSlide, 1000);

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const nav = document.getElementById("nav");

if (menuToggle && menuClose && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.add("open");
  });

  menuClose.addEventListener("click", () => {
    nav.classList.remove("open");
  });

  // Close menu when clicking a nav link (optional but good for UX)
  const navLinks = nav.querySelectorAll("li");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}
