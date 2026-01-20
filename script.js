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
  const phoneNumber = "918754366931";
  let message = "Hello 👋 I visited the Right Hands website and would like to know more about your programs for children.";

  const sections = document.querySelectorAll("section");
  let activeSectionId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      activeSectionId = section.id;
    }
  });

  switch (activeSectionId) {
    case "home":
      message = "Hello 👋 I’m exploring the Right Hands website and would like an overview of your services and approach.";
      break;

    case "about":
      message = "Hello 👋 I would like to understand more about Right Hands’ mission, vision, and the children you support.";
      break;

    case "programs":
      message = "Hello 👋 I’m interested in learning more about your therapy and adaptive training programs.Could you please share details and enrollment information?";
      break;

    case "coaches":
      message = "Hello 👋  I’d like to know more about your coaches, their qualifications, and training methods.";
      break;

    case "testimonials":
      message = "Hello 👋 I read the testimonials on your website and would like more details about the experiences and outcomes.";
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

