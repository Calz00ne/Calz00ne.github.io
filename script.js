document.addEventListener("DOMContentLoaded", function () {
  const footerItem2 = document.querySelector(".footer-item-2");

  footerItem2.addEventListener("click", function () {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
