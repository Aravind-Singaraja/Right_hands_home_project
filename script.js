// // // // // Navbar color change on scroll
// // // // window.addEventListener("scroll", function() {
// // // //   const header = document.getElementById("header");
// // // //   header.classList.toggle("scrolled", window.scrollY > 50);
// // // // });

// // // // // Hamburger menu toggle
// // // // const menuToggle = document.getElementById("menu-toggle");
// // // // const navLinks = document.getElementById("nav-links");

// // // // menuToggle.addEventListener("click", () => {
// // // //   menuToggle.classList.toggle("active");
// // // //   navLinks.classList.toggle("active");
// // // // });

// // // // // Close menu when clicking a link (mobile)
// // // // document.querySelectorAll(".nav-links a").forEach(link => {
// // // //   link.addEventListener("click", () => {
// // // //     menuToggle.classList.remove("active");
// // // //     navLinks.classList.remove("active");
// // // //   });
// // // // });

// // // // // Fade-in sections on scroll
// // // // const fadeSections = document.querySelectorAll(".fade-section");
// // // // const fadeOnScroll = () => {
// // // //   fadeSections.forEach(section => {
// // // //     const rect = section.getBoundingClientRect().top;
// // // //     if (rect < window.innerHeight - 150) {
// // // //       section.classList.add("show");
// // // //     }
// // // //   });
// // // // };
// // // // window.addEventListener("scroll", fadeOnScroll);
// // // // fadeOnScroll();

// // // // // Smooth fade transitions between menu sections
// // // // document.querySelectorAll('.nav-links a').forEach(anchor => {
// // // //   anchor.addEventListener('click', function(e) {
// // // //     e.preventDefault();
// // // //     const targetId = this.getAttribute('href');
// // // //     const targetSection = document.querySelector(targetId);

// // // //     document.querySelectorAll("section").forEach(s => s.classList.remove("fade-highlight"));
// // // //     targetSection.classList.add("fade-highlight");

// // // //     window.scrollTo({
// // // //       top: targetSection.offsetTop - 60,
// // // //       behavior: 'smooth'
// // // //     });

// // // //     setTimeout(() => targetSection.classList.remove("fade-highlight"), 1200);
// // // //   });
// // // // });
// // // // Navbar color change on scroll


// // // window.addEventListener("scroll", function() {
// // //   const header = document.getElementById("header");
// // //   header.classList.toggle("scrolled", window.scrollY > 50);
// // // });

// // // // Hamburger menu toggle
// // // const menuToggle = document.getElementById("menu-toggle");
// // // const navLinks = document.getElementById("nav-links");

// // // menuToggle.addEventListener("click", () => {
// // //   menuToggle.classList.toggle("active");
// // //   navLinks.classList.toggle("active");
// // // });

// // // // Close menu when clicking a link (mobile)
// // // document.querySelectorAll(".nav-links a").forEach(link => {
// // //   link.addEventListener("click", () => {
// // //     menuToggle.classList.remove("active");
// // //     navLinks.classList.remove("active");
// // //   });
// // // });

// // // // Fade-in sections on scroll (including hero)
// // // const allSections = document.querySelectorAll("section");

// // // const fadeOnScroll = () => {
// // //   allSections.forEach(section => {
// // //     const rect = section.getBoundingClientRect().top;
// // //     if (rect < window.innerHeight - 150 && rect > -300) {
// // //       section.classList.add("show");
// // //     } else if (rect > window.innerHeight - 50) {
// // //       // remove the class when scrolled back up so it fades again
// // //       section.classList.remove("show");
// // //     }
// // //   });
// // // };

// // // window.addEventListener("scroll", fadeOnScroll);
// // // fadeOnScroll();

// // // // Smooth fade transitions between menu sections
// // // document.querySelectorAll('.nav-links a').forEach(anchor => {
// // //   anchor.addEventListener('click', function(e) {
// // //     e.preventDefault();
// // //     const targetId = this.getAttribute('href');
// // //     const targetSection = document.querySelector(targetId);

// // //     document.querySelectorAll("section").forEach(s => s.classList.remove("fade-highlight"));
// // //     targetSection.classList.add("fade-highlight");

// // //     window.scrollTo({
// // //       top: targetSection.offsetTop - 60,
// // //       behavior: 'smooth'
// // //     });

// // //     setTimeout(() => targetSection.classList.remove("fade-highlight"), 1200);
// // //   });
// // // });
// // // Navbar color change on scroll
// // window.addEventListener("scroll", () => {
// //   const header = document.getElementById("header");
// //   header.classList.toggle("scrolled", window.scrollY > 50);
// // });

// // // Hamburger menu
// // const menuToggle = document.getElementById("menu-toggle");
// // const navLinks = document.getElementById("nav-links");
// // menuToggle.addEventListener("click", () => {
// //   navLinks.classList.toggle("active");
// // });

// // // Fade sections
// // const sections = document.querySelectorAll("section");
// // const reveal = () => {
// //   sections.forEach(section => {
// //     const top = section.getBoundingClientRect().top;
// //     if (top < window.innerHeight - 150) section.classList.add("show");
// //   });
// // };
// // window.addEventListener("scroll", reveal);
// // reveal();

// // // Smooth scroll
// // document.querySelectorAll('.nav-links a').forEach(link => {
// //   link.addEventListener('click', e => {
// //     e.preventDefault();
// //     const target = document.querySelector(link.getAttribute('href'));
// //     window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
// //   });
// // });

// // // HERO SLIDESHOW with Controls
// // let heroSlides = document.querySelectorAll(".hero-slide");
// // let dotsContainer = document.getElementById("dots");
// // let currentSlide = 0;
// // let heroTimer;

// // function showHeroSlide(index) {
// //   heroSlides.forEach(s => s.classList.remove("active"));
// //   dotsContainer.querySelectorAll("span").forEach(dot => dot.classList.remove("active"));
// //   heroSlides[index].classList.add("active");
// //   dotsContainer.children[index].classList.add("active");
// //   currentSlide = index;
// // }

// // function nextHeroSlide() {
// //   showHeroSlide((currentSlide + 1) % heroSlides.length);
// // }
// // function prevHeroSlide() {
// //   showHeroSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
// // }

// // function startHeroAutoSlide() {
// //   heroTimer = setInterval(nextHeroSlide, 4000);
// // }
// // function stopHeroAutoSlide() {
// //   clearInterval(heroTimer);
// // }

// // // Create dot indicators
// // heroSlides.forEach((_, i) => {
// //   let dot = document.createElement("span");
// //   dot.addEventListener("click", () => {
// //     showHeroSlide(i);
// //     stopHeroAutoSlide();
// //     startHeroAutoSlide();
// //   });
// //   dotsContainer.appendChild(dot);
// // });
// // showHeroSlide(0);
// // startHeroAutoSlide();

// // // Button controls
// // document.getElementById("next").addEventListener("click", () => {
// //   nextHeroSlide();
// //   stopHeroAutoSlide();
// //   startHeroAutoSlide();
// // });
// // document.getElementById("prev").addEventListener("click", () => {
// //   prevHeroSlide();
// //   stopHeroAutoSlide();
// //   startHeroAutoSlide();
// // });

// // // COACH SLIDESHOW
// // const allCoachSlideshows = document.querySelectorAll(".coach-slideshow");
// // allCoachSlideshows.forEach(slideshow => {
// //   let slides = slideshow.querySelectorAll(".coach-slide");
// //   let i = 0;
// //   setInterval(() => {
// //     slides[i].classList.remove("active");
// //     i = (i + 1) % slides.length;
// //     slides[i].classList.add("active");
// //   }, 3000);
// // });
// // ============================
// // MENU TOGGLE
// // ============================
// const menuToggle = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   menuToggle.classList.toggle('active');
// });

// // Smooth scroll for nav links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//     navLinks.classList.remove('active');
//     menuToggle.classList.remove('active');
//   });
// });

// // ============================
// // HERO SLIDESHOW
// // ============================
// const heroSlides = document.querySelectorAll('.hero-slide');
// let currentHero = 0;

// function showHeroSlide(n) {
//   heroSlides.forEach(slide => slide.classList.remove('active'));
//   currentHero = (n + heroSlides.length) % heroSlides.length;
//   heroSlides[currentHero].classList.add('active');
// }

// setInterval(() => showHeroSlide(currentHero + 1), 4000);

// // ============================
// // COACH SLIDESHOW (image + text sync with pause + fade animation)
// // ============================
// document.querySelectorAll('.coach-card').forEach(coachCard => {
//   const slides = coachCard.querySelectorAll('.coach-slide');
//   const coachName = coachCard.querySelector('h3');
//   const coachDesc = coachCard.querySelector('p');
//   const coachInfo = coachCard.querySelector('.coach-info');

//   // Define names & descriptions corresponding to each image
//   const coachData = [
//     { name: 'Coach Daniel Lee', desc: 'Adaptive Fitness Specialist focused on balance, strength, and teamwork.' },
//     { name: 'Coach Daniel Lee (Training Session)', desc: 'Encouraging adaptive strength and inclusive group sessions.' }
//   ];

//   const coachData2 = [
//     { name: 'Coach Priya Mehta', desc: 'Therapist and Mentor blending motivation and movement for kids.' },
//     { name: 'Coach Priya (Workshop)', desc: 'Guiding special ability children through rhythmic exercises.' }
//   ];

//   const coachData3 = [
//     { name: 'Coach Sam Rivera', desc: 'Special Education Sports Coach helping children through playful learning.' },
//     { name: 'Coach Sam (Fun Session)', desc: 'Building confidence through engaging adaptive games.' }
//   ];

//   let data;
//   if (coachCard.querySelector('h3').textContent.includes('Daniel')) data = coachData;
//   else if (coachCard.querySelector('h3').textContent.includes('Priya')) data = coachData2;
//   else data = coachData3;

//   let current = 0;
//   let intervalId;

//   // Function to show next slide
//   function showNextSlide() {
//     // Fade out text
//     coachInfo.classList.add('fade-out');

//     // After fade-out ends, change image and text, then fade back in
//     setTimeout(() => {
//       slides.forEach(slide => slide.classList.remove('active'));
//       current = (current + 1) % slides.length;
//       slides[current].classList.add('active');

//       coachName.textContent = data[current].name;
//       coachDesc.textContent = data[current].desc;

//       coachInfo.classList.remove('fade-out');
//     }, 400); // half the transition time
//   }

//   // Start automatic slideshow
//   function startSlideshow() {
//     intervalId = setInterval(showNextSlide, 4000);
//   }

//   // Stop slideshow on hover
//   function stopSlideshow() {
//     clearInterval(intervalId);
//   }

//   startSlideshow();

//   coachCard.addEventListener('mouseenter', stopSlideshow);
//   coachCard.addEventListener('mouseleave', startSlideshow);
// });

// MENU TOGGLE
// Mobile menu toggle
// Mobile menu toggle
// === Mobile Menu Toggle ===
// === Loader ===
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => loader.classList.add("hidden"), 500);
});

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

