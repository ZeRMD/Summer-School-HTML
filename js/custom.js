// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// Section highlight on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    function changeActiveNav() {
        let scrollPosition = window.scrollY;
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 250; // Offset for better accuracy
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute("id");
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.style.color = ""; // Reset color for all links
                });
                
                let activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.style.color = "#ffcc00"; // Highlight active section
                }
            }
        });
    }
    
    window.addEventListener("scroll", changeActiveNav);
    changeActiveNav(); // Run on load
});
