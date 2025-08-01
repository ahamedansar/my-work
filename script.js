window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = '#000';
  } else {
    navbar.style.background = '#111';
  }
});


const textList = JSON.parse(document.querySelector(".typewriter").getAttribute("data-text"));
let i = 0, j = 0, current = '', isDeleting = false;
const typeElement = document.querySelector(".typewriter");

function type() {
  if (i < textList.length) {
    current = textList[i];
    if (!isDeleting && j <= current.length) {
      typeElement.innerHTML = current.substring(0, j++);
    } else if (isDeleting && j >= 0) {
      typeElement.innerHTML = current.substring(0, j--);
    }
    if (j === current.length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % textList.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
type();


const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}


function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    return false;
  }

  // Here you could send form data to a backend or email service
  formMsg.textContent = "Message sent successfully!";
  formMsg.style.color = "green";

  // Reset form
  document.getElementById("contactForm").reset();
  return false; // prevent actual submission for demo
}



const revealElements = document.querySelectorAll("section");


