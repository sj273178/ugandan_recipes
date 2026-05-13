const foods = [
  {
    id: 1,
    name: "Rolex",
    category: "street",
    desc: "Uganda's beloved street food – a fresh chapati rolled with fried eggs, cabbage, tomatoes and onions. Crispy, filling, and absolutely delicious.",
    time: "15 min",
    difficulty: "easy",
    rating: 4.9,
    reviews: 1240,
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    tags: ["street", "breakfast", "quick"],
    calories: 380,
    protein: "14g",
    carbs: "52g",
    fat: "12g",
  },
  {
    id: 2,
    name: "Luwombo",
    category: "traditional",
    desc: "A royal Buganda dish – tender chicken or beef steamed in banana leaves with groundnut sauce, creating an aromatic and deeply flavourful stew.",
    time: "2 hrs",
    difficulty: "hard",
    rating: 4.8,
    reviews: 890,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    tags: ["traditional", "special"],
    calories: 520,
    protein: "38g",
    carbs: "18g",
    fat: "32g",
  },
  {
    id: 3,
    name: "Matoke",
    category: "traditional",
    desc: "Steamed green bananas cooked to tender perfection in banana leaves. A Ugandan staple served with groundnut sauce, meat stew or beans.",
    time: "45 min",
    difficulty: "medium",
    rating: 4.7,
    reviews: 1120,
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    tags: ["traditional", "vegetarian"],
    calories: 290,
    protein: "3g",
    carbs: "70g",
    fat: "1g",
  },
  {
    id: 4,
    name: "Posho & Beans",
    category: "traditional",
    desc: "The ultimate Ugandan comfort food – thick white maize porridge paired with rich, slow-cooked kidney beans. Humble, hearty and nourishing.",
    time: "30 min",
    difficulty: "easy",
    rating: 4.6,
    reviews: 2100,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    tags: ["traditional", "vegetarian", "quick"],
    calories: 410,
    protein: "18g",
    carbs: "75g",
    fat: "3g",
  },
  {
    id: 5,
    name: "Groundnut Sauce",
    category: "traditional",
    desc: "A rich, creamy peanut-based sauce simmered with tomatoes, onions and spices. The soul of Ugandan cuisine, served over everything.",
    time: "35 min",
    difficulty: "medium",
    rating: 4.8,
    reviews: 980,
    img: "https://images.unsplash.com/photo-1476224203421-74177e9807a6?auto=format&fit=crop&w=600&q=80",
    tags: ["traditional", "vegetarian"],
    calories: 340,
    protein: "12g",
    carbs: "22g",
    fat: "24g",
  },
  {
    id: 6,
    name: "Pilau",
    category: "traditional",
    desc: "Fragrant, spiced rice cooked with pilau masala, tender beef and caramelized onions. A festive Ugandan rice dish full of warm aromatic spices.",
    time: "1 hr",
    difficulty: "medium",
    rating: 4.9,
    reviews: 1560,
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80",
    tags: ["traditional", "special"],
    calories: 580,
    protein: "28g",
    carbs: "68g",
    fat: "18g",
  },
  {
    id: 7,
    name: "Chapati",
    category: "breakfast",
    desc: "Soft, flaky layered flatbread cooked on a hot griddle. A Ugandan breakfast staple enjoyed with beans, stew or wrapped into a delicious Rolex.",
    time: "30 min",
    difficulty: "medium",
    rating: 4.7,
    reviews: 1890,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    tags: ["breakfast", "street", "vegetarian"],
    calories: 280,
    protein: "7g",
    carbs: "48g",
    fat: "8g",
  },
  {
    id: 8,
    name: "Muchomo",
    category: "street",
    desc: "Succulent goat or beef skewers grilled over charcoal fire with a smoky spice rub. Uganda's favourite street-corner grilled meat experience.",
    time: "40 min",
    difficulty: "medium",
    rating: 4.9,
    reviews: 2340,
    img: "https://images.unsplash.com/photo-1544025162-d76538891a23?auto=format&fit=crop&w=600&q=80",
    tags: ["street", "special"],
    calories: 460,
    protein: "42g",
    carbs: "4g",
    fat: "28g",
  },
  {
    id: 9,
    name: "Katogo",
    category: "breakfast",
    desc: "A hearty one-pot breakfast of matooke or offal cooked with groundnuts or beans. A warming, robust start to any Ugandan morning.",
    time: "45 min",
    difficulty: "medium",
    rating: 4.5,
    reviews: 640,
    img: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?auto=format&fit=crop&w=600&q=80",
    tags: ["breakfast", "traditional"],
    calories: 390,
    protein: "22g",
    carbs: "40g",
    fat: "14g",
  },
  {
    id: 10,
    name: "Mandazi",
    category: "snack",
    desc: "Light, fluffy East African doughnuts with a hint of cardamom and coconut. Perfect with chai tea for a delightful Ugandan afternoon snack.",
    time: "25 min",
    difficulty: "easy",
    rating: 4.6,
    reviews: 780,
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    tags: ["snack", "breakfast", "quick"],
    calories: 220,
    protein: "5g",
    carbs: "38g",
    fat: "7g",
  },
  {
    id: 11,
    name: "Nsenene",
    category: "snack",
    desc: "Fried grasshoppers seasoned with onions, garlic and chilli. A seasonal Ugandan delicacy that is crunchy, savoury and surprisingly addictive.",
    time: "20 min",
    difficulty: "easy",
    rating: 4.4,
    reviews: 420,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    tags: ["snack", "traditional"],
    calories: 180,
    protein: "16g",
    carbs: "6g",
    fat: "10g",
  },
  {
    id: 12,
    name: "Kikomando",
    category: "street",
    desc: "Chapati cut into bite-sized pieces mixed with kidney beans. A budget-friendly, filling Ugandan street food loved by students and workers alike.",
    time: "20 min",
    difficulty: "easy",
    rating: 4.5,
    reviews: 1100,
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
    tags: ["street", "quick", "vegetarian"],
    calories: 320,
    protein: "14g",
    carbs: "58g",
    fat: "6g",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initSearchOverlay();
  initHomeCategoryFilter();
  initRecipeFilter();
  initBackToTop();
  initIngredientChecklist();
  initContactForm();
  initScrollAnimations();
  initActiveNavLinks();
  initSmoothScroll();
  initStarRatings();
  initQueryPrefill();
  initActionButtons();
});

function syncBodyLock() {
  const menuOpen = document
    .getElementById("mobileMenu")
    ?.classList.contains("open");
  const searchOpen = document
    .getElementById("searchOverlay")
    ?.classList.contains("open");
  document.body.classList.toggle("no-scroll", Boolean(menuOpen || searchOpen));
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const toggleScrolled = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };

  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    syncBodyLock();
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
      syncBodyLock();
    });
  });
}

function initSearchOverlay() {
  const overlay = document.getElementById("searchOverlay");
  const toggle = document.getElementById("searchToggle");
  const closeBtn = document.getElementById("searchClose");
  const input = document.getElementById("heroSearchInput");
  if (!overlay || !toggle || !closeBtn || !input) return;

  const openOverlay = () => {
    overlay.classList.add("open");
    syncBodyLock();
    window.setTimeout(() => input.focus(), 120);
  };

  const closeOverlay = () => {
    overlay.classList.remove("open");
    syncBodyLock();
  };

  toggle.addEventListener("click", openOverlay);
  closeBtn.addEventListener("click", closeOverlay);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("open")) {
      closeOverlay();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value.trim()) {
      window.location.href = `recipes.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

function initHomeCategoryFilter() {
  const chips = document.querySelectorAll(".category-chip");
  const cards = document.querySelectorAll("[data-home-foods] .food-card");
  if (!chips.length || !cards.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const selected = chip.dataset.category || "all";
      chips.forEach((item) => item.classList.toggle("active", item === chip));

      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        const show = selected === "all" || categories.includes(selected);
        card.classList.toggle("recipe-card-hidden", !show);
      });
    });
  });
}

function initRecipeFilter() {
  const cards = document.querySelectorAll(".recipes-grid .food-card");
  const tags = document.querySelectorAll(".filter-tag");
  const searchInput = document.getElementById("recipeSearch");
  const countEl = document.getElementById("recipeCount");
  if (!cards.length || !tags.length || !searchInput || !countEl) return;

  let activeFilter = "all";

  const updateRecipes = () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const categories = (card.dataset.category || "").toLowerCase().split(" ");
      const name = (card.dataset.name || "").toLowerCase();
      const desc = (
        card.dataset.desc ||
        card.querySelector(".food-card-desc")?.textContent ||
        ""
      ).toLowerCase();
      const matchesFilter =
        activeFilter === "all" || categories.includes(activeFilter);
      const matchesSearch =
        !query || name.includes(query) || desc.includes(query);
      const show = matchesFilter && matchesSearch;
      card.classList.toggle("recipe-card-hidden", !show);
      if (show) visibleCount += 1;
    });

    countEl.textContent = `${visibleCount} recipe${visibleCount === 1 ? "" : "s"}`;
  };

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      activeFilter = tag.dataset.filter || "all";
      tags.forEach((item) => item.classList.toggle("active", item === tag));
      updateRecipes();
    });
  });

  searchInput.addEventListener("input", updateRecipes);
  updateRecipes();
}

function initQueryPrefill() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const searchInput = document.getElementById("recipeSearch");
  if (q && searchInput) {
    searchInput.value = q;
    searchInput.dispatchEvent(new Event("input"));
  }
}

function initBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;

  const onScroll = () => {
    button.classList.toggle("show", window.scrollY > 400);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initIngredientChecklist() {
  const items = document.querySelectorAll(".ingredient-check");
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = form.querySelector("#firstName");
    const lastName = form.querySelector("#lastName");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    const fields = [firstName, lastName, email, message].filter(Boolean);
    fields.forEach((field) => field.classList.remove("invalid"));

    let hasError = false;
    fields.forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("invalid");
        hasError = true;
      }
    });

    if (email && email.value.trim()) {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!validEmail.test(email.value.trim())) {
        email.classList.add("invalid");
        hasError = true;
      }
    }

    if (hasError) {
      showToast("Please complete all required fields correctly.", "⚠️");
      return;
    }

    showToast("Message sent successfully. We will reply soon!", "✅");
    form.reset();
  });
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
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

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

function initActiveNavLinks() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === currentPath);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initStarRatings() {
  document.querySelectorAll("[data-rating]").forEach((element) => {
    const rating = Number(element.dataset.rating) || 0;
    const fullStars = Math.round(rating);
    const stars = Array.from({ length: 5 }, (_, index) => {
      const filled = index < fullStars;
      return `<span class="star ${filled ? "filled" : "empty"}">★</span>`;
    }).join("");

    element.innerHTML = `${stars}<span class="rating-value">${rating.toFixed(1)}</span>`;
  });
}

function initActionButtons() {
  document.querySelectorAll("[data-toast-message]").forEach((button) => {
    button.addEventListener("click", () => {
      showToast(button.dataset.toastMessage, button.dataset.toastIcon || "💫");
    });
  });

  const printButton = document.querySelector(".print-recipe");
  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }
}
