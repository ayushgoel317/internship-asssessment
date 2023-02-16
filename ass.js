const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".content > div");

links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    sections.forEach((section) => {
      section.style.display = "none";
    });
    sections[index].style.display = "block";
  });
});