document.addEventListener("DOMContentLoaded", () => {

  /* ========= TOGGLE TOOLS ========= */
  document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      const tools = button.nextElementSibling;
      tools.classList.toggle('show');
    });
  });

  /* ========= NAVBAR + SCROLL PROGRESS ========= */
  let lastScrollTop = 0;
  const nav = document.querySelector("nav");
  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Progress bar
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (progressBar) {
      progressBar.style.width = scrollPercent + "%";
    }

    // Navbar hide/show
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.classList.add("hide");
    } else {
      nav.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  /* ========= TESTIMONIAL SLIDER ========= */
  const track = document.querySelector(".testimonial-track");
  const dots = document.querySelectorAll(".dot");

  if (track && dots.length > 0) {
    let index = 0;

    function showSlide(i) {
      track.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[i].classList.add("active");
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    setInterval(() => {
      index = (index + 1) % dots.length;
      showSlide(index);
    }, 4000); // 4 seconds (GOOD)
  }

});

//hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


hamburger.classList.toggle("active");


