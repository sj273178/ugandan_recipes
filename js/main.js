document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initSearchOverlay();
  initActiveNavLinks();
  initScrollAnimations();
  initStarRatings();
});

/* =========================================================
   HELPERS
========================================================= */
function syncBodyLock() {
  const menuOpen = document
    .getElementById("mobileMenu")
    ?.classList.contains("open");
  const searchOpen = document
    .getElementById("searchOverlay")
    ?.classList.contains("open");
  document.body.classList.toggle("no-scroll", Boolean(menuOpen || searchOpen));
}

let toastTimer;
function showToast(message, icon = "✨") {
  const toast = document.getElementById("toast");
  const messageEl = document.getElementById("toastMessage");
  const iconEl = toast?.querySelector(".toast-icon");
  if (!toast || !messageEl || !iconEl) return;

  messageEl.textContent = message;
  iconEl.textContent = icon;
  toast.classList.add("show");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3000);
}

/* =========================================================
   NAVBAR — scroll shadow
========================================================= */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const toggle = () => navbar.classList.toggle("scrolled", window.scrollY > 50);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* =========================================================
   MOBILE MENU
========================================================= */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    syncBodyLock();
  });

  // Close when any link is tapped
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
      syncBodyLock();
    });
  });
}

/* =========================================================
   SEARCH OVERLAY
========================================================= */
function initSearchOverlay() {
  const overlay = document.getElementById("searchOverlay");
  const toggle = document.getElementById("searchToggle");
  const closeBtn = document.getElementById("searchClose");
  const input = document.getElementById("heroSearchInput");
  if (!overlay || !toggle || !closeBtn || !input) return;

  const open = () => {
    overlay.classList.add("open");
    syncBodyLock();
    setTimeout(() => input.focus(), 120);
  };
  const close = () => {
    overlay.classList.remove("open");
    syncBodyLock();
  };

  toggle.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  // Click outside the box to close
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // Escape key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) close();
  });

  // Enter to search
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      window.location.href = `recipes.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

/* =========================================================
   ACTIVE NAV LINKS (auto-detect current page)
========================================================= */
function initActiveNavLinks() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === current);
  });
}

/* =========================================================
   SCROLL ANIMATIONS — IntersectionObserver for [data-animate]
========================================================= */
function initScrollAnimations() {
  const elements = document.querySelectorAll("[data-animate]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

/* =========================================================
   STAR RATINGS — renders ★ stars from data-rating="4.9"
========================================================= */
function initStarRatings() {
  document.querySelectorAll("[data-rating]").forEach((el) => {
    const rating = Number(el.dataset.rating) || 0;
    const fullStars = Math.round(rating);
    const stars = Array.from(
      { length: 5 },
      (_, i) =>
        `<span class="star ${i < fullStars ? "filled" : "empty"}">★</span>`,
    ).join("");

    el.innerHTML = `${stars}<span class="rating-value">${rating.toFixed(1)}</span>`;
  });
}
