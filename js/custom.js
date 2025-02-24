// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// Section highlight on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links
  
    function changeActiveLink() {
      let scrollPos = window.scrollY + 100; // Adjust scroll offset
  
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          let id = section.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active-link"); // Remove highlight from all
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active-link"); // Highlight active section
            }
          });
        }
      });
    }
  
    window.addEventListener("scroll", changeActiveLink); // Run on scroll
    changeActiveLink(); // Run on page load
  });