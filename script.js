document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add classes to trigger transitions for content
  document.querySelectorAll(".content .animate").forEach((element) => {
    element.classList.add("slide-in");
  });

  // Add classes to trigger transitions for navigation links
  document.querySelectorAll("nav ul li").forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("slide-in");
    }, index * 200); // Delay each link's animation by 200ms
  });

  // Add class to trigger transition for the "About Me" section
  document.querySelectorAll(".about .animate").forEach((element) => {
    element.classList.add("slide-in");
  });
});
