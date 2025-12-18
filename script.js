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

  /* ========= NAVBAR SECTION DETECTION  ========= */
  const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
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


// dropdown
// document.querySelectorAll(".toggle").forEach(toggle => {
//   toggle.addEventListener("click", () => {
//     const card = toggle.closest(".service-card");
//     const tools = card.querySelector(".tools");

//     tools.classList.toggle("show");
//     toggle.classList.toggle("active");
//     card.classList.toggle("expand");
//   });
// });

//For Modal
const modal = document.getElementById("galleryModal");
const grid = document.getElementById("galleryGrid");
const title = document.getElementById("galleryTitle");
const desc = document.getElementById("galleryDesc");
const closeBtn = document.querySelector(".gallery-close");

/* 📁 GALLERY DATA */
const galleries = {
  uiux: {
    title: "💻 UI/UX Projects",
    desc: "User interface and experience designs",
    images: [
      "profile.jpg",
      "images/uiux2.jpg",
      "images/uiux3.jpg"
    ]
  },
  branding: {
    title: "🎨 Branding",
    desc: "Brand identity & logos",
    images: [
      "formal.jpg",
      "images/brand2.jpg"
    ]
  },
  graphics: {
    title: "📱 Graphics",
    desc: "Posters, layouts, and designs",
    images: [
      "profile.jpg",
      "images/graphic2.jpg",
      "images/graphic3.jpg"
    ]
  },
  reels: {
    title: "✨ Reels",
    desc: "Short form creative content",
    images: [
      "formal.jpg",
      "images/reel2.jpg"
    ]
  },
  video: {
    title: "🎬 Videos",
    desc: "Video editing projects",
    images: [
      "profile.jpg",
      "images/video2.jpg"
    ]
  },
  newsletter: {
    title: "📰 Newsletter",
    desc: "Email & editorial layouts",
    images: [
      "formal.jpg",
      "images/news2.jpg"
    ]
  }
};

/* OPEN GALLERY */
document.querySelectorAll(".openGallery").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.gallery;
    const gallery = galleries[key];

    title.textContent = gallery.title;
    desc.textContent = gallery.desc;
    grid.innerHTML = "";

    gallery.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      grid.appendChild(img);
    });

    modal.classList.add("show");
    // document.body.style.overflow = "hidden"; //background scroll
  });
});

/* CLOSE */
closeBtn.onclick = () => {
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modal.onclick = e => {
  if (e.target === modal) closeBtn.onclick();
};

