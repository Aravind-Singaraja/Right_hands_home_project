// === Page Loader ===
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => loader.classList.add("hidden"), 500);
});

// function openWhatsAppChat() {
//   const phoneNumber = "919876543210"; // 🔴 Replace with your WhatsApp number
//   const message = "Hello, I would like to know more about Right Hands programs.";
  
//   const whatsappURL =
//     "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

//   window.open(whatsappURL, "_blank");
// }
function openWhatsAppChat() {
  const phoneNumber = "919500008025"; // 🔴 Replace with your WhatsApp number
  let message = "Hello! I would like to know more about Right Hands.";

  const hash = window.location.hash;

  switch (hash) {
    case "#home":
      message = "Hello! I am visiting the Right Hands website and would like to know more.";
      break;

    case "#about":
      message = "Hi! I want to know more about Right Hands mission and vision.";
      break;

    case "#programs":
      message = "Hello! I am interested in learning about your therapy and training programs.";
      break;

    case "#coaches":
      message = "Hi! I would like to know more about your coaches and training approach.";
      break;

    case "#testimonials":
      message = "Hello! I read the testimonials and would like more details.";
      break;

    case "#contact":
      message = "Hi! I want to contact Right Hands for more information.";
      break;
  }

  const whatsappURL =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}




// === Section Fade on Scroll ===
const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach(sec => observer.observe(sec));

// === Hero Slideshow ===
const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;
setInterval(() => {
  heroSlides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}, 4000);

// === Overlay Fade Transition for Nav Clicks ===
const overlay = document.getElementById("page-overlay");
const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    overlay.classList.add("active");

    setTimeout(() => {
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      overlay.classList.remove("active");
    }, 400);
  });
});

