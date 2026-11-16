/**
 * ==========================================================================
 * HOICHOI CAFÉ - MULTI-PAGE APPLICATION CORE & STATE ENGINE
 * Chatterjeehut, 710 Shibpur Rd, Naora, Shibpur, Howrah, West Bengal 711104
 * Contact: 091236 17586 | Open Daily: 11:00 AM - 11:00 PM
 * ==========================================================================
 */

// ---------------------------------------------------------------------------
// 1. MENU DATABASE
// ---------------------------------------------------------------------------
const MENU_ITEMS = [
  // --- MOMOS ---
  {
    id: "hc-momo-fried",
    name: "Chicken Fried Momos 6 Pieces",
    category: "momos",
    price: 129,
    description: "Crispy golden-fried momos stuffed with juicy minced chicken, scallions and aromatic spices. Served with fiery Kolkata chilli-garlic chutney and mayo.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller",
    dietary: ["non-veg"],
    tastingNotes: ["Crispy Exterior", "Juicy Chicken", "Spicy Chutney"],
    customizable: true
  },
  {
    id: "hc-momo-cheese",
    name: "Cheese Chicken Baked Momo",
    category: "momos",
    price: 169,
    description: "Steamed tender chicken dumplings layered in velvety white cheese sauce and baked with generous molten mozzarella and Italian herbs.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
    badge: "Most Loved",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Molten Mozzarella", "Garlic Herb", "Rich & Creamy"],
    customizable: true
  },
  {
    id: "hc-momo-bbq",
    name: "Veg Chicken Royal BBQ Momo",
    category: "momos",
    price: 159,
    description: "Pan-seared momos generously glazed in smoky Royal BBQ reduction, tossed with bell peppers, caramelised onions and toasted sesame.",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop",
    badge: "Signature",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Smoky Barbecue", "Charred Onion", "Sesame Crunch"],
    customizable: true
  },
  {
    id: "hc-momo-steamed",
    name: "Chicken Steamed Momos 6 Pieces",
    category: "momos",
    price: 119,
    description: "Delicate hand-pinched translucent dumplings filled with fresh chicken, fresh ginger and coriander. Served with piping hot clear soup.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    badge: "Healthy",
    dietary: ["non-veg"],
    tastingNotes: ["Light & Fresh", "Clear Broth", "Authentic Garlic Sauce"],
    customizable: true
  },
  {
    id: "hc-momo-veg",
    name: "Veg Steamed Momos 6 Pieces",
    category: "momos",
    price: 99,
    description: "Fresh farm cabbage, grated carrots, cottage paneer and spring onions infused with mild herbs, steamed fresh on order.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    badge: "Pure Veg",
    dietary: ["veg"],
    tastingNotes: ["Fresh Veggies", "Cottage Paneer", "Zesty Dip"],
    customizable: true
  },

  // --- PIZZAS ---
  {
    id: "hc-pizza-chef",
    name: "Hoichoi Chicken Chef Special Pizza 6 Inches",
    category: "pizza",
    price: 229,
    description: "Our signature 6-inch hand-stretched pizza loaded with marinated spiced chicken chunks, mozzarella, bell peppers, olives & chef's secret herb drizzle.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    badge: "Chef Special",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Herb Chicken", "Stone Baked Crust", "Secret Sauce"],
    customizable: true
  },
  {
    id: "hc-pizza-margherita",
    name: "Chicken Margherita Pizza 6 Inches",
    category: "pizza",
    price: 189,
    description: "Crisp personal 6-inch crust with San Marzano tomato herb sauce, seasoned diced chicken, and double layered stretchy mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800&auto=format&fit=crop",
    badge: "Classic",
    dietary: ["non-veg"],
    tastingNotes: ["San Marzano Herb", "Double Mozzarella", "Crispy Edge"],
    customizable: true
  },
  {
    id: "hc-pizza-bbq",
    name: "Chicken BBQ Pizza",
    category: "pizza",
    price: 219,
    description: "Tender chunks of slow-roasted barbecue chicken, red onions, charred sweet peppers, mozzarella, and a tangy sweet BBQ swirl.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller",
    dietary: ["non-veg"],
    tastingNotes: ["Sweet & Smoky BBQ", "Red Onion", "Golden Crust"],
    customizable: true
  },
  {
    id: "hc-pizza-periperi",
    name: "Chicken Peri Peri Pizza",
    category: "pizza",
    price: 219,
    description: "Fiery African bird's eye peri-peri spiced chicken breast, sweet corn, spicy jalapenos, and mozzarella on our fresh crispy base.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    badge: "Spicy Hit",
    dietary: ["non-veg"],
    tastingNotes: ["Peri Peri Kick", "Sweet Corn", "Zesty Jalapeno"],
    customizable: true
  },

  // --- CRISPY APPETIZERS ---
  {
    id: "hc-crispy-fish",
    name: "Fish Fingers 4 Pieces",
    category: "crispy",
    price: 179,
    description: "Crispy crumbed Kolkata Bhetki style fish fillets fried to golden perfection, served with freshly whipped tartar sauce and lemon wedge.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    badge: "House Special",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Tender Fish Fillet", "Golden Crumb", "House Tartar"],
    customizable: true
  },
  {
    id: "hc-crispy-popcorn",
    name: "Chicken Popcorn Large",
    category: "crispy",
    price: 149,
    description: "Generous bucket of bite-sized tender chicken cubes seasoned with secret herbs and spices, fried crunchy. Served with creamy garlic dip.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    badge: "Hangout Snack",
    dietary: ["non-veg"],
    tastingNotes: ["Crunchy Bites", "Garlic Mayo", "Addictive"],
    customizable: true
  },
  {
    id: "hc-crispy-chicken",
    name: "Crishpy Chiken",
    category: "crispy",
    price: 159,
    description: "Crispy coated boneless chicken strips fried to a deep golden crunch, spiced with Kolkata style chaat masala and herb rub.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    badge: "Crispy Crunch",
    dietary: ["non-veg"],
    tastingNotes: ["Chaat Masala", "Golden Batter", "Juicy Inside"],
    customizable: true
  },
  {
    id: "hc-crispy-chickfry",
    name: "Chick Fry",
    category: "crispy",
    price: 139,
    description: "Traditional street-style spicy chicken fry tossed with green chillies, curry leaves, onions, and lemon twist.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop",
    badge: "Spicy",
    dietary: ["non-veg"],
    tastingNotes: ["Green Chilli Heat", "Curry Leaf", "Zesty Lemon"],
    customizable: false
  },
  {
    id: "hc-crispy-fries",
    name: "Crispy Peri Peri French Fries",
    category: "crispy",
    price: 99,
    description: "Golden crispy potato shoestrings tossed generously in fiery peri peri seasoning. Served with tomato salsa and cheesy mayo.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    badge: "Popular",
    dietary: ["veg"],
    tastingNotes: ["Peri Peri Dust", "Crispy Crunch", "Cheese Dip"],
    customizable: true
  },

  // --- BEVERAGES & COFFEES ---
  {
    id: "hc-drink-blueheaven",
    name: "Blue Heaven Mocktail",
    category: "beverages",
    price: 119,
    description: "A dazzling electric-blue curacao refresher infused with fresh lime juice, crushed mint leaves, and effervescent soda over crushed ice.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    badge: "Top Mocktail",
    dietary: ["veg", "special"],
    tastingNotes: ["Blue Curacao", "Fresh Lime", "Cool Mint Fizz"],
    customizable: false
  },
  {
    id: "hc-coffee-cold",
    name: "Hoichoi Cold Coffee",
    category: "beverages",
    price: 129,
    description: "Our legendary thick and creamy cold coffee blended with rich espresso, whole milk, vanilla cream, and chocolate fudge syrup.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller",
    dietary: ["veg"],
    tastingNotes: ["Velvety Espresso", "Chocolate Swirl", "Chilled Cream"],
    customizable: true
  },
  {
    id: "hc-drink-velvet",
    name: "Hoichoi Cold N Cold Velvet with Jelly",
    category: "beverages",
    price: 139,
    description: "Specialty layered beverage with velvety strawberry-vanilla milk shake, soft coffee/fruit jelly cubes, and whipped topping.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    badge: "Specialty",
    dietary: ["veg", "special"],
    tastingNotes: ["Silky Velvet", "Chewy Jelly", "Berry Vanilla"],
    customizable: false
  },
  {
    id: "hc-coffee-cappuccino",
    name: "Cappuccino",
    category: "beverages",
    price: 99,
    description: "Rich double espresso shot crowned with thick velvety steamed milk foam and dusted with organic dark cocoa powder.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
    badge: "Hot Brew",
    dietary: ["veg"],
    tastingNotes: ["Espresso Crema", "Steamed Microfoam", "Dark Cocoa"],
    customizable: true
  },
  {
    id: "hc-coffee-hot",
    name: "Hot Coffee",
    category: "beverages",
    price: 79,
    description: "Classic comforting Indian style whipped café latte, rich and invigorating with a frothy top.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    badge: "Classic",
    dietary: ["veg"],
    tastingNotes: ["Whipped Foam", "Rich Roast", "Comfort Warmth"],
    customizable: true
  },
  {
    id: "hc-drink-tea",
    name: "Special Tea",
    category: "beverages",
    price: 49,
    description: "Aromatic Assam whole leaf tea brewed with fresh crushed green cardamom, ginger, and creamy milk.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    badge: "Cozy",
    dietary: ["veg"],
    tastingNotes: ["Crushed Cardamom", "Fresh Ginger", "Assam Leaf"],
    customizable: false
  },
  {
    id: "hc-drink-hotchocolate",
    name: "Hot Chocolate",
    category: "beverages",
    price: 119,
    description: "Decadent melted Belgian style chocolate whisked with rich steamed milk, mini marshmallows, and dark chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop",
    badge: "Decadent",
    dietary: ["veg"],
    tastingNotes: ["Melted Chocolate", "Marshmallows", "Sweet Comfort"],
    customizable: false
  },
  {
    id: "hc-drink-mojito",
    name: "Virgin Mint Mojito",
    category: "beverages",
    price: 109,
    description: "Muddled fresh garden mint, Persian lime slices, organic cane sugar, and sparkling club soda over crushed ice.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    badge: "Zesty",
    dietary: ["veg"],
    tastingNotes: ["Garden Mint", "Sparkling Lime", "Chilled Fizz"],
    customizable: false
  },
  {
    id: "hc-dessert-brownie",
    name: "Sizzling Chocolate Brownie with Ice Cream",
    category: "beverages",
    price: 129,
    description: "Warm gooey dark chocolate walnut brownie served on a sizzler plate topped with creamy vanilla bean gelato and hot molten fudge.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    badge: "Dessert Special",
    dietary: ["veg", "special"],
    tastingNotes: ["Walnut Fudge", "Vanilla Gelato", "Molten Chocolate"],
    customizable: false
  },

  // --- SPECIAL COMBOS ---
  {
    id: "hc-combo-chinese",
    name: "Chinese Combo",
    category: "combos",
    price: 249,
    description: "Wholesome combo bowl: Fragrant Chicken Egg Fried Rice or Hakka Noodles paired with spicy Chilli Chicken gravy and crisp Veg Spring Roll.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    badge: "Value Combo",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Egg Fried Rice", "Chilli Chicken", "Spring Roll"],
    customizable: true
  },
  {
    id: "hc-combo-pizzafries",
    name: "Pizza French Fries Moektail Combo",
    category: "combos",
    price: 299,
    description: "The ultimate hangout feast: Choice of 6-inch Chicken Margherita or BBQ Pizza + Basket of Peri Peri Fries + Blue Heaven Mocktail.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    badge: "Best Value",
    dietary: ["non-veg", "special"],
    tastingNotes: ["6-Inch Pizza", "Peri Peri Fries", "Blue Mocktail"],
    customizable: true
  }
];

// Gallery Images Data Store
const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Chicken Fried Momos with Red Garlic Chutney",
    category: "momos",
    caption: "Golden fried momos served piping hot with authentic Kolkata chilli garlic dip.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "Cheese Chicken Baked Momo",
    category: "momos",
    caption: "Freshly baked momos smothered under molten mozzarella cheese and Italian herbs.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Hoichoi Chef Special 6-Inch Pizza",
    category: "pizza",
    caption: "Handcrafted stone-baked pizza loaded with spicy herb chicken and peppers.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "Electric Blue Heaven Mocktail",
    category: "beverages",
    caption: "Signature blue curacao and mint fizz served chilled with fresh lime slices.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "Hoichoi Cold Coffee with Chocolate Drizzle",
    category: "beverages",
    caption: "Thick, creamy, and indulgent cold brew blended with fresh cream and dark cocoa.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Crispy Golden Fish Fingers",
    category: "pizza",
    caption: "Kolkata style crumbed fish fingers served with chef's signature tartar sauce.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-7",
    title: "Cozy Evening Ambiance at Hoichoi Cafe",
    category: "ambiance",
    caption: "Warm amber lighting and intimate seating for relaxed hangouts with loved ones.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-8",
    title: "Fresh Steamed Chicken Momos",
    category: "momos",
    caption: "Traditional bamboo steamer dumplings packed with succulent minced chicken.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-9",
    title: "Barista Counter & Coffee Craft",
    category: "ambiance",
    caption: "Where our aromatic coffees and signature mocktails are freshly crafted.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-10",
    title: "Chicken BBQ Pizza with Caramelized Onions",
    category: "pizza",
    caption: "Smoky BBQ chicken chunks, charred onions, and stringy melted mozzarella.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-11",
    title: "Hangout Moments with Friends & Family",
    category: "ambiance",
    caption: "Laughter, debates, and sharing comfort food — the true spirit of Hoichoi.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "gal-12",
    title: "Velvet Cooler with Jelly & Cream",
    category: "beverages",
    caption: "Layers of strawberry cream, fruit jelly cubes, and chocolate shavings.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop"
  }
];

// Helper: Format price in Indian Rupees (₹)
function formatPrice(amount) {
  return `₹${Math.round(amount)}`;
}

// ---------------------------------------------------------------------------
// 2. STATE STORE & CART LOGIC
// ---------------------------------------------------------------------------
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("hoichoi_cafe_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

const state = {
  cart: loadCartFromStorage(),
  orderType: "pickup", // 'pickup', 'dinein', 'delivery'
  tipPercent: 0,
  promoDiscount: 0,
  activeFilter: "all",
  activeDietary: "all",
  searchQuery: "",
  activeModalItem: null,
  activeGalleryFilter: "all",
  currentLightboxIndex: 0
};

function saveCartToStorage() {
  try {
    localStorage.setItem("hoichoi_cafe_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
}

// ---------------------------------------------------------------------------
// 3. THEME TOGGLE (Dark Roast / Warm Cream Daylight)
// ---------------------------------------------------------------------------
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("hoichoi_theme") || "dark";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("hoichoi_theme", nextTheme);
      updateThemeIcon(nextTheme, themeIcon);
      showToast(`Switched to ${nextTheme === "dark" ? "Dark Roast" : "Warm Cream"} theme`, "ph-palette");
    });
  }
}

function updateThemeIcon(theme, iconEl) {
  if (!iconEl) return;
  if (theme === "dark") {
    iconEl.className = "ph ph-sun";
  } else {
    iconEl.className = "ph ph-moon";
  }
}

// ---------------------------------------------------------------------------
// 4. DYNAMIC CAFE OPERATING HOURS (11:00 AM - 11:00 PM Daily)
// ---------------------------------------------------------------------------
function initCafeHours() {
  const statusEl = document.getElementById("liveStatusText");
  const hoursList = document.getElementById("hoursList");
  const now = new Date();
  const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday...
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  // Highlight today in schedule list if present
  if (hoursList) {
    const todayLi = hoursList.querySelector(`li[data-day="${currentDay}"]`);
    if (todayLi) todayLi.classList.add("today");
  }

  // Hoichoi Cafe Operating Hours: 11:00 AM (11.0) to 11:00 PM (23.0)
  const openTime = 11.0;
  const closeTime = 23.0;

  const isOpen = currentTimeDec >= openTime && currentTimeDec < closeTime;

  if (statusEl) {
    if (isOpen) {
      statusEl.innerHTML = `<strong>Open Now</strong> • Welcoming you until 11:00 PM`;
    } else {
      statusEl.innerHTML = `<strong>Currently Closed</strong> • Opens at 11:00 AM`;
    }
  }
}

// ---------------------------------------------------------------------------
// 5. MOBILE DRAWER NAVIGATION
// ---------------------------------------------------------------------------
function initMobileDrawer() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("mobileCloseBtn");
  const backdrop = document.getElementById("drawerBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// ---------------------------------------------------------------------------
// 6. MENU RENDERING, SEARCH & CATEGORY FILTERING
// ---------------------------------------------------------------------------
function initMenu() {
  const container = document.getElementById("menuContainer");
  const searchInput = document.getElementById("menuSearchInput");
  const categoryButtons = document.querySelectorAll(".menu-filters .filter-btn");
  const dietaryChips = document.querySelectorAll(".dietary-chip");

  // Category filter click
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeFilter = btn.dataset.filter || "all";
      renderMenuItems();
    });
  });

  // Dietary chips click
  dietaryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      dietaryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeDietary = chip.dataset.dietary || "all";
      renderMenuItems();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderMenuItems();
    });
  }

  // Initial render if container exists
  if (container) {
    renderMenuItems();
  }

  // Also render Homepage featured & best-sellers if on home page
  renderHomepageSections();
}

function renderMenuItems() {
  const container = document.getElementById("menuContainer");
  const countEl = document.getElementById("menuResultCount");
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    // Category match
    const catMatch = (state.activeFilter === "all" || item.category === state.activeFilter);

    // Dietary match
    let dietMatch = true;
    if (state.activeDietary !== "all") {
      dietMatch = item.dietary.includes(state.activeDietary);
    }

    // Search query match
    let searchMatch = true;
    if (state.searchQuery) {
      const q = state.searchQuery;
      searchMatch = (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tastingNotes.some(note => note.toLowerCase().includes(q))
      );
    }

    return catMatch && dietMatch && searchMatch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} dish${filtered.length === 1 ? '' : 'es'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state text-center" style="grid-column: 1 / -1; padding: 4rem 1rem;">
        <i class="ph ph-magnifying-glass" style="font-size: 3rem; color: var(--accent-light); opacity: 0.6;"></i>
        <h3 style="margin-top: 1rem; font-family: var(--font-heading);">No dishes found</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your search terms or dietary filters.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 1.5rem;" onclick="resetMenuFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => createMenuCardHTML(item)).join("");
}

function createMenuCardHTML(item) {
  const isVeg = item.dietary.includes("veg");
  const foodTypeIcon = `<span class="food-type-icon ${isVeg ? 'veg' : 'non-veg'}" title="${isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>`;

  return `
    <article class="menu-card glassmorphism" data-id="${item.id}">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ""}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            ${foodTypeIcon}
            <h3 class="menu-item-title">${item.name}</h3>
          </div>
          <span class="menu-item-price">${formatPrice(item.price)}</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-item-tags">
          ${item.tastingNotes.map(note => `<span class="item-tag-pill">${note}</span>`).join("")}
        </div>
        <div class="menu-card-actions">
          ${item.customizable ? `
            <button class="btn-custom" onclick="openItemCustomModal('${item.id}')">
              <i class="ph ph-sliders-horizontal"></i>
              <span>Customize</span>
            </button>
          ` : `<span></span>`}
          <button class="btn btn-primary btn-sm" onclick="handleItemAdd('${item.id}')">
            <i class="ph ph-plus"></i>
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function resetMenuFilters() {
  state.activeFilter = "all";
  state.activeDietary = "all";
  state.searchQuery = "";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".menu-filters .filter-btn").forEach(b => b.classList.remove("active"));
  const allCatBtn = document.querySelector(".menu-filters .filter-btn[data-filter='all']");
  if (allCatBtn) allCatBtn.classList.add("active");
  document.querySelectorAll(".dietary-chip").forEach(c => c.classList.remove("active"));
  const allDietBtn = document.querySelector(".dietary-chip[data-dietary='all']");
  if (allDietBtn) allDietBtn.classList.add("active");
  renderMenuItems();
}

function renderHomepageSections() {
  const featuredContainer = document.getElementById("featuredHomeContainer");
  const bestSellersContainer = document.getElementById("bestSellersContainer");

  // Featured Highlights: Chef Special Pizza, Royal BBQ Momo, Blue Heaven, Hoichoi Cold Coffee
  if (featuredContainer) {
    const featuredIds = ["hc-pizza-chef", "hc-momo-bbq", "hc-drink-blueheaven", "hc-coffee-cold"];
    const featuredItems = MENU_ITEMS.filter(it => featuredIds.includes(it.id));
    featuredContainer.innerHTML = featuredItems.map(item => createMenuCardHTML(item)).join("");
  }

  // Best Sellers: Fried Momos, Chicken Margherita Pizza, Popcorn Large, Cheese Baked Momo, Fish Fingers
  if (bestSellersContainer) {
    const bestSellerIds = ["hc-momo-fried", "hc-pizza-margherita", "hc-crispy-popcorn", "hc-momo-cheese", "hc-crispy-fish", "hc-combo-pizzafries"];
    const bestSellerItems = MENU_ITEMS.filter(it => bestSellerIds.includes(it.id));
    bestSellersContainer.innerHTML = bestSellerItems.map(item => createMenuCardHTML(item)).join("");
  }
}

// ---------------------------------------------------------------------------
// 7. ITEM ADD & CUSTOMIZATION MODAL
// ---------------------------------------------------------------------------
function handleItemAdd(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (item.customizable) {
    openItemCustomModal(itemId);
  } else {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      customs: "Standard",
      qty: 1
    });
  }
}

function openItemCustomModal(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  state.activeModalItem = item;
  const modalBackdrop = document.getElementById("itemModal");
  if (!modalBackdrop) {
    // If modal HTML isn't on this page, add standard item to cart directly
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      customs: "Standard",
      qty: 1
    });
    return;
  }

  document.getElementById("modalProductImg").src = item.image;
  document.getElementById("modalProductName").textContent = item.name;
  document.getElementById("modalProductDesc").textContent = item.description;
  document.getElementById("modalProductPrice").textContent = formatPrice(item.price);

  // Reset form selections
  const form = document.getElementById("itemCustomForm");
  if (form) form.reset();

  // Reset add-on checkboxes
  const cheeseBox = document.getElementById("modCheese");
  if (cheeseBox) cheeseBox.checked = false;

  updateModalFinalPrice();
  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  const modalBackdrop = document.getElementById("itemModal");
  if (modalBackdrop) modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  state.activeModalItem = null;
}

function initModalHandlers() {
  const modalBackdrop = document.getElementById("itemModal");
  const closeBtn = document.getElementById("closeItemModalBtn");
  const cancelBtn = document.getElementById("modalCancelBtn");
  const addBtn = document.getElementById("modalAddBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeItemModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeItemModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeItemModal();
    });
  }

  // Live price updates on option changes
  const form = document.getElementById("itemCustomForm");
  if (form) {
    form.addEventListener("change", updateModalFinalPrice);
  }

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      if (!state.activeModalItem) return;

      const unitPrice = calculateModalUnitPrice();
      const spiceEl = document.querySelector('input[name="spiceLevel"]:checked');
      const dipEl = document.querySelector('input[name="dipChoice"]:checked');
      const cheeseBox = document.getElementById("modCheese");

      const notes = [];
      if (spiceEl && spiceEl.value !== "normal") notes.push(spiceEl.parentElement.textContent.trim());
      if (dipEl) notes.push(dipEl.parentElement.textContent.trim());
      if (cheeseBox && cheeseBox.checked) notes.push("Extra Molten Cheese (+₹30)");

      const customsString = notes.length > 0 ? notes.join(" • ") : "Standard Prep";

      addToCart({
        id: `${state.activeModalItem.id}-${Date.now()}`,
        name: state.activeModalItem.name,
        price: unitPrice,
        image: state.activeModalItem.image,
        customs: customsString,
        qty: 1
      });

      closeItemModal();
    });
  }
}

function calculateModalUnitPrice() {
  if (!state.activeModalItem) return 0;
  let price = state.activeModalItem.price;

  // Extra cheese add-on
  const cheeseBox = document.getElementById("modCheese");
  if (cheeseBox && cheeseBox.checked) {
    price += 30;
  }

  return price;
}

function updateModalFinalPrice() {
  const price = calculateModalUnitPrice();
  const label = document.getElementById("modalCalculatedPrice");
  if (label) label.textContent = formatPrice(price);
}

// ---------------------------------------------------------------------------
// 8. SHOPPING CART ENGINE & SLIDE DRAWER
// ---------------------------------------------------------------------------
function initCart() {
  const cartTrigger = document.getElementById("cartTrigger");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const orderTypeBtns = document.querySelectorAll(".type-pill");
  const tipBtns = document.querySelectorAll(".tip-pill");
  const applyPromoBtn = document.getElementById("applyPromoBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const copyCoupon = document.getElementById("copyCoupon");

  if (cartTrigger) {
    cartTrigger.addEventListener("click", openCart);
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCart);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", () => {
      closeCart();
      const mobileDrawer = document.getElementById("mobileDrawer");
      if (mobileDrawer) mobileDrawer.classList.remove("open");
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (state.cart.length === 0) return;
      if (confirm("Clear all items from your order?")) {
        state.cart = [];
        saveCartToStorage();
        renderCartUI();
        showToast("Your cart has been cleared", "ph-trash");
      }
    });
  }

  // Order Type selector
  orderTypeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      orderTypeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.orderType = btn.dataset.type;
      showToast(`Switched order type to: ${btn.textContent.trim()}`, "ph-bag");
    });
  });

  // Tip Selector
  tipBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tipBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.tipPercent = parseFloat(btn.dataset.tip) || 0;
      renderCartUI();
    });
  });

  // Promo Code
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener("click", applyPromoCode);
  }

  if (copyCoupon) {
    copyCoupon.addEventListener("click", () => {
      const promoInput = document.getElementById("promoCodeInput");
      if (promoInput) {
        promoInput.value = "HOICHOI10";
        openCart();
        applyPromoCode();
      }
    });
  }

  // Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Your cart is empty! Add items from the menu first.", "ph-warning");
        return;
      }
      showCheckoutSuccessModal();
    });
  }

  // Render initial cart
  renderCartUI();
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (drawer) drawer.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function addToCart(itemObj) {
  const existing = state.cart.find(
    i => i.id === itemObj.id && i.customs === itemObj.customs
  );

  if (existing) {
    existing.qty += itemObj.qty || 1;
  } else {
    state.cart.push({
      id: itemObj.id,
      name: itemObj.name,
      price: itemObj.price,
      image: itemObj.image,
      customs: itemObj.customs || "Standard",
      qty: itemObj.qty || 1
    });
  }

  saveCartToStorage();
  renderCartUI();
  showToast(`Added "${itemObj.name}" to cart!`, "ph-shopping-bag");
}

function updateCartQty(idx, delta) {
  if (!state.cart[idx]) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveCartToStorage();
  renderCartUI();
}

function removeCartItem(idx) {
  if (!state.cart[idx]) return;
  state.cart.splice(idx, 1);
  saveCartToStorage();
  renderCartUI();
  showToast("Item removed from cart", "ph-trash");
}

function renderCartUI() {
  const countBadge = document.getElementById("cartCount");
  const cartHeaderCount = document.getElementById("cartHeaderCount");
  const itemsContainer = document.getElementById("cartItemsList");
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  if (countBadge) countBadge.textContent = totalItemsCount;
  if (cartHeaderCount) cartHeaderCount.textContent = `${totalItemsCount} item${totalItemsCount === 1 ? '' : 's'}`;

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-view">
        <i class="ph ph-bag-simple" style="font-size: 3rem; color: var(--accent-light); opacity: 0.5;"></i>
        <h4>Your cart is empty</h4>
        <p>Explore our delicious momos, pizzas & mocktails to add items.</p>
        <a href="menu.html" class="btn btn-primary btn-sm" onclick="closeCart()">Browse Full Menu</a>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item-row">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-customs">${item.customs}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        </div>
        <div class="cart-item-controls">
          <div class="cart-qty-pill">
            <button onclick="updateCartQty(${idx}, -1)" title="Decrease">&minus;</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${idx}, 1)" title="Increase">&plus;</button>
          </div>
          <button class="cart-remove-btn" onclick="removeCartItem(${idx})" title="Remove item">Remove</button>
        </div>
      </div>
    `).join("");
  }

  // Calculate pricing breakdown in Indian Rupees (₹)
  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const discount = subtotal * (state.promoDiscount / 100);
  const discountedSubtotal = subtotal - discount;
  const tip = discountedSubtotal * (state.tipPercent / 100);
  const total = discountedSubtotal + tip;

  if (document.getElementById("cartSubtotal")) {
    document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
  }

  const discountRow = document.getElementById("discountRow");
  if (discountRow) {
    if (state.promoDiscount > 0) {
      discountRow.style.display = "flex";
      document.getElementById("cartDiscount").textContent = `-${formatPrice(discount)} (${state.promoDiscount}%)`;
    } else {
      discountRow.style.display = "none";
    }
  }

  if (document.getElementById("cartTip")) {
    document.getElementById("cartTip").textContent = formatPrice(tip);
  }
  if (document.getElementById("cartTotal")) {
    document.getElementById("cartTotal").textContent = formatPrice(total);
  }
}

function applyPromoCode() {
  const input = document.getElementById("promoCodeInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "HOICHOI10" || code === "AURA10") {
    state.promoDiscount = 10;
    renderCartUI();
    showToast("Promo code applied! 10% discount added.", "ph-tag");
    input.disabled = true;
  } else if (code === "") {
    showToast("Please enter a promo code", "ph-warning");
  } else {
    showToast(`Invalid promo code "${code}"`, "ph-x-circle");
  }
}

function showCheckoutSuccessModal() {
  const modal = document.getElementById("checkoutSuccessModal");
  if (!modal) return;

  const randomCode = Math.floor(1000 + Math.random() * 9000);
  const ref = document.getElementById("orderReferenceCode");
  if (ref) {
    ref.textContent = `#HC-${randomCode}`;
  }

  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const discount = subtotal * (state.promoDiscount / 100);
  const discountedSubtotal = subtotal - discount;
  const tip = discountedSubtotal * (state.tipPercent / 100);
  const total = discountedSubtotal + tip;

  const totalEl = document.getElementById("modalOrderTotal");
  if (totalEl) totalEl.textContent = formatPrice(total);

  // Clear cart on successful order
  state.cart = [];
  saveCartToStorage();
  renderCartUI();
  closeCart();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  const closeBtn = document.getElementById("closeOrderSuccessBtn");
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    };
  }
}

// ---------------------------------------------------------------------------
// 9. TABLE RESERVATION SYSTEM
// ---------------------------------------------------------------------------
function initReservationForm() {
  const form = document.getElementById("reservationForm");
  const ticketView = document.getElementById("bookingTicket");
  const printBtn = document.getElementById("printTicketBtn");
  const newBookBtn = document.getElementById("newBookingBtn");

  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById("resDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("resName") ? document.getElementById("resName").value.trim() : "";
    const phone = document.getElementById("resPhone") ? document.getElementById("resPhone").value.trim() : "";
    const date = document.getElementById("resDate") ? document.getElementById("resDate").value : "";
    const time = document.getElementById("resTime") ? document.getElementById("resTime").value : "";
    const guests = document.getElementById("resGuests") ? document.getElementById("resGuests").value : "2";
    const seating = document.getElementById("resSeating") ? document.getElementById("resSeating").value : "Cozy Corner";
    const notes = document.getElementById("resNotes") ? document.getElementById("resNotes").value.trim() : "None";

    if (!name || !phone || !date || !time) {
      showToast("Please fill in all required fields.", "ph-warning");
      return;
    }

    // Generate Booking Ticket
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const codeStr = `#HC-${randomCode}`;

    if (ticketView) {
      if (document.getElementById("ticketName")) document.getElementById("ticketName").textContent = name;
      if (document.getElementById("ticketPhone")) document.getElementById("ticketPhone").textContent = phone;
      if (document.getElementById("ticketDate")) document.getElementById("ticketDate").textContent = formatDate(date);
      if (document.getElementById("ticketTime")) document.getElementById("ticketTime").textContent = time;
      if (document.getElementById("ticketGuests")) document.getElementById("ticketGuests").textContent = `${guests} Guest${guests > 1 ? 's' : ''}`;
      if (document.getElementById("ticketSeating")) document.getElementById("ticketSeating").textContent = seating;
      if (document.getElementById("ticketCode")) document.getElementById("ticketCode").textContent = codeStr;
      if (document.getElementById("ticketNotes")) document.getElementById("ticketNotes").textContent = notes || "No special requests";

      form.style.display = "none";
      ticketView.style.display = "block";
      ticketView.scrollIntoView({ behavior: "smooth", block: "center" });

      showToast(`Reservation confirmed for ${name}! Booking ID: ${codeStr}`, "ph-check-circle");
    }
  });

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  if (newBookBtn) {
    newBookBtn.addEventListener("click", () => {
      form.reset();
      form.style.display = "block";
      if (ticketView) ticketView.style.display = "none";
      form.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

// ---------------------------------------------------------------------------
// 10. ATMOSPHERIC GALLERY & LIGHTBOX
// ---------------------------------------------------------------------------
function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const lightbox = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("closeLightboxBtn");
  const prevBtn = document.getElementById("prevLightboxBtn");
  const nextBtn = document.getElementById("nextLightboxBtn");

  if (!galleryGrid) return;

  function renderGallery() {
    const filtered = GALLERY_ITEMS.filter(item => {
      return state.activeGalleryFilter === "all" || item.category === state.activeGalleryFilter;
    });

    galleryGrid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-card" onclick="openLightbox(${idx})">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-card-overlay">
          <span class="gallery-cat">${item.category}</span>
          <h4 class="gallery-title">${item.title}</h4>
          <span class="gallery-icon"><i class="ph ph-magnifying-glass-plus"></i></span>
        </div>
      </div>
    `).join("");
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeGalleryFilter = btn.dataset.filter || "all";
      renderGallery();
    });
  });

  renderGallery();

  // Lightbox functions
  window.openLightbox = function(idx) {
    const filtered = GALLERY_ITEMS.filter(item => {
      return state.activeGalleryFilter === "all" || item.category === state.activeGalleryFilter;
    });
    if (!filtered[idx]) return;

    state.currentLightboxIndex = idx;
    updateLightboxUI(filtered);
    if (lightbox) {
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  function updateLightboxUI(filteredList) {
    const item = filteredList[state.currentLightboxIndex];
    if (!item) return;

    const img = document.getElementById("lightboxImg");
    const caption = document.getElementById("lightboxCaption");
    const title = document.getElementById("lightboxTitle");
    const counter = document.getElementById("lightboxCounter");

    if (img) img.src = item.image;
    if (caption) caption.textContent = item.caption;
    if (title) title.textContent = item.title;
    if (counter) counter.textContent = `${state.currentLightboxIndex + 1} / ${filteredList.length}`;
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function navLightbox(direction) {
    const filtered = GALLERY_ITEMS.filter(item => {
      return state.activeGalleryFilter === "all" || item.category === state.activeGalleryFilter;
    });
    state.currentLightboxIndex = (state.currentLightboxIndex + direction + filtered.length) % filtered.length;
    updateLightboxUI(filtered);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => navLightbox(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => navLightbox(1));

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });
}

// ---------------------------------------------------------------------------
// 11. AMBIENT CAFE SOUNDSCAPE (Web Audio API - Zero MP3 Dependencies)
// ---------------------------------------------------------------------------
let audioCtx = null;
let soundNodes = [];
let isPlayingAudio = false;

function initAmbientSound() {
  const toggleBtn = document.getElementById("soundToggle");
  const icon = document.getElementById("soundIcon");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (!isPlayingAudio) {
      startAmbientAudio();
      isPlayingAudio = true;
      toggleBtn.classList.add("playing");
      if (icon) icon.className = "ph ph-speaker-high";
      showToast("Cozy cafe soundscape playing...", "ph-headphones");
    } else {
      stopAmbientAudio();
      isPlayingAudio = false;
      toggleBtn.classList.remove("playing");
      if (icon) icon.className = "ph ph-speaker-slash";
      showToast("Ambiance muted", "ph-speaker-slash");
    }
  });
}

function startAmbientAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();

    // 1. Warm pink noise generator (simulating warm cafe background murmur)
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.035; // gentle, non-intrusive volume
      b6 = white * 0.115926;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to warm cafe frequencies (150Hz - 900Hz)
    const filter = audioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 400;
    filter.Q.value = 1.0;

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    whiteNoise.start();

    soundNodes.push(whiteNoise);
  } catch (e) {
    console.warn("Ambient audio not supported or blocked by browser policy:", e);
  }
}

function stopAmbientAudio() {
  soundNodes.forEach(node => {
    try { node.stop(); } catch (e) {}
  });
  soundNodes = [];
  if (audioCtx) {
    try { audioCtx.close(); } catch (e) {}
    audioCtx = null;
  }
}

// ---------------------------------------------------------------------------
// 12. CONTACT FORM & NEWSLETTER SUBSCRIPTION
// ---------------------------------------------------------------------------
function initContactAndNewsletter() {
  const contactForm = document.getElementById("contactForm");
  const newsletterForm = document.getElementById("newsletterForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName") ? document.getElementById("contactName").value.trim() : "Friend";
      showToast(`Thank you, ${name}! Your message was received. We'll reply soon!`, "ph-paper-plane-tilt");
      contactForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : "";
      showToast(`Welcome! 10% coupon code HOICHOI10 confirmed for ${email}`, "ph-gift");
      newsletterForm.reset();
    });
  }
}

// ---------------------------------------------------------------------------
// 13. TOAST NOTIFICATION UTILITY
// ---------------------------------------------------------------------------
function showToast(message, iconClass = "ph-info") {
  let toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="ph-fill ${iconClass}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    toast.style.transition = "all 0.35s ease";
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3200);
}

// ---------------------------------------------------------------------------
// 14. INITIALIZE APPLICATION ON DOM READY
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCafeHours();
  initMobileDrawer();
  initMenu();
  initModalHandlers();
  initCart();
  initReservationForm();
  initGallery();
  initAmbientSound();
  initContactAndNewsletter();

  // Header scroll shadow effect
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
