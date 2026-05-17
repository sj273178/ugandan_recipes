document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initSearchOverlay();
  initActiveNavLinks();
  initScrollAnimations();
  initStarRatings();
  initBackToTop();
  initContactForm();
  initRecipeFilter();
  initRecipeDetail();
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
let animationObserver = null;

function initScrollAnimations() {
  const elements = document.querySelectorAll("[data-animate]");
  if (!elements.length) return;

  animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => animationObserver.observe(el));
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

/* =========================================================
   BACK TO TOP
========================================================= */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const toggle = () => btn.classList.toggle("show", window.scrollY > 400);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });

  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* =========================================================
   CONTACT FORM
   ========================================================= */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = "Sending…";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
      showToast("Message sent! We'll be in touch soon. 🎉");
    }, 1400);
  });
}

/* =========================================================
   RECIPES DATA
   ========================================================= */
const RECIPES = [
  {
    id: "rolex",
    title: "Rolex",
    category: "street-food",
    categoryLabel: "Street Food",
    description:
      "Uganda's iconic street food — a spiced omelette rolled inside a crispy chapati, sold on every corner in Kampala.",
    time: 20,
    timeLabel: "20 min",
    difficulty: "Easy",
    rating: 4.9,
    image: "assets/images/rolex.jpeg",
    region: "Kampala",
    serves: 2,
    ingredients: [
      "2 chapatis (freshly made or store-bought)",
      "3 eggs",
      "1 tomato, diced",
      "½ onion, finely chopped",
      "½ green pepper, diced",
      "Salt and pepper to taste",
      "2 tbsp cooking oil",
      "Shredded cabbage (optional)",
    ],
    steps: [
      "Beat eggs with salt and pepper. Mix in diced tomato, onion and green pepper.",
      "Heat oil in a pan over medium heat. Pour in the egg mixture and cook into a flat omelette.",
      "Place a chapati on a flat surface. Lay the omelette on top while still hot.",
      "Add shredded cabbage if using, then roll the chapati tightly around the filling.",
      "Slice in half and serve immediately.",
    ],
  },
  {
    id: "matoke",
    title: "Matoke",
    category: "traditional",
    categoryLabel: "Traditional",
    description:
      "Steamed green bananas cooked in banana leaves — the soul of Buganda cuisine, served with groundnut stew.",
    time: 60,
    timeLabel: "60 min",
    difficulty: "Medium",
    rating: 4.8,
    image: "assets/images/matooke.jpg",
    region: "Central Uganda",
    serves: 4,
    ingredients: [
      "8 green bananas (matoke), peeled",
      "Banana leaves for wrapping",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "1 cup groundnut paste",
      "2 cups water",
      "Salt to taste",
      "2 tbsp cooking oil",
    ],
    steps: [
      "Peel the green bananas and rinse them in cold water.",
      "Line a sufuria (pot) with banana leaves, leaving overhang.",
      "Layer the peeled bananas inside and fold the leaves over to seal.",
      "Steam over medium heat for 40–50 minutes until bananas are soft and yellow.",
      "Meanwhile, fry onions and tomatoes, add groundnut paste and water to make the stew.",
      "Mash the steamed matoke slightly and serve with the groundnut stew.",
    ],
  },
  {
    id: "luwombo",
    title: "Luwombo",
    category: "traditional",
    categoryLabel: "Traditional",
    description:
      "A royal Buganda dish — chicken, beef or mushrooms slow-steamed inside banana leaves with a rich groundnut sauce.",
    time: 90,
    timeLabel: "90 min",
    difficulty: "Medium",
    rating: 4.9,
    image: "assets/images/luwombo.jpg",
    region: "Buganda",
    serves: 4,
    ingredients: [
      "1 kg chicken pieces (or beef / mushrooms)",
      "Large banana leaves, softened over flame",
      "1 cup groundnut paste",
      "2 onions, diced",
      "3 tomatoes, chopped",
      "2 cloves garlic",
      "1 tsp curry powder",
      "Salt to taste",
      "2 cups water",
    ],
    steps: [
      "Season chicken with salt, garlic and curry powder. Brown lightly in oil.",
      "Mix groundnut paste with water to form a sauce. Add onions and tomatoes.",
      "Combine chicken with the sauce and simmer for 15 minutes.",
      "Soften banana leaves over an open flame, then line bowls or cups with them.",
      "Spoon portions of the chicken mixture into each banana-leaf parcel and fold tightly.",
      "Steam the parcels in a pot for 45–60 minutes. Serve in the leaves.",
    ],
  },
  {
    id: "pilau",
    title: "Ugandan Pilau",
    category: "traditional",
    categoryLabel: "Traditional",
    description:
      "Fragrant spiced rice cooked with beef, cardamom, cumin and cinnamon — a celebration dish with East African roots.",
    time: 75,
    timeLabel: "75 min",
    difficulty: "Medium",
    rating: 4.7,
    image: "assets/images/pilau.jpg",
    region: "Nationwide",
    serves: 6,
    ingredients: [
      "2 cups basmati rice",
      "500 g beef, cubed",
      "2 onions, thinly sliced",
      "3 tomatoes, blended",
      "4 cardamom pods",
      "1 tsp cumin seeds",
      "1 cinnamon stick",
      "4 cloves",
      "2 cloves garlic",
      "1-inch ginger, grated",
      "Salt to taste",
      "3 tbsp oil",
    ],
    steps: [
      "Fry onions in oil until deep golden brown. Add garlic, ginger and whole spices.",
      "Add beef and brown well on all sides.",
      "Pour in blended tomatoes and cook until oil separates, about 15 minutes.",
      "Add rice and stir to coat in the spice mixture.",
      "Add water (1:1.5 rice to water ratio), season with salt, and bring to a boil.",
      "Cover tightly, reduce heat and steam for 20 minutes until rice is cooked.",
    ],
  },
  {
    id: "chapati",
    title: "Chapati",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description:
      "Soft, flaky flatbread cooked on a griddle — a Ugandan breakfast staple enjoyed with tea, beans or stew.",
    time: 30,
    timeLabel: "30 min",
    difficulty: "Easy",
    rating: 4.8,
    image: "assets/images/chapati.webp",
    region: "Nationwide",
    serves: 6,
    ingredients: [
      "3 cups plain flour",
      "1 tsp salt",
      "1 tsp sugar",
      "2 tbsp cooking oil (for dough)",
      "Warm water to knead",
      "Extra oil for cooking",
    ],
    steps: [
      "Mix flour, salt and sugar. Add oil and rub into flour.",
      "Gradually add warm water and knead into a smooth, soft dough. Rest 20 minutes.",
      "Divide into balls. Roll each out thinly, brush with oil, fold and roll again for layers.",
      "Cook on a hot dry griddle, flipping once, until golden spots appear on both sides.",
      "Brush with a little oil while cooking for extra softness. Serve hot.",
    ],
  },
  {
    id: "groundnut-stew",
    title: "Groundnut Stew",
    category: "vegetarian",
    categoryLabel: "Vegetarian",
    description:
      "A creamy, nutty stew made from fresh groundnut paste simmered with tomatoes and spices — served over rice or matoke.",
    time: 45,
    timeLabel: "45 min",
    difficulty: "Easy",
    rating: 4.6,
    image: "assets/images/peanut_sauce.jpg",
    region: "Nationwide",
    serves: 4,
    ingredients: [
      "1 cup groundnut paste (smooth)",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "2 cloves garlic",
      "1 cup water or vegetable stock",
      "Salt and pepper to taste",
      "2 tbsp oil",
      "Fresh coriander to garnish (optional)",
    ],
    steps: [
      "Fry onions in oil until soft and translucent. Add garlic and cook 1 minute.",
      "Add tomatoes and cook until they break down into a thick sauce.",
      "Stir in groundnut paste and mix well.",
      "Add water or stock gradually, stirring to avoid lumps.",
      "Simmer on low heat for 20–25 minutes, stirring occasionally, until thick and creamy.",
      "Season with salt and pepper. Serve over rice, matoke or posho.",
    ],
  },
  {
    id: "malewa",
    title: "Malewa",
    category: "traditional",
    categoryLabel: "Traditional",
    description:
      "Bamboo shoots from Mount Elgon slow-cooked with groundnuts — a rare delicacy from the Bugisu people of eastern Uganda.",
    time: 80,
    timeLabel: "80 min",
    difficulty: "Hard",
    rating: 4.7,
    image: "assets/images/malewa.jpeg",
    region: "Bugisu — East Uganda",
    serves: 4,
    ingredients: [
      "500 g dried bamboo shoots (malewa)",
      "1 cup groundnut paste",
      "2 onions, diced",
      "2 tomatoes, chopped",
      "2 cloves garlic",
      "Salt to taste",
      "3 cups water",
      "2 tbsp oil",
    ],
    steps: [
      "Soak dried bamboo shoots in water overnight. Drain and rinse thoroughly.",
      "Boil the shoots in fresh water for 30–40 minutes until tender. Drain.",
      "Fry onions, garlic and tomatoes until soft.",
      "Add groundnut paste dissolved in water and stir into the base.",
      "Add the cooked bamboo shoots and simmer for 20 minutes.",
      "Season with salt and serve with millet bread (kwon kal) or posho.",
    ],
  },
  {
    id: "mandazi",
    title: "Mandazi",
    category: "snacks",
    categoryLabel: "Snacks",
    description:
      "Light, airy fried dough flavoured with coconut milk and cardamom — the perfect sweet snack with afternoon chai.",
    time: 35,
    timeLabel: "35 min",
    difficulty: "Easy",
    rating: 4.5,
    image: "assets/images/mandazi.jpg",
    region: "Coastal & Nationwide",
    serves: 12,
    ingredients: [
      "2 cups plain flour",
      "½ cup coconut milk",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "½ tsp ground cardamom",
      "1 egg",
      "Pinch of salt",
      "Oil for deep frying",
    ],
    steps: [
      "Mix flour, sugar, baking powder, cardamom and salt.",
      "Beat the egg with coconut milk and add to the dry ingredients.",
      "Knead into a soft dough. Rest for 15 minutes.",
      "Roll out to about 1 cm thick. Cut into triangles or circles.",
      "Deep fry in hot oil until puffed and golden brown on both sides.",
      "Drain on paper and serve warm with chai.",
    ],
  },
  {
    id: "katogo",
    title: "Katogo",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description:
      "Matoke or plantains cooked together with offal or groundnuts in one pot — a filling, no-fuss Ugandan breakfast.",
    time: 40,
    timeLabel: "40 min",
    difficulty: "Easy",
    rating: 4.4,
    image: "assets/images/katogo.webp",
    region: "Kampala",
    serves: 3,
    ingredients: [
      "4 green bananas (matoke), peeled and halved",
      "250 g beef offal or groundnuts",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2 cloves garlic",
      "Salt to taste",
      "2 tbsp oil",
      "1 cup water",
    ],
    steps: [
      "Fry onions and garlic in oil until golden.",
      "Add offal or groundnuts and cook for 5 minutes.",
      "Add tomatoes and cook until softened.",
      "Add peeled bananas and pour in water.",
      "Cover and cook on medium heat for 25–30 minutes until bananas are soft.",
      "Season with salt and serve hot as a hearty breakfast.",
    ],
  },
  {
    id: "posho",
    title: "Posho & Beans",
    category: "quick-meals",
    categoryLabel: "Quick Meals",
    description:
      "Stiff maize porridge paired with slow-cooked kidney beans — the everyday comfort meal of millions of Ugandans.",
    time: 25,
    timeLabel: "25 min",
    difficulty: "Easy",
    rating: 4.3,
    image: "assets/images/posho_beans.jpeg",
    region: "Nationwide",
    serves: 4,
    ingredients: [
      "2 cups maize flour (posho flour)",
      "4 cups boiling water",
      "1 tsp salt",
      "2 cups cooked kidney beans",
      "1 onion, diced",
      "2 tomatoes, chopped",
      "1 tbsp oil",
      "Salt to taste",
    ],
    steps: [
      "Bring salted water to a boil in a heavy pot.",
      "Gradually pour in maize flour while stirring constantly to avoid lumps.",
      "Reduce heat and stir vigorously until the mixture becomes very thick and pulls from sides.",
      "Cover and steam on low for 5 minutes.",
      "For the beans: fry onions and tomatoes, add cooked beans and simmer 10 minutes.",
      "Serve posho on a plate with beans ladled alongside.",
    ],
  },
  {
    id: "muchomo",
    title: "Muchomo",
    category: "street-food",
    categoryLabel: "Street Food",
    description:
      "Skewered and roasted goat meat — a beloved roadside grill, marinated in spices and cooked over open charcoal flames.",
    time: 50,
    timeLabel: "50 min",
    difficulty: "Medium",
    rating: 4.8,
    image: "assets/images/muchomo.webp",
    region: "Nationwide",
    serves: 4,
    ingredients: [
      "1 kg goat meat, cut into chunks",
      "2 tbsp soy sauce",
      "2 cloves garlic, minced",
      "1 tsp cumin",
      "1 tsp paprika",
      "½ tsp black pepper",
      "Juice of 1 lemon",
      "Salt to taste",
      "Metal or soaked wooden skewers",
    ],
    steps: [
      "Mix soy sauce, garlic, cumin, paprika, pepper, lemon juice and salt.",
      "Marinate goat pieces in the mixture for at least 1 hour (overnight is best).",
      "Thread meat onto skewers.",
      "Grill over hot charcoal, turning every 5 minutes for even cooking.",
      "Cook for 25–35 minutes until charred outside and cooked through.",
      "Serve with roasted groundnuts and a cold drink.",
    ],
  },
  {
    id: "nile-perch",
    title: "Fried Nile Perch",
    category: "quick-meals",
    categoryLabel: "Quick Meals",
    description:
      "Fresh Nile perch from Lake Victoria, seasoned with garlic and lemon, shallow-fried until golden — served with ugali.",
    time: 30,
    timeLabel: "30 min",
    difficulty: "Easy",
    rating: 4.6,
    image: "assets/images/mputa.jpeg",
    region: "Lake Victoria",
    serves: 3,
    ingredients: [
      "600 g Nile perch fillets",
      "3 cloves garlic, minced",
      "Juice of 1 lemon",
      "1 tsp turmeric",
      "1 tsp paprika",
      "Salt and pepper",
      "3 tbsp flour for dusting",
      "Oil for shallow frying",
    ],
    steps: [
      "Clean and pat dry the fish fillets.",
      "Mix garlic, lemon juice, turmeric, paprika, salt and pepper. Rub all over the fish.",
      "Dust lightly with flour on both sides.",
      "Heat oil in a wide pan over medium-high heat.",
      "Fry fish 4–5 minutes per side until golden and crispy.",
      "Drain and serve with ugali, kachumbari salad and lemon wedges.",
    ],
  },
];

/* =========================================================
   RECIPES GRID RENDERER
   ========================================================= */
function renderRecipes(filter = "all") {
  const grid = document.getElementById("recipesGrid");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const filtered =
    filter === "all" ? RECIPES : RECIPES.filter((r) => r.category === filter);
  if (countEl) countEl.textContent = filtered.length;

  grid.innerHTML = filtered
    .map((r) => {
      const stars = renderStarHTML(r.rating);
      return `
      <div class="recipe-card" data-category="${r.category}" data-id="${r.id}" data-animate>
        <div class="recipe-card-img">
          <img src="${r.image}" alt="${r.title}" loading="lazy">
          <span class="recipe-card-badge">${r.categoryLabel}</span>
        </div>
        <div class="recipe-card-body">
          <h3>${r.title}</h3>
          <p>${r.description}</p>
          <div class="recipe-card-meta">
            <span>⏱ ${r.timeLabel}</span>
            <span>👤 ${r.difficulty}</span>
            <div class="recipe-card-stars">${stars}</div>
          </div>
          <a href="recipe-detail.html?id=${r.id}" class="btn btn-primary btn-view-recipe">View Recipe →</a>
        </div>
      </div>`;
    })
    .join("");

  /* re-trigger scroll animations on newly added cards */
  grid.querySelectorAll("[data-animate]").forEach((el) => {
    el.classList.remove("animate-in");
    animationObserver && animationObserver.observe(el);
  });
}

function renderStarHTML(rating) {
  const full = Math.round(rating);
  return (
    Array.from(
      { length: 5 },
      (_, i) => `<span class="star ${i < full ? "filled" : "empty"}">★</span>`,
    ).join("") + ` <span class="rating-value">${rating}</span>`
  );
}

/* =========================================================
   RECIPES FILTER BAR
   ========================================================= */
function getSortedFilteredList(filter, sort) {
  const base =
    filter === "all"
      ? [...RECIPES]
      : RECIPES.filter((r) => r.category === filter);

  switch (sort) {
    case "rating":
      return base.sort((a, b) => b.rating - a.rating);
    case "quickest":
      return base.sort((a, b) => a.time - b.time);
    case "popular":
      // Most popular = highest rated first
      return base.sort((a, b) => b.rating - a.rating);
    case "newest":
      // Newest = reverse of default insertion order
      return base.reverse();
    default:
      return base;
  }
}

function initRecipeFilter() {
  const btns = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sortSelect");
  if (!btns.length) return;

  const params = new URLSearchParams(window.location.search);
  const initialFilter = params.get("category") || "all";

  // Activate the matching button on load
  btns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === initialFilter);
  });

  function applyFiltersAndSort() {
    const activeFilter =
      document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    const activeSort = sortSelect ? sortSelect.value : "popular";
    renderFromList(getSortedFilteredList(activeFilter, activeSort));
  }

  applyFiltersAndSort();

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFiltersAndSort();
    });
  });

  sortSelect?.addEventListener("change", applyFiltersAndSort);
}

function renderFromList(list) {
  const grid = document.getElementById("recipesGrid");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;
  if (countEl) countEl.textContent = list.length;
  grid.innerHTML = list
    .map((r) => {
      const stars = renderStarHTML(r.rating);
      return `
      <div class="recipe-card" data-category="${r.category}" data-id="${r.id}" data-animate>
        <div class="recipe-card-img">
          <img src="${r.image}" alt="${r.title}" loading="lazy">
          <span class="recipe-card-badge">${r.categoryLabel}</span>
        </div>
        <div class="recipe-card-body">
          <h3>${r.title}</h3>
          <p>${r.description}</p>
          <div class="recipe-card-meta">
            <span>⏱ ${r.timeLabel}</span>
            <span>👤 ${r.difficulty}</span>
            <div class="recipe-card-stars">${stars}</div>
          </div>
          <a href="recipe-detail.html?id=${r.id}" class="btn btn-primary btn-view-recipe">View Recipe →</a>
        </div>
      </div>`;
    })
    .join("");
  grid.querySelectorAll("[data-animate]").forEach((el) => {
    animationObserver && animationObserver.observe(el);
  });
}

/* =========================================================
   RECIPE DETAIL PAGE
   ========================================================= */
function initRecipeDetail() {
  if (!document.getElementById("recipeHero")) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "rolex";
  const recipe = RECIPES.find((r) => r.id === id) || RECIPES[0];

  /* page title */
  document.title = `${recipe.title} | Taste Uganda`;

  /* --- HERO --- */
  document.getElementById("recipeHeroBg").style.backgroundImage =
    `url('${recipe.image}')`;
  document.getElementById("recipeHeroBadge").textContent = recipe.categoryLabel;
  document.getElementById("recipeHeroTitle").textContent = recipe.title;
  document.getElementById("recipeHeroDesc").textContent = recipe.description;
  document.getElementById("recipeHeroTime").textContent = recipe.timeLabel;
  document.getElementById("recipeHeroDiff").textContent = recipe.difficulty;
  document.getElementById("recipeHeroServes").textContent = recipe.serves;
  document.getElementById("recipeHeroRegion").textContent = recipe.region;
  document.getElementById("recipeHeroStars").innerHTML = renderStarHTML(
    recipe.rating,
  );

  const breadcrumbTitle = document.getElementById("recipeBreadcrumbTitle");
  if (breadcrumbTitle) breadcrumbTitle.textContent = recipe.title;

  /* --- SIDEBAR --- */
  document.getElementById("sidebarTime").textContent = recipe.timeLabel;
  document.getElementById("sidebarDiff").textContent = recipe.difficulty;
  document.getElementById("sidebarServes").textContent = recipe.serves;
  document.getElementById("sidebarRegion").textContent = recipe.region;
  document.getElementById("sidebarCategory").textContent = recipe.categoryLabel;
  document.getElementById("sidebarRating").textContent = `${recipe.rating} / 5`;

  document.getElementById("ingredientsList").innerHTML = recipe.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");

  /* --- STEPS --- */
  document.getElementById("recipeStepsTitle").textContent =
    `How to Make ${recipe.title}`;
  document.getElementById("stepsList").innerHTML = recipe.steps
    .map((s) => `<li><p>${s}</p></li>`)
    .join("");

  /* --- SIMILAR RECIPES --- */
  const similarGrid = document.getElementById("similarRecipesGrid");
  if (similarGrid) {
    const similar = RECIPES.filter(
      (r) => r.category === recipe.category && r.id !== recipe.id,
    ).slice(0, 3);
    const fallback =
      similar.length < 3
        ? [
            ...similar,
            ...RECIPES.filter(
              (r) => r.id !== recipe.id && !similar.includes(r),
            ).slice(0, 3 - similar.length),
          ]
        : similar;

    similarGrid.innerHTML = fallback
      .map(
        (r) => `
      <div class="recipe-card" data-animate>
        <div class="recipe-card-img">
          <img src="${r.image}" alt="${r.title}" loading="lazy">
          <span class="recipe-card-badge">${r.categoryLabel}</span>
        </div>
        <div class="recipe-card-body">
          <h3>${r.title}</h3>
          <p>${r.description}</p>
          <div class="recipe-card-meta">
            <span>⏱ ${r.timeLabel}</span>
            <span>👤 ${r.difficulty}</span>
            <div class="recipe-card-stars">${renderStarHTML(r.rating)}</div>
          </div>
          <a href="recipe-detail.html?id=${r.id}" class="btn btn-primary btn-view-recipe">View Recipe →</a>
        </div>
      </div>`,
      )
      .join("");

    similarGrid.querySelectorAll("[data-animate]").forEach((el) => {
      animationObserver && animationObserver.observe(el);
    });
  }
}
