// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// ACTIVE NAVBAR
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// TYPING EFFECT
// ===============================

const words = [
  "Full Stack Developer",

  "Frontend Developer",

  "Java Programmer",

  "Web Designer",
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".hero-content h2");

function typeEffect() {
  if (!typing) return;

  if (charIndex < words[wordIndex].length) {
    typing.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 40);
  } else {
    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

typing.textContent = "";

typeEffect();

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document
  .querySelectorAll(
    ".education-card,.skill-card,.internship-card,.project-card,.about-content,.contact-info,form",
  )
  .forEach((item) => {
    item.classList.add("hidden");

    observer.observe(item);
  });

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you for contacting me! I will get back to you soon.");

    form.reset();
  });
}

// ===============================
// HEADER BACKGROUND
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "#06111d";
  } else {
    header.style.background = "rgba(8,27,41,.95)";
  }
});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};

// ===============================
// EXTRA CSS
// ===============================

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

nav ul li a.active{

color:#00abf0;

font-weight:600;

}

#topBtn{

position:fixed;

bottom:30px;

right:30px;

width:55px;

height:55px;

border:none;

border-radius:50%;

display:none;

justify-content:center;

align-items:center;

background:#00abf0;

color:#fff;

font-size:20px;

cursor:pointer;

box-shadow:0 0 20px rgba(0,171,240,.5);

transition:.4s;

z-index:999;

}

#topBtn:hover{

background:#0087c5;

transform:scale(1.1);

}

`;

document.head.appendChild(style);

console.log("Portfolio Loaded Successfully");
