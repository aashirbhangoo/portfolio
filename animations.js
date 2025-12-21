const sections = document.querySelectorAll(".section");

function revealSections() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("load", revealSections);
window.addEventListener("scroll", revealSections);
