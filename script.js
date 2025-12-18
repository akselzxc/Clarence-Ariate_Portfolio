document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     GLOBAL ELEMENTS
  ===================================================== */
  const nav = document.querySelector("nav");
  const progressBar = document.getElementById("scroll-progress");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");


  /* =====================================================
     MOBILE NAVBAR HIDE ON SCROLL
  ===================================================== */
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    // Mobile only
    if (window.innerWidth <= 768) {
      if (scrollTop > lastScroll && scrollTop > 100) {
        nav.classList.add("hide");
      } else {
        nav.classList.remove("hide");
      }
    } else {
      nav.classList.remove("hide"); // always visible on desktop
    }

    lastScroll = scrollTop <= 0 ? 0 : scrollTop;


    /* =====================================================
       SCROLL PROGRESS BAR
    ===================================================== */
    if (progressBar) {
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
    }


    /* =====================================================
       ACTIVE NAV LINK ON SCROLL
    ===================================================== */
    let current = "";
    sections.forEach(section => {
      if (scrollTop >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  });


  /* =====================================================
     HAMBURGER MENU
  ===================================================== */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      hamburger.classList.toggle("active");
      nav.classList.remove("hide"); // keep nav visible when menu opens
    });
  }


  /* =====================================================
     DROPDOWN TOGGLES (TOOLS)
  ===================================================== */
  document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const tools = toggle.nextElementSibling;
      toggle.classList.toggle("active");
      tools.classList.toggle("show");
    });
  });


  /* =====================================================
     TESTIMONIAL SLIDER
  ===================================================== */
  const track = document.querySelector(".testimonial-track");
  const dots = document.querySelectorAll(".dot");

  if (track && dots.length) {
    let index = 0;

    const showSlide = i => {
      track.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[i].classList.add("active");
    };

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    setInterval(() => {
      index = (index + 1) % dots.length;
      showSlide(index);
    }, 4000);
  }


  /* =====================================================
     GALLERY MODAL
  ===================================================== */
  const modal = document.getElementById("galleryModal");
  const grid = document.getElementById("galleryGrid");
  const title = document.getElementById("galleryTitle");
  const desc = document.getElementById("galleryDesc");
  const closeBtn = document.querySelector(".gallery-close");

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

  document.querySelectorAll(".openGallery").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.gallery;
      const gallery = galleries[key];

      if (!gallery) return;

      title.textContent = gallery.title;
      desc.textContent = gallery.desc;
      grid.innerHTML = "";

      gallery.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        grid.appendChild(img);
      });

      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn?.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  });

  modal?.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

});
