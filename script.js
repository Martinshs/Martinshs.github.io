const swiper = new Swiper(".swiper", {
  // … your other settings …
  allowTouchMove: false,   // still disables drag-swipe if you wish
  mousewheel: false,       // ← turn off wheel-driven slide change
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



swiper.on('slideChange', function () {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink")

});
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}



// Load preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? "dark" : "light";
  localStorage.setItem("theme", mode);
}


