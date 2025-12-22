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
    fbads: {
      title: "🚀 Facebook Ads",
      desc: "Facebook Ads designs",
      images: [
        "Facebook Ads/Copy of Portfolio for Gen (1).png",
        "Facebook Ads/Copy of Portfolio for Gen (2).png",
        "Facebook Ads/Copy of Portfolio for Gen (3).png",
        "Facebook Ads/Copy of Portfolio for Gen (4).png",
        "Facebook Ads/Copy of Portfolio for Gen (5).png",
        "Facebook Ads/Copy of Portfolio for Gen (6).png",
        "Facebook Ads/Copy of Portfolio for Gen (7).png",
        "Facebook Ads/Copy of Portfolio for Gen (8).png",
        "Facebook Ads/Copy of Portfolio for Gen (9).png",
        "Facebook Ads/Copy of Portfolio for Gen (10).png",
        "Facebook Ads/Copy of Portfolio for Gen (11).png",
        "Facebook Ads/Copy of Portfolio for Gen (12).png",
        "Facebook Ads/Copy of Portfolio for Gen (13).png",
        "Facebook Ads/Copy of Portfolio for Gen (14).png",
        "Facebook Ads/Copy of Portfolio for Gen (15).png",
        "Facebook Ads/Copy of Portfolio for Gen (16).png",
        "Facebook Ads/Copy of Portfolio for Gen (17).png",
        "Facebook Ads/Copy of Portfolio for Gen (18).png",
        "Facebook Ads/Copy of Portfolio for Gen (19).png",
        "Facebook Ads/Copy of Portfolio for Gen (20).png",
        "Facebook Ads/Copy of Portfolio for Gen (21).png",
        "Facebook Ads/Copy of Portfolio for Gen (22).png",
        "Facebook Ads/Copy of Portfolio for Gen (23).png",
        "Facebook Ads/Copy of Portfolio for Gen (24).png",
        "Facebook Ads/Copy of Portfolio for Gen (25).png",
        "Facebook Ads/Copy of Portfolio for Gen.png",
        "Facebook Ads/Copy of Portfolio for Gen (3).mp4",
        "Facebook Ads/Copy of Portfolio for Gen (4).mp4",
        "Facebook Ads/Copy of Portfolio for Gen (5).mp4",
        "Facebook Ads/Copy of Portfolio for Gen (6).mp4",
        "Facebook Ads/Copy of Portfolio for Gen (7).mp4",
        "Facebook Ads/Copy of Portfolio for Gen.mp4",
        "Facebook Ads/Copy of Portfolio for Gen (1).mp4",
        "Facebook Ads/Copy of Portfolio for Gen (2).mp4"
      ]
    },
    branding: {
      title: "🎨 Social Media Post",
      desc: "Branding Designs",
      images: [
        "Social Media Post/Copy of Portfolio for Gen.png",
        "Social Media Post/Copy of Portfolio for Gen (1).png",
        "Social Media Post/Copy of Portfolio for Gen (2).png",
        "Social Media Post/Copy of Portfolio for Gen (3).png",
        "Social Media Post/Copy of Portfolio for Gen (4).png",
        "Social Media Post/Copy of Portfolio for Gen (5).png",
        "Social Media Post/Copy of Portfolio for Gen (6).png",
        "Social Media Post/Copy of Portfolio for Gen (7).png",
        "Social Media Post/Copy of Portfolio for Gen (8).png",
        "Social Media Post/Copy of Portfolio for Gen (9).png",
        "Social Media Post/Copy of Portfolio for Gen (10).png",
        "Social Media Post/Copy of Portfolio for Gen (11).png",
        "Social Media Post/Copy of Portfolio for Gen (12).png",
        "Social Media Post/Copy of Portfolio for Gen (13).png",
        "Social Media Post/Copy of Portfolio for Gen (14).png",
        "Social Media Post/Copy of Portfolio for Gen (15).png",
        "Social Media Post/Copy of Portfolio for Gen (16).png",
        "Social Media Post/Copy of Portfolio for Gen (17).png",
        "Social Media Post/Copy of Portfolio for Gen (18).png",
        "Social Media Post/Copy of Portfolio for Gen (19).png",
        "Social Media Post/Copy of Portfolio for Gen (20).png",
        "Social Media Post/Copy of Portfolio for Gen (21).png",
        "Social Media Post/Copy of Portfolio for Gen (22).png",
        "Social Media Post/Copy of Portfolio for Gen (23).png",
        "Social Media Post/Copy of Portfolio for Gen (24).png",
        "Social Media Post/Copy of Portfolio for Gen (25).png",
        "Social Media Post/Copy of Portfolio for Gen (26).png",
        "Social Media Post/Copy of Portfolio for Gen (27).png",
        "Social Media Post/Copy of Portfolio for Gen (28).png",
        "Social Media Post/Copy of Portfolio for Gen (29).png",
        "Social Media Post/Copy of Portfolio for Gen (30).png",
        "Social Media Post/Copy of Portfolio for Gen (31).png",
        "Social Media Post/Copy of Portfolio for Gen (32).png",
        "Social Media Post/Copy of Portfolio for Gen (33).png",
        "Social Media Post/Copy of Portfolio for Gen (34).png",
        "Social Media Post/Copy of Portfolio for Gen (35).png",
        "Social Media Post/Copy of Portfolio for Gen (36).png",
        "Social Media Post/Copy of Portfolio for Gen (37).png",
        "Social Media Post/Copy of Portfolio for Gen (38).png",
        "Social Media Post/Copy of Portfolio for Gen (39).png",
        "Social Media Post/Copy of Portfolio for Gen (40).png",
        "Social Media Post/Copy of Portfolio for Gen (41).png",
        "Social Media Post/Copy of Portfolio for Gen (42).png",
        "Social Media Post/Copy of Portfolio for Gen (43).png",
        "Social Media Post/Copy of Portfolio for Gen (44).png",
        "Social Media Post/Copy of Portfolio for Gen (45).png",
        "Social Media Post/Copy of Portfolio for Gen.mp4",
        "Social Media Post/Copy of Portfolio for Gen (1).mp4",
        "Social Media Post/Copy of Portfolio for Gen (2).mp4",
        "Social Media Post/Copy of Portfolio for Gen (3).mp4",
        "Social Media Post/Copy of Portfolio for Gen (4).mp4",
        "Social Media Post/Copy of Portfolio for Gen (5).mp4",
        "Social Media Post/Copy of Portfolio for Gen (6).mp4",
        "Social Media Post/Copy of Portfolio for Gen (7).mp4",
        "Social Media Post/Copy of Portfolio for Gen (8).mp4"
      ]
    },
    graphics: {
      title: "❤️ Newsletters",
      desc: "Newsletters Designs",
      images: [
        "Newsletters/Copy of Portfolio for Gen.png",
        "Newsletters/Copy of Portfolio for Gen (1).png",
        "Newsletters/Copy of Portfolio for Gen (2).png",
        "Newsletters/Copy of Portfolio for Gen (3).png",
        "Newsletters/Copy of Portfolio for Gen (4).png",
        "Newsletters/Copy of Portfolio for Gen (5).png",
        "Newsletters/Copy of Portfolio for Gen (6).png",
        "Newsletters/Copy of Portfolio for Gen (7).png",
        "Newsletters/Copy of Portfolio for Gen (8).png",
        "Newsletters/Copy of Portfolio for Gen (9).png",
        "Newsletters/Copy of Portfolio for Gen (10).png",
        "Newsletters/Copy of Portfolio for Gen (11).png",
        "Newsletters/Copy of Portfolio for Gen (12).png",
        "Newsletters/Copy of Portfolio for Gen (13).png",
        "Newsletters/Copy of Portfolio for Gen (14).png",
        "Newsletters/Copy of Portfolio for Gen (15).png",
        "Newsletters/Copy of Portfolio for Gen (16).png",
        "Newsletters/Copy of Portfolio for Gen (17).png",
        "Newsletters/Copy of Portfolio for Gen (18).png",
        "Newsletters/Copy of Portfolio for Gen (19).png",
        "Newsletters/Copy of Portfolio for Gen (20).png",
        "Newsletters/Copy of Portfolio for Gen (21).png",
        "Newsletters/Copy of Portfolio for Gen (22).png",
        "Newsletters/Copy of Portfolio for Gen (23).png",
        "Newsletters/Copy of Portfolio for Gen (24).png",
        "Newsletters/Copy of Portfolio for Gen (25).png",
        "Newsletters/Copy of Portfolio for Gen (26).png",
        "Newsletters/Copy of Portfolio for Gen (27).png",
        "Newsletters/Copy of Portfolio for Gen (28).png",
        "Newsletters/Copy of Portfolio for Gen (29).png",
        "Newsletters/Copy of Portfolio for Gen (30).png",
        "Newsletters/Copy of Portfolio for Gen (31).png",
        "Newsletters/Copy of Portfolio for Gen (32).png",
        "Newsletters/Copy of Portfolio for Gen (33).png",
        "Newsletters/Copy of Portfolio for Gen (34).png",
        "Newsletters/Copy of Portfolio for Gen (35).png",
        "Newsletters/Copy of Portfolio for Gen (36).png",
        "Newsletters/Copy of Portfolio for Gen (37).png",
        "Newsletters/Copy of Portfolio for Gen (38).png",
        "Newsletters/Copy of Portfolio for Gen (39).png",
        "Newsletters/Copy of Portfolio for Gen (40).png",
        "Newsletters/Copy of Portfolio for Gen (41).png",
        "Newsletters/Copy of Portfolio for Gen (42).png",
        "Newsletters/Copy of Portfolio for Gen (43).png",
        "Newsletters/Copy of Portfolio for Gen (44).png",
        "Newsletters/Copy of Portfolio for Gen (45).png",
        "Newsletters/Copy of Portfolio for Gen (46).png",
        "Newsletters/Copy of Portfolio for Gen (47).png",
        "Newsletters/Copy of Portfolio for Gen (48).png",
        "Newsletters/Copy of Portfolio for Gen (49).png",
        "Newsletters/Copy of Portfolio for Gen (50).png",
        "Newsletters/Copy of Portfolio for Gen (51).png",
        "Newsletters/Copy of Portfolio for Gen (52).png",
        "Newsletters/Copy of Portfolio for Gen (53).png",
        "Newsletters/Copy of Portfolio for Gen (54).png",
        "Newsletters/Copy of Portfolio for Gen (55).png",
        "Newsletters/Copy of Portfolio for Gen (56).png",
        "Newsletters/Copy of Portfolio for Gen (57).png",
        "Newsletters/Copy of Portfolio for Gen (58).png",
        "Newsletters/Copy of Portfolio for Gen (59).png",
        "Newsletters/Copy of Portfolio for Gen (60).png"
      ]
    },
    reels: {
      title: "🖥️ Website Banners",
      desc: "Website banner designs",
      images: [
        "Website Banners/Copy of Portfolio for Gen.png",
        "Website Banners/Copy of Portfolio for Gen (1).png",
        "Website Banners/Copy of Portfolio for Gen (2).png",
        "Website Banners/Copy of Portfolio for Gen (3).png",
        "Website Banners/Copy of Portfolio for Gen (4).png",
        "Website Banners/Copy of Portfolio for Gen (5).png",
        "Website Banners/Copy of Portfolio for Gen (6).png",
        "Website Banners/Copy of Portfolio for Gen (7).png",
        "Website Banners/Copy of Portfolio for Gen (8).png",
        "Website Banners/Copy of Portfolio for Gen (9).png",
        "Website Banners/Copy of Portfolio for Gen (10).png",
        "Website Banners/Copy of Portfolio for Gen (11).png",
        "Website Banners/Copy of Portfolio for Gen (12).png",
        "Website Banners/Copy of Portfolio for Gen (13).png",
      ]
    },
    video: {
      title: "✨ Logos",
      desc: "Logo Designs",
      images: [
        "Logos/Copy of Portfolio for Gen.png",
        "Logos/Copy of Portfolio for Gen (1).png",
        "Logos/Copy of Portfolio for Gen (2).png",
        "Logos/Copy of Portfolio for Gen (3).png",
        "Logos/Copy of Portfolio for Gen (4).png",
        "Logos/Copy of Portfolio for Gen (5).png",
        "Logos/Copy of Portfolio for Gen (6).png",
        "Logos/Copy of Portfolio for Gen (7).png",
        "Logos/Copy of Portfolio for Gen (8).png",
        "Logos/Copy of Portfolio for Gen (9).png"
      ]
    },
    newsletter: {
      title: "🖼️ Posters",
      desc: "Newsletter designs",
      images: [
        "Posters/Copy of Portfolio for Gen.png",
        "Posters/Copy of Portfolio for Gen (1).png",
        "Posters/Copy of Portfolio for Gen (2).png",
        "Posters/Copy of Portfolio for Gen (3).png",
        "Posters/Copy of Portfolio for Gen (4).png",
        "Posters/Copy of Portfolio for Gen (5).png",
        "Posters/Copy of Portfolio for Gen (6).png",
        "Posters/Copy of Portfolio for Gen (7).png",
      ]
    },
    brochures: {
      title: "📜 Brochures",
      desc: "Brochure designs",
      images: [
        "Brochures/Copy of Portfolio for Gen.png",
        "Brochures/Copy of Portfolio for Gen (1).png",
        "Brochures/Copy of Portfolio for Gen (2).png",
        "Brochures/Copy of Portfolio for Gen (3).png"
      ]
    },
    businesscards: {
      title: "📇 Business Cards",
      desc: "Business card designs",
      images: [
        "Business Cards/Copy of Portfolio for Gen.png",
        "Business Cards/Copy of Portfolio for Gen (1).png",
        "Business Cards/Copy of Portfolio for Gen (2).png",
        "Business Cards/Copy of Portfolio for Gen (3).png",
        "Business Cards/Copy of Portfolio for Gen (4).png",
        "Business Cards/Copy of Portfolio for Gen (5).png",
        "Business Cards/Copy of Portfolio for Gen (6).png"
      ]
    },
    shopify: {
      title: "🛒 Shopify Product Images",
      desc: "Shopify product designs",
      images: [
        "Shopify Products/Copy of Portfolio for Gen.png",
        "Shopify Products/Copy of Portfolio for Gen (1).png"
      ]
    },
    packaging: {
      title: "📦 Packaging",
      desc: "Product packaging designs",
      images: [
        "Packaging/Copy of Portfolio for Gen.png",
        "Packaging/Copy of Portfolio for Gen (1).png",
        "Packaging/Copy of Portfolio for Gen (2).png",
        "Packaging/Copy of Portfolio for Gen (3).png"
      ]
    },
    souvenirs: {
      title: "🏷️ Souvenirs",
      desc: "Souvenir designs",
      images: [
        "Souvenirs/Copy of Portfolio for Gen.png",
        "Souvenirs/Copy of Portfolio for Gen (1).png",
        "Souvenirs/Copy of Portfolio for Gen (2).png",
        "Souvenirs/Copy of Portfolio for Gen (3).png",
        "Souvenirs/Copy of Portfolio for Gen (4).png",
        "Souvenirs/Copy of Portfolio for Gen (5).png",
        "Souvenirs/Copy of Portfolio for Gen (6).png",
        "Souvenirs/Copy of Portfolio for Gen (7).png",
        "Souvenirs/Copy of Portfolio for Gen (8).png",
        "Souvenirs/Copy of Portfolio for Gen (9).png",
        "Souvenirs/Copy of Portfolio for Gen (10).png",
        "Souvenirs/Copy of Portfolio for Gen (11).png",
        "Souvenirs/Copy of Portfolio for Gen (12).png",
        "Souvenirs/Copy of Portfolio for Gen (13).png",
        "Souvenirs/Copy of Portfolio for Gen (14).png",
        "Souvenirs/Copy of Portfolio for Gen (15).png",
        "Souvenirs/Copy of Portfolio for Gen (16).png",
        "Souvenirs/Copy of Portfolio for Gen (17).png",
        "Souvenirs/Copy of Portfolio for Gen (18).png",
        "Souvenirs/Copy of Portfolio for Gen (19).png",
        "Souvenirs/Copy of Portfolio for Gen (20).png",
        "Souvenirs/Copy of Portfolio for Gen (21).png"
      ]
    },
    brandkits: {
      title: "🖋️ Brand Kits",
      desc: "Brand Kits designs",
      images: [
        "Brand Kits/Copy of Portfolio for Gen.png",
        "Brand Kits/Copy of Portfolio for Gen (1).png"
      ]
    },
    website: {
      title: "📐 Website Wireframe",
      desc: "Website wireframe designs",
      images: [
        "Website Wireframes/Copy of Portfolio for Gen.png",
        "Website Wireframes/Copy of Portfolio for Gen (1).png"
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
        if (src.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = src;
          video.controls = true;
          video.muted = true;
          video.playsInline = true;
          video.style.width = "100%";
          video.style.borderRadius = "14px";

          // ▶️ PLAY ON HOVER
          video.addEventListener("mouseenter", () => {
            video.currentTime = 0;
            video.play();
          });
          video.addEventListener("mouseleave", () => video.pause());

          grid.appendChild(video);
        } else {
          const img = document.createElement("img");
          img.src = src;
          img.style.width = "100%";
          img.style.borderRadius = "14px";
          grid.appendChild(img);
        }
      });

      // ✅ THEN check item count
      grid.classList.remove("few-items");

      if (gallery.images.length <= 4) {
        grid.classList.add("few-items");
      }

      modal.classList.add("show");
      document.body.style.overflow = "hidden"; //pang scroll behind
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

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const speed = 40;

      const updateCount = () => {
        const increment = Math.ceil(target / speed);
        count += increment;

        if (count < target) {
          counter.textContent = count;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });
  });


});
